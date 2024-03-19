"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VisuallyHiddenInput } from "@/app/become-tutor/page";
import { signup } from "@/actions/signup";

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
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [acadamic_year, setAcadamicYear] = useState("");
  const [password_question, setPasswordQuestion] = useState("");
  const [password_answer, setPasswordAnswer] = useState("");
  const [picture, setPicture] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        first_name,
        last_name,
        email,
        password,
        university,
        phone_number,
        acadamic_year,
        password_question,
        password_answer,
        picture,
      });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInWithGoogle = () => {
    alert(`With google`);
  };

  const handleFilechange = (e) => {
    setPicture(e.target.files[0]);
  };

  useEffect(() => {
    console.log("picture:", picture);
  }, [picture]);

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
          <Typography variant="h5">Sign Up</Typography>
          <SimonText
            placeholder="First Name"
            variant="outlined"
            fullWidth
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <SimonText
            placeholder="Last Name"
            variant="outlined"
            fullWidth
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

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
            placeholder="Phone Number"
            variant="outlined"
            fullWidth
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
          <SimonText
            placeholder="Security Question"
            variant="outlined"
            fullWidth
            value={password_question}
            onChange={(e) => setPasswordQuestion(e.target.value)}
            required
          />
          <SimonText
            placeholder="Security Answer"
            variant="outlined"
            fullWidth
            value={password_answer}
            onChange={(e) => setPasswordAnswer(e.target.value)}
            required
          />
          <SimonText
            placeholder="University"
            variant="outlined"
            fullWidth
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          />
          <SimonText
            placeholder="Acadamic Year"
            variant="outlined"
            fullWidth
            value={acadamic_year}
            onChange={(e) => setAcadamicYear(e.target.value)}
            required
          />
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<Icon icon="icon-park-outline:upload-picture" />}
            sx={{
              color: "#555",
            }}
            disableElevation
          >
            Upload Profile Picture
            <VisuallyHiddenInput
              onChange={(e) => handleFilechange(e)}
              type="file"
            />
          </Button>
          <SimonButton
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Sign Up
          </SimonButton>
        </Stack>
      </Container>
    </>
  );
}

export default Login;
