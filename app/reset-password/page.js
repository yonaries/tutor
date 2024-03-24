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
import { useRouter } from "next/navigation";
import { resetPassword } from "@/actions/reset-password";
import { toast } from "sonner";

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
  const [user_password_answer, setUserPasswordAnswer] = useState("");
  const [server_password_question, setServerPasswordQuestion] = useState("");
  const [server_password_answer, setServerPasswordAnswer] = useState("");
  const [userFound, setUserFound] = useState(false);
  const [role, setRole] = useState("student");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await resetPassword({
        email,
        role,
      });
      setUserFound(true);
      const { password_question, password_answer } = data;
      console.log(password_question);
      setServerPasswordQuestion(password_question);
      setServerPasswordAnswer(password_answer);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSecurityCheck = async () => {
    const isValid = server_password_answer === user_password_answer;
    if (isValid) {
      router.push(`/reset-password/${email}?role=${role}`);
    } else {
      toast.error("Security Question and Answer didn't match ");
    }
  };

  if (!userFound) {
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
              <Image
                src="/Home.png"
                alt="Home Image"
                width={194}
                height={118}
              />
            </Box>
            <Typography variant="h5">Reset Password</Typography>
            <SimonText
              placeholder="Email"
              variant="outlined"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Stack direction="row" sx={{ width: "100%" }} alignItems="center">
              <Typography>I'm a Tutor</Typography>
              <Switch
                checked={role === "tutor"}
                onChange={(e) =>
                  setRole(e.target.checked ? "tutor" : "student")
                }
              />
            </Stack>
            <SimonButton
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Find Account
            </SimonButton>
          </Stack>
        </Container>
      </>
    );
  } else {
    return (
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
          <Typography variant="h5">Reset Password</Typography>
          <SimonText
            placeholder="Security Question"
            variant="outlined"
            type="text"
            fullWidth
            value={server_password_question}
            required
            disabled
          />
          <SimonText
            placeholder="Security Answer"
            variant="outlined"
            type="text"
            fullWidth
            value={user_password_answer}
            onChange={(e) => setUserPasswordAnswer(e.target.value)}
            required
          />
          <SimonButton
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleSecurityCheck}
          >
            Reset Password
          </SimonButton>
        </Stack>
      </Container>
    );
  }
}

export default Login;
