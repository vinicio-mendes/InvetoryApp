import {
  Avatar,
  Box,
  Button,
  Group,
  LoadingOverlay,
  Modal,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useDelAccount } from "../queries/AccountQueries";
import { CustomNextPage } from "../types/CustomNextPage";

const getWordInitials = (word: string): string => {
  const bits = word.trim().split(" ");
  return bits
    .map((bit) => bit.charAt(0))
    .join("")
    .toUpperCase();
};

const settings: CustomNextPage = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { data: session } = useSession();
  const { mutate: delAcc, isLoading: delAccLoading } = useDelAccount();
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Group align='center' mb={"3rem"}>
        <Title size='1.5rem' weight='500'>
          Configurações
        </Title>
        <ThemeIcon variant='light' color='orange' size='md'>
          <FiSettings size={22} />
        </ThemeIcon>
      </Group>
      <Box sx={{ height: "100%" }}>
        <Stack align={"center"} sx={{ height: "100%" }}>
          <Text align='center'>{`Voce está logado como:`}</Text>
          <Text
            weight={600}
            sx={{ textDecoration: "underline" }}
          >{`${session?.user?.email}`}</Text>
          <Avatar
            src={session?.user?.image}
            radius='xl'
            color='blue'
            variant='light'
            size='lg'
          >
            {`${getWordInitials(session?.user?.name ?? "")}`}
          </Avatar>
          <Group align={"center"} sx={{ justifyContent: "center" }}>
            <Button onClick={() => signOut()} sx={{ width: "180px" }}>
              Sair
            </Button>
            <Button
              color='red'
              sx={{ width: "180px" }}
              onClick={() => setDeleteModal(true)}
            >
            Apagar minha conta
            </Button>
          </Group>
        </Stack>
      </Box>
      {/* DELETE ACCOUT MODAL */}
      <Modal
        opened={deleteModal}
        onClose={() => setDeleteModal(false)}
        centered
      >
        <LoadingOverlay visible={delAccLoading} />
        <Group
          align='center'
          mb={"2rem"}
          mt={"2rem"}
          sx={{ justifyContent: "center" }}
        >
          <Title size='1.5rem' weight='500'>
            Account Deletion
          </Title>
          <ThemeIcon variant='light' color='orange' size='md'>
            <FiSettings size={22} />
          </ThemeIcon>
        </Group>
        <Box sx={{ height: "100%" }}>
          <Stack align={"center"} sx={{ height: "100%" }}>
            <Text
              align='center'
              color='red'
              weight='500'
            >{`Are you sure you want to delete your account?`}</Text>
            <Group align={"center"} sx={{ justifyContent: "center" }}>
              <Button
                onClick={() => setDeleteModal(false)}
                sx={{ width: "180px" }}
              >
                Cancelar
              </Button>
              <Button
                color='red'
                sx={{ width: "180px" }}
                onClick={() =>
                  delAcc(undefined, {
                    onError: () => {
                      setDeleteModal(false);
                      window.location.reload();
                    },
                  })
                }
                disabled={delAccLoading}
              >
                Deletar minha conta
              </Button>
            </Group>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

settings.requireAuth = true;

export default settings;
