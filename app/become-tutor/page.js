"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signupAsTutor } from "@/actions/signup";
import { getAllCourses } from "@/actions/course";
import * as React from "react";
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
export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
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
  const [availability, setAvailability] = useState("");
  const [teachingMethod, setTeachingMethod] = useState("");
  const [courses, setCourses] = useState("Select Course");
  const [ratePerHour, setRatePerHour] = useState("");
  const [picture, setPicture] = useState();
  const [courses_options, setCoursesOptions] = useState([]);

  const router = useRouter();

  useEffect(() => {
    async function fetchCourses() {
      const res = await getAllCourses();
      setCoursesOptions(res);
    }
    fetchCourses();
    console.log(picture);
  }, [picture]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupAsTutor({
        first_name,
        last_name,
        email,
        password,
        university,
        course: courses,
        teaching_method: teachingMethod,
        price: ratePerHour,
        rating: 3,
        status: availability,
        phone_number,
        acadamic_year,
        password_question,
        password_answer,
        picture,
      });
      router.push("/pricing");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilechange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ width: 400 }}
            >
              <Typography variant="h5">Become a tutor</Typography>
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
              <SimonText
                placeholder="Availability"
                variant="outlined"
                fullWidth
                required
                value={availability}
                type="number"
                onChange={(e) => setAvailability(e.target.value)}
              />
              <Select
                value={teachingMethod}
                onChange={(e) => {
                  setTeachingMethod(e.target.value);
                }}
                label="Teaching Method"
                fullWidth
              >
                <MenuItem value="In-Person">In-Person</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
              </Select>
              <Select
                value={courses}
                onChange={(e) => {
                  setCourses(e.target.value);
                }}
                label="Courses"
                fullWidth
              >
                {courses_options.map((course) => (
                  <MenuItem value={course.name}>{course.name}</MenuItem>
                ))}
              </Select>
              <SimonText
                placeholder="Rate per hour (ETB)"
                variant="outlined"
                fullWidth
                required
                type="number"
                value={ratePerHour}
                onChange={(e) => setRatePerHour(e.target.value)}
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
                InputLabelProps={{ shrink: true }}
              >
                Register
              </SimonButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              width={736 - 200}
              height={1001 - 200}
              src="/become.png"
              alt="become"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;
