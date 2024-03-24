"use client";

import { SimonModal } from "@/components/modal";
import Countdown from "@/components/Countdown";
import Nav from "@/components/Nav";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
  Modal,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { toast } from "sonner";

function Page() {
  const { slug } = useParams();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [error, setError] = useState(null);
  const [tutor_id, setTutor_id] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:5012/api/assessment/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setTest(data.test);
        setAnswers(
          Array(data.test.questions.length)
            .fill(0)
            .map(() => null)
        );
      })
      .catch((error) => {
        setError(error);
      });
    const user = JSON.parse(localStorage.getItem("user"))[0];
    setTutor_id(user.id);
  }, [slug]);

  const targetDate = useMemo(() => {
    const d = new Date();
    return d.setMinutes(d.getMinutes() + 10);
  }, []);

  const handleFinishAssessment = () => {
    setIsModalOpen(true);
    let counter = 0;
    test.questions.forEach((question, key) => {
      if (answers[key] === question.answer) {
        counter++;
      }
    });
    setResult(counter);

    fetch(`http://localhost:5012/api/assessment/${tutor_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course_name: slug,
        grade: counter,
      }),
    })
      .then((data) => {
        toast.success("Assessment submitted successfully");
      })
      .catch((error) => {
        toast.error("An error occurred while submitting the assessment");
      });
  };

  if (error) {
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
          <Typography variant="h5">Assessment</Typography>
          <Typography variant="body1">
            An error occurred while fetching the assessment. Please try again
            later.
          </Typography>
        </Stack>
      </Container>
    );
  }
  return (
    <Container maxWidth="lg">
      <Nav />
      <Stack sx={{ mt: 3 }} direction="row" justifyContent="space-between">
        <SimonModal open={isModalOpen} setOpen={setIsModalOpen}>
          <Stack spacing={2}>
            <Typography variant="h6">Your Result</Typography>
            <Typography variant="body1">{result}/10</Typography>
          </Stack>
          <Button onClick={() => router.push(`/profile/${tutor_id}`)}>
            Done
          </Button>
        </SimonModal>
      </Stack>
      <Box
        sx={{
          mt: 3,
          py: 2,
          px: 2,
          boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)",
          borderRadius: 10,
        }}
      >
        Assessment
      </Box>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={12} md={4}>
          <Countdown targetDate={targetDate} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {test &&
              test.questions &&
              answers &&
              test.questions.map((question, key1) => (
                <Card key={key1}>
                  <CardHeader title={question.question} />
                  <CardContent>
                    <Stack spacing={1}>
                      {question.options.map((option, key2) => (
                        <Button
                          key={key2}
                          variant={
                            answers[key1] === key2 ? "contained" : "outlined"
                          }
                          sx={{ textTransform: "none", color: "black" }}
                          onClick={() => {
                            const newAnswers = [...answers];
                            newAnswers[key1] = key2;
                            setAnswers(newAnswers);
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            <Button
              variant="contained"
              onClick={handleFinishAssessment}
              sx={{ my: 10 }}
            >
              Finish
            </Button>
            <Box sx={{ height: 35 }} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default Page;
