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
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { changePassword } from "@/actions/reset-password";

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
  const [new_password, setNewPassword] = useState("");
  const [repeat_new_password, setRepeatNewPassword] = useState("");

  const router = useRouter();
  const { slug } = useParams();
  const email = decodeURIComponent(slug);

  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (new_password !== repeat_new_password)
      toast.error("Password Doesn't Match");
    else {
      try {
        await changePassword({ email, password: new_password, role });
        router.push("/login");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

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
          placeholder="New Password"
          variant="outlined"
          type="password"
          fullWidth
          value={new_password}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <SimonText
          placeholder="Confirm New Password"
          variant="outlined"
          type="password"
          fullWidth
          value={repeat_new_password}
          onChange={(e) => setRepeatNewPassword(e.target.value)}
          required
        />

        <SimonButton
          type="submit"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Verify It's You
        </SimonButton>
      </Stack>
    </Container>
  );
}

export default Login;
