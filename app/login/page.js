"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
  Switch,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { signin } from "@/actions/signin";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const [role, setRole] = useState("Student");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin({
        email,
        password,
        role,
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
            <Typography style={{
              fontWeight: "bold",
            }} variant="h3">
              Peer
              <span
                style={{
                  color: "#FF9D01",
                }}
              >
                Connect
              </span>
            </Typography>
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
          <Stack direction="row" sx={{ width: "100%" }} alignItems="center">
            <Typography>I'm a Tutor</Typography>
            <Switch
              checked={role === "Tutor"}
              onChange={(e) => setRole(e.target.checked ? "Tutor" : "Student")}
            />
          </Stack>
          <Stack direction="row" sx={{ width: "100%" }} alignItems="center">
            <Link href="/reset-password" passHref>
              Forgot Password?
            </Link>
          </Stack>
          <SimonButton
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Sign In as {role}
          </SimonButton>
        </Stack>
      </Container>
    </>
  );
}

export default Login;
