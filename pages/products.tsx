import {
  Autocomplete,
  Box,
  Button,
  Center,
  Col,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  NumberInput,
  Paper,
  Select,
  Skeleton,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TbClipboardList } from "react-icons/tb";
import { useGetCategoriesId } from "../queries/CategoryQueries";
import { useDeleteProduct, useGetProducts, usePatchProdcuts, usePostProduct } from "../queries/ProductQueries";
import { CustomNextPage } from "../types/CustomNextPage";
import type { ProductsWithDate } from "../types/getProducts";
import { patchProductSchema } from "../types/patchProduct";
import { postProductSchema } from "../types/postProduct";
import { queryClient } from "./_app";

const products: CustomNextPage = () => {
  const { data: products, isLoading: productsLoading } = useGetProducts({
    take: "20",
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

  //GET SELECTED PRODUCT ID BY PRESSING THE BUTTON
  const [selectedProductId, setSelectedProductId] =
    useState<ProductsWithDate["id"]>("");
  const [selectedProduct, setSelectedProduct] =
    useState<ProductsWithDate["name"]>("");

  //MODAL STATE
  const [postProductModal, setPostModalProduct] = useState(false);
  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [patchProductModal, setPatchProductModal] = useState(false);
  const postProductForm = useForm({
    validate: zodResolver(postProductSchema),
    initialValues: {
      name: "",
      price: 0,
      description: "",
      categoryId: "",
    },
  });
  const patchProductForm = useForm({
    validate: zodResolver(patchProductSchema),
    initialValues: {
      id: "",
      name: "",
      price: 0,
      description: "",
      categoryId: "",
    },
  });

  //GET CATEGORIES ID
  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesId();

  interface selectCategory {
    value: string;
    label: string;
  }

  //SET DATA OF SELECT CATEGORY
  const [selectCategory, setSelectCategory] = useState<selectCategory[]>([]);
  useEffect(() => {
    if (categories) {
      setSelectCategory([]);
      categories.map((cat) =>
        setSelectCategory((selectData) => [
          ...selectData,
          { value: cat.id, label: cat.name },
        ])
      );
    }
  }, [categories]);

  //POST PRODUCT MUTATION
  const { mutate: postProduct, isLoading: postProductLoading } =
    usePostProduct();

  //DELETE PRODUCT MUTATION
  const { mutate: deleteProduct, isLoading: deleteProductLoading } =
    useDeleteProduct();

  const { mutate: patchProduct, isLoading: patchProductLoading } =
    usePatchProdcuts();

  return (
    <main>
      {/* TITLE */}
      <Group align="center" mb={"3rem"}>
        <Title size="1.5rem" weight="500">
          Seus produtos
        </Title>
        <ThemeIcon variant="light" color="grape" size="md">
          <TbClipboardList size={22} />
        </ThemeIcon>
      </Group>

      {/* SEARCH BAR */}
      <Group align="center" mb="1.5rem">
        <Autocomplete
          data={autoCompleteOption}
          value={autoCompleteValue}
          onChange={setAutoCompleteValue}
          placeholder="Search by Product Name..."
          nothingFound="No Products Found"
          icon={<FiSearch />}
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="easeInOut"
          sx={{ maxWidth: "600px", width: "100%" }}
        />
      </Group>

      {/* NO PRODUCTS */}
      {products?.length === 0 && !productsLoading && (
        <Group align="center">
          <Text size={"lg"}>No Products</Text>
          <TbClipboardList
            size={20}
            style={{ transform: "translateY(-1.5px)" }}
          />
        </Group>
      )}

      {/* PRODUCTS */}
      <Skeleton
        visible={productsLoading}
        sx={{ minHeight: products?.length === 0 ? "0px" : "150px" }}
      >
        <Grid grow gutter="sm" sx={{ height: "100%" }}>
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
                  p="xl"
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
                    weight="400"
                    mb={"sm"}
                    color="gray"
                    variant="text"
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
                    spacing="md"
                    noWrap
                    mb="1.5rem"
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
                      color="blue"
                      onClick={() => {
                        setPatchProductModal(true);
                        patchProductForm.setValues({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          description: product.description ?? "",
                          categoryId: product.categoryId,
                        });
                      }}
                    >
                      Alterar detalhes
                    </Button>
                    <Button
                      color="red"
                      onClick={() => {
                        setDeleteProductModal(true);
                        setSelectedProductId(product.id);
                        setSelectedProduct(product.name);
                      }}
                    >
                      Deletar
                    </Button>
                  </Group>
                </Paper>
              </Col>
            );
          })}
        </Grid>
      </Skeleton>
      {/*ACTIONS FOR CREATING PRODUCT  */}
      <Box mt="3rem">
        <Button variant={"outline"} onClick={() => setPostModalProduct(true)}>
          Criar Produto
        </Button>
      </Box>

      {/* CREATE MODAL */}
      <Modal
        onClose={() => setPostModalProduct(false)}
        opened={postProductModal}
        centered
        title="Criação de Produto"
      >
        <form
          onSubmit={postProductForm.onSubmit((values) => {
            postProduct(
              {
                categoryId: values.categoryId,
                description: values.description,
                name: values.name,
                price: values.price,
              },
              {
                onSuccess: () => {
                  setPostModalProduct(false);
                  queryClient.refetchQueries(["products"]);
                },
              }
            );
          })}
        >
          <LoadingOverlay
            visible={postProductLoading}
            transitionDuration={300}
          />
          <TextInput
            placeholder="Nome do Produto"
            label="Name"
            withAsterisk
            mb="md"
            {...postProductForm.getInputProps("name")}
          />
          <NumberInput
            placeholder={0}
            label="Preço"
            withAsterisk
            precision={2}
            step={0.5}
            mb="md"
            {...postProductForm.getInputProps("price")}
          />
          <Textarea
            placeholder="Descrição do Produto"
            label="Descrição"
            withAsterisk
            mb="md"
            {...postProductForm.getInputProps("description")}
          />
          <Select
            label="Categorias"
            data={selectCategory}
            mb="md"
            placeholder="Selecionar Categoria"
            withAsterisk
            {...postProductForm.getInputProps("categoryId")}
          />
          <Group>
            <Button color="blue" type="submit">
              Criar Produto
            </Button>
            <Button color="red" onClick={() => setPostModalProduct(false)}>
              Sair
            </Button>
          </Group>
        </form>
      </Modal>

      {/* DELETE PRODUCT MODAL */}
      <Modal
        onClose={() => setDeleteProductModal(false)}
        opened={deleteProductModal}
        centered
        title="Product Deletion"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            deleteProduct(selectedProductId, {
              onSuccess: () => {
                setDeleteProductModal(false);
                queryClient.refetchQueries(["products"]);
              },
            });
          }}
        >
          <LoadingOverlay visible={deleteProductLoading} />
          <Text align="center" color="red" size="md">
            Are you sure you want to delete
          </Text>
          <Text mb="xl" align="center" weight="600">
            {selectedProduct}?
          </Text>
          <Center>
            <Group>
              <Button color="red" type={"submit"}>
                Excluir Produto
              </Button>
              <Button color="blue" onClick={() => setDeleteProductModal(false)}>
                Exit
              </Button>
            </Group>
          </Center>
        </form>
      </Modal>

      {/* PATCH PRODUCT MODAL */}
      <Modal
        onClose={() => setPatchProductModal(false)}
        opened={patchProductModal}
        centered
        title="Atualização do Produto"
      >
        <form
          onSubmit={patchProductForm.onSubmit(() => {
            patchProduct(
              {
                id: patchProductForm.values.id,
                name: patchProductForm.values.name,
                price: patchProductForm.values.price,
                description: patchProductForm.values.description,
                categoryId: patchProductForm.values.categoryId,
              },
              {
                onSuccess: () => {
                  setPatchProductModal(false);
                  queryClient.refetchQueries(["products"]);
                },
              }
            );
          })}
        >
          <LoadingOverlay
            visible={patchProductLoading}
            transitionDuration={300}
          />
          <TextInput
            label="Name"
            placeholder="Product Name"
            mb="md"
            {...patchProductForm.getInputProps("name")}
          />
          <Textarea
            label="Description"
            placeholder="Product Description"
            mb="md"
            {...patchProductForm.getInputProps("description")}
          />
          <NumberInput
            label="Price"
            placeholder="Product Price"
            mb="md"
            precision={2}
            step={0.5}
            {...patchProductForm.getInputProps("price")}
          />
          <Select
            label="Categories"
            data={selectCategory}
            mb="md"
            placeholder="Select Category"
            {...patchProductForm.getInputProps("categoryId")}
          />
          <Group>
            <Button type="submit">Alterar Detalhes</Button>
            <Button color="red" onClick={() => setPatchProductModal(false)}>
              Exit
            </Button>
          </Group>
        </form>
      </Modal>
    </main>
  );
};

products.requireAuth = true;

export default products;
