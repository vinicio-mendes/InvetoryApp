import {
  Autocomplete,
  Box,
  Button,
  Col,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  NumberInput,
  Paper,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { DateTime } from "luxon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBox } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useDeleteDate, usePostDate } from "../queries/DateQueries";
import { useGetProducts } from "../queries/ProductQueries";
import { CustomNextPage } from "../types/CustomNextPage";
import { DeleteDateSchema } from "../types/deleteDate";
import { type ProductsWithDate } from "../types/getProducts";
import { PostDateSchema } from "../types/postDate";
import { queryClient } from "./_app";

const inventory: CustomNextPage = () => {
  const { data: products, isLoading: productsLoading } = useGetProducts({
    take: "20",
    dates: "50",
  });
  const [autoCompleteOption, setAutoCompleteOptions] = useState<
    ProductsWithDate["name"][]
  >([]);
  const [autoCompleteValue, setAutoCompleteValue] =
    useState<ProductsWithDate["name"]>();
  const [filteredProducts, setFilteredProducts] = useState<
    ProductsWithDate[] | undefined
  >([]);
  const [sortBy, setSortBy] = useState<
    "name" | "price" | "quantity" | null | string
  >("name");

  //Set select data for search
  useEffect(() => {
    setAutoCompleteOptions([]);
    if (products) {
      products.map((prod) =>
        setAutoCompleteOptions((selectData) => [...selectData, prod.name])
      );
    }
    setFilteredProducts(products);
  }, [products]);

  //Filter Products by Name
  useEffect(() => {
    if (autoCompleteValue && products) {
      setFilteredProducts((products) =>
        products?.filter((prod) =>
          prod.name.toLowerCase().includes(autoCompleteValue.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [autoCompleteValue, sortBy]);

  //MODAL STATE
  const [changeCurrentInventoryModal, setChangeCurrentInventoryModal] =
    useState(false);
  const [invetoryChangesModal, setInvetoryChangesModal] = useState(false);

  //FORM OF MODAL
  const patchInventoryForm = useForm({
    validate: zodResolver(PostDateSchema),
    initialValues: {
      productId: "",
      date: new Date(),
      stock: 0,
    },
  });

  const deleteInventoryForm = useForm({
    validate: zodResolver(DeleteDateSchema),
    initialValues: {
      productId: "",
      id: "",
    },
  });

  //Post Date Hook
  const { mutate: PostDate, isLoading: PostDateLoading } = usePostDate();
  const { mutate: DeleteDate, isLoading: DeleteDateLoading } = useDeleteDate();

  //Dates of products with inventory
  const [selectedProduct, setSelectedProduct] = useState<ProductsWithDate>();

  return (
    <main>
      {/* TITLE */}
      <Group align='center' mb={"3rem"}>
        <Title size='1.5rem' weight='500'>
          Seu inventário
        </Title>
        <ThemeIcon variant='light' color='violet' size='md'>
          <BsBox size={22} />
        </ThemeIcon>
      </Group>

      {/* SEARCH BAR */}
      <Group align='center' mb='1.5rem'>
        <Autocomplete
          data={autoCompleteOption}
          value={autoCompleteValue}
          onChange={setAutoCompleteValue}
          placeholder='Search by Product Name...'
          nothingFound='No Products Found'
          icon={<FiSearch />}
          transition='pop-top-left'
          transitionDuration={80}
          transitionTimingFunction='easeInOut'
          sx={{ maxWidth: "600px", width: "100%" }}
        />
        {/* <Select
          data={[
            { value: "name", label: "Name" },
            { value: "price", label: "Price" },
            { value: "quantity", label: "Quantity" },
          ]}
          value={sortBy}
          onChange={setSortBy}
          placeholder="Sort By..."
          icon={<FiSearch />}
          sx={{ maxWidth: "200px", width: "100%" }}
        /> */}
      </Group>

      {/* NO INVETORY */}
      {products?.length === 0 && !productsLoading && (
        <Box>
          <Group align='center'>
            <Text size={"lg"}>No Invetory</Text>
            <BsBox size={20} style={{ transform: "translateY(-1.5px)" }} />
          </Group>
          <Link passHref href='/products'>
            <Button component='a' mt='3rem' variant='outline'>
              Criar um Produto
            </Button>
          </Link>
        </Box>
      )}

      {/* PRODUCTS */}
      <Skeleton
        visible={productsLoading}
        sx={{ minHeight: products?.length === 0 ? "0px" : "150px" }}
      >
        <Grid grow gutter='sm' sx={{ height: "100%" }}>
          {filteredProducts?.map((product) => {
            return (
              <Col
                span={3}
                order={2}
                orderSm={1}
                orderLg={3}
                key={product.id}
                sx={{
                  minWidth: "340px",
                  "@media (max-width: 350px)": {
                    minWidth: "100%",
                  },
                }}
              >
                <Paper
                  p='xl'
                  shadow={"lg"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Title order={3}>{product.name}</Title>
                  <Title
                    order={5}
                    weight='400'
                    mb={"sm"}
                    color='gray'
                    variant='text'
                    sx={(theme) => ({
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[0]
                          : theme.colors.gray[6],
                    })}
                  >
                    {product.category.name}
                  </Title>
                  <Text
                    sx={(theme) => ({
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : theme.colors.gray[9],
                    })}
                    mt={"sm"}
                    mb={"sm"}
                  >
                    {product.description}
                  </Text>
                  <Group
                    spacing='md'
                    noWrap
                    mb='1.5rem'
                    sx={{ height: "100%" }}
                  >
                    <Stack sx={{ width: "100%", alignSelf: "flex-end" }}>
                      <Text>Preço atual</Text>
                      <Text>{product.price}$</Text>
                    </Stack>
                    <Stack sx={{ width: "100%", alignSelf: "flex-end" }}>
                      <Text>Estoque atual</Text>
                      <Text>
                        {product?.date[0] ? product?.date[0]?.stock : "0"}
                      </Text>
                    </Stack>
                  </Group>
                  <Group>
                    <Button
                      onClick={() => {
                        patchInventoryForm.setFieldValue(
                          "productId",
                          product.id
                        );
                        patchInventoryForm.setFieldValue(
                          "stock",
                          product.date[0]?.stock
                        );
                        setChangeCurrentInventoryModal(true);
                      }}
                    >
                      Alterar atual inventário
                    </Button>
                    <Button
                      color='violet'
                      onClick={() => {
                        setInvetoryChangesModal(true);
                        setSelectedProduct(product);
                        deleteInventoryForm.setFieldValue(
                          "productId",
                          product.id
                        );
                        deleteInventoryForm.setFieldValue(
                          "id",
                          product.date[0]?.id
                        );
                      }}
                    >
                      Mudanças de inventário
                    </Button>
                  </Group>
                </Paper>
              </Col>
            );
          })}
        </Grid>
      </Skeleton>
      {/* MODAL */}
      <Modal
        opened={changeCurrentInventoryModal}
        onClose={() => setChangeCurrentInventoryModal(false)}
        title='Atualização de Inventário'
        centered
      >
        <form
          onSubmit={patchInventoryForm.onSubmit(() => {
            PostDate(
              {
                productId: patchInventoryForm.values.productId,
                date: patchInventoryForm.values.date,
                stock: patchInventoryForm.values.stock,
              },
              {
                onSuccess: () => {
                  setChangeCurrentInventoryModal(false);
                  queryClient.refetchQueries(["products"]);
                },
              }
            );
          })}
        >
          <LoadingOverlay visible={PostDateLoading} transitionDuration={500} />
          <NumberInput
            placeholder='Número de estoque'
            label='Estoque'
            withAsterisk
            mb='1rem'
            {...patchInventoryForm.getInputProps("stock")}
          />
          <DatePicker
            placeholder='Pick date'
            label='Data do evento'
            labelFormat='MM/YYYY'
            mb='1rem'
            maxDate={new Date()}
            {...patchInventoryForm.getInputProps("date")}
          />
          <Group>
            <Button color='blue' type='submit'>
              Atualizar inventário
            </Button>
            <Button
              color='red'
              onClick={() => setChangeCurrentInventoryModal(false)}
            >
              Exit
            </Button>
          </Group>
        </form>
      </Modal>

      {/* INVETORY DELETE CHANGES MODAL */}
      <Modal
        opened={invetoryChangesModal}
        onClose={() => setInvetoryChangesModal(false)}
        title={`Últimas ${selectedProduct?.date.length} alterações de inventário`}
        centered
        overflow='inside'
      >
        <Stack>
          {selectedProduct?.date.map((date) => {
            return (
              <form
                onSubmit={deleteInventoryForm.onSubmit((values) =>
                  DeleteDate(
                    {
                      id: date.id,
                      productId: values.productId,
                    },
                    {
                      onSuccess: () => {
                        queryClient.invalidateQueries(["products"]);
                        setInvetoryChangesModal(false);
                      },
                    }
                  )
                )}
                key={date.id}
              >
                <LoadingOverlay
                  visible={DeleteDateLoading}
                  transitionDuration={300}
                />
                <Stack
                  spacing='xs'
                  pb='md'
                  sx={(theme) => ({
                    borderBottom:
                      theme.colorScheme === "dark"
                        ? `1px solid ${theme.colors.dark[2]}`
                        : `1px solid ${theme.colors.gray[9]}`,
                  })}
                >
                  <Group>
                    <Text size='md'>
                      Date: {DateTime.fromISO(date?.date as any).toISODate()}
                    </Text>
                    <Text size='md' weight='600'>
                      Estoque: {date.stock}
                    </Text>
                  </Group>
                  <Button
                    color='red'
                    type={"submit"}
                    sx={{ width: "min-content" }}
                  >
                    Delete
                  </Button>
                </Stack>
              </form>
            );
          })}
          {selectedProduct?.date.length === 0 && (
            <Text>Nenhuma alteração no inventário encontrada</Text>
          )}
        </Stack>
      </Modal>
    </main>
  );
};

inventory.requireAuth = true;
export default inventory;
