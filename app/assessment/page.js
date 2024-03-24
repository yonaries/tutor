"use client";
import { signin } from "@/actions/signin";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Assessment() {
  const [isTutor, setIsTutor] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const role = JSON.parse(localStorage.getItem("userRole"));
    const user = JSON.parse(localStorage.getItem("user"))[0];
    setIsTutor(role === "Tutor");
    setCourses([user.course]);
  });

  const handleAssessmentSelection = (event) => {
    setSelectedCourse(event.target.value);
  };

  if (!isTutor) {
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
          <Typography variant="h5">Assessment</Typography>
          <Typography variant="body1">
            PeerConnect evaluates your skills and knowledge in the subject you
            are tutoring in. The assessment is designed to help us understand
            your strengths and areas of improvement. The assessment is timed and
            consists of multiple-choice questions. You will be able to see the
            questions and the time remaining on the screen. Once you start the
            assessment, you will not be able to pause or stop it. Please make
            sure you have a stable internet connection before starting the
            assessment.
          </Typography>

          <Typography variant="h6">
            You are not qualified to take any assessments. Become a tutor and
            take the assessments to earn money.
          </Typography>
        </Stack>
      </Container>
    );
  }

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
        <Stack justifyContent="center" spacing={2} sx={{ width: 400 }}>
          <Box sx={{ pb: 5 }}>
            <Image src="/Home.png" alt="Home Image" width={194} height={118} />
          </Box>
          <Typography variant="h5">Assessment</Typography>
          <Typography variant="body2">
            PeerConnect evaluates your skills and knowledge in the subject you
            are tutoring in. The assessment is designed to help us understand
            your strengths and areas of improvement. The assessment is timed and
            consists of multiple-choice questions. You will be able to see the
            questions and the time remaining on the screen. Once you start the
            assessment, you will not be able to pause or stop it. Please make
            sure you have a stable internet connection before starting the
            assessment.
          </Typography>
          <Stack spacing={2} paddingY={"2rem"} direction="row">
            <Card>
              <CardContent>
                <FormControl>
                  <FormLabel
                    style={{
                      marginBottom: "2rem",
                    }}
                    id="demo-radio-buttons-group-label"
                  >
                    You are qualified to take the following assessments:
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={selectedCourse}
                    onChange={handleAssessmentSelection}
                  >
                    {courses.map((course, idx) => (
                      <FormControlLabel
                        value={course}
                        control={<Radio />}
                        label={course}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
          </Stack>
          <a href={`/assessment/${selectedCourse}`}>
            <Button variant="contained">Start Assessment</Button>
          </a>
        </Stack>
      </Container>
    </>
  );
}

export default Assessment;
