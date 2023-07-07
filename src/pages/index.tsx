import { Box, Group, ThemeIcon, Title, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import { AiOutlineHome } from "react-icons/ai";
import { LineChart } from "../components/LineChart";
import { useGetProducts } from "../queries/ProductQueries";
import type { CustomNextPage } from "../types/CustomNextPage";

const Home: CustomNextPage = () => {
  const {
    data: products,
    isLoading: productsLoading,
    refetch,
    isRefetching: productsRefetching,
  } = useGetProducts({
    take: "3",
    dates: "20",
  });
  const { colorScheme } = useMantineColorScheme();

  return (
    <div>
      <Head>
        <title>Fornecedores Hortifruti Higienópolis</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* TITLE */}
        <Group align="center" mb={"3rem"}>
          <Title size="1.5rem" weight="500">
            Últimos produtos atualizados
          </Title>
          <ThemeIcon variant="light" color="blue" size="md">
            <AiOutlineHome size={22} />
          </ThemeIcon>
        </Group>

        {!productsLoading && products && !productsRefetching && (
          <Box
            sx={{
              maxWidth: "90%",
            }}
          >
            {products?.map((product) => {
              return <LineChart product={product} colorsScheme={colorScheme} />;
            })}
          </Box>
        )}
      </div>
    </div>
  );
};

Home.requireAuth = true;

export default Home;
