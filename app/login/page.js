"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signin } from "@/actions/signin";
import { useRouter } from "next/navigation";

const SimonButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: 8,
  background: theme.palette.primary.main,
}));
const SimonButton2 = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: 8,
  background: theme.palette.secondary.main,
}));
const SimonText = styled(TextField)(({ theme }) => ({
  width: "100%",
  background: theme.palette.secondary.main,
  fontSize: 12,
  fontWeight: "600",
  borderRadius: 8,
  border: "1px solid " + theme.palette.secondary.main,
}));
function Login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await signin({
      email,
      password,
    });
    router.push("/find");
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ width: 400 }}
        >
          <Box sx={{ pb: 5 }}>
            <Image src="/Home.png" alt="Home Image" width={194} height={118} />
          </Box>
          <Typography variant="h5">Sign In</Typography>
          <SimonText
            placeholder="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SimonText
            placeholder="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SimonButton
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Sign In
          </SimonButton>
        </Stack>
      </Container>
    </>
  );
}

export default Login;
