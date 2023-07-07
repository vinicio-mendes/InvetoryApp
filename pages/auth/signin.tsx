import { Button, Center, Group, Stack, Text, Title } from "@mantine/core";
import { getProviders, signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { CustomNextPage } from "../../types/CustomNextPage";

const Signin: CustomNextPage = ({ providers }: any) => {
  return (
    <>
      {Object?.values(providers).map((provider: any) => {
        console.log(provider);
        return (
          <Center key={provider.name} sx={{ width: "100vw", height: "100vh" }}>
            <Stack spacing='xl'>
              <Title align='center'>Bem vindo Fornecedor do Hortifruti Higienópolis</Title>
              {provider.name === "Google" && (
                <Button
                  onClick={() => signIn(provider.id)}
                  size={"lg"}
                  sx={{ alignSelf: "center" }}
                >
                  <Group>
                    <Text size='md'>Entre com {provider.name}</Text>
                    <FaGoogle />
                  </Group>
                </Button>
              )}
            </Stack>
          </Center>
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

Signin.requireAuth = false;
export default Signin;
