"use client";
import {
  fetchTutorQualification,
  getTutor,
  uploadTutorQualification,
  rateTutor,
  fetchTutorRating,
} from "@/actions/tutor";
import { VisuallyHiddenInput } from "@/app/become-tutor/page";
import Nav from "@/components/Nav";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SimonModal } from "@/components/modal";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 42,
  height: 42,
}));

function Page() {
  const { slug } = useParams();

  const [tutor, setTutor] = useState();
  const [hasError, setError] = useState(false);
  const [isTutor, setIsTutor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userId, setUserId] = useState();
  const [reviews, setReviews] = useState([]);

  const [ratingValue, setRatingValue] = useState(1);
  const [ratingComment, setRatingComment] = useState("");
  const [studyHours, setStudyHours] = useState(0);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const user = JSON.parse(localStorage.getItem("user"))[0];
    const userRole = JSON.parse(role);
    setIsTutor(userRole === "Tutor");
    setUserId(user.id);

    if (!tutor)
      getTutor(slug)
        .then((data) => {
          setTutor(data);
          fetchTutorQualification(data.id).then((data) => {
            setTutor((prev) => ({ ...prev, certificate: data }));
            console.log(tutor);
          });
          fetchTutorRating(data.id).then((data) => {
            setReviews(data);
          });
        })
        .catch((error) => {
          setError(true);
        });
  }, [slug, isTutor]);

  const handleCertificateUpload = async (e) => {
    const file = e.target.files[0];
    try {
      uploadTutorQualification({ id: tutor.id, picture: file });
      window.location.reload();
    } catch (error) {}
  };

  const handleRatingSubmit = async () => {
    try {
      await rateTutor({
        id: tutor.id,
        student_id: userId,
        hours: studyHours,
        score: ratingValue,
        comment: ratingComment,
      });
      window.location.reload();
    } catch (error) {}
  };

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  if (hasError || !tutor) {
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "6rem",
        }}
      >
        <Typography color="red" variant="h5">
          Profile Not Found
        </Typography>
        <Link href="/find">Go Back To Finder</Link>
      </div>
    );
  }
  const certificateLoader = ({ src }) => {
    return src;
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Nav />
      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item spacing={1} xs={12} sm={4}>
          <Stack spacing={3}>
            <Card sx={{ borderRadius: 6, pb: 1, pt: 5 }} elevation={0}>
              <CardContent>
                <Stack justifyContent="center" alignItems="center">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    badgeContent={
                      <SmallAvatar alt="Remy Sharp" src="/med2.png" />
                    }
                    width={100}
                  >
                    <Avatar
                      alt="Travis Howard"
                      src={tutor.profile_picture}
                      sx={{
                        width: 100,
                        height: 100,
                      }}
                    />
                  </Badge>
                  <Typography variant="h6">
                    {tutor.first_name + " " + tutor.last_name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#A05E45" }}>
                    Student • Master&apos;s Degree{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 3, textAlign: "center" }}
                  >
                    Certified Math and Physics Tutor with a Master&apos;s
                    degree. 5+ years experience. Specializing in SAT prep.
                    Let&apos;s reach your goals together!
                  </Typography>

                  <Box
                    sx={{
                      background: alpha("#F0F0F0", 0.5),
                      borderRadius: 5,
                      width: "100%",
                      mt: 10,
                      py: 2,
                      px: 2,
                      textAlign: "center",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Stack>
                        <Typography variant="caption">Worked</Typography>
                        <Typography variant="h5" sx={{ color: "#FF9D01" }}>
                          {tutor.hours}
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography variant="caption">Rate</Typography>
                        <Typography variant="h5" sx={{ color: "#FF9D01" }}>
                          {tutor.price}/hr
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography variant="caption">Certificates</Typography>
                        <Typography variant="h5" sx={{ color: "#FF9D01" }}>
                          5
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  <Stack
                    sx={{ mt: 3 }}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <SimonModal open={isModalOpen} setOpen={setIsModalOpen}>
                      <Stack spacing={2}>
                        <Typography variant="h6">Tutor Contact</Typography>
                        <Typography variant="body1">
                          Email: {tutor.email}
                        </Typography>
                      </Stack>
                    </SimonModal>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            {/** Rating */}
            {!isTutor && (
              <Card sx={{ borderRadius: 6, pb: 1, pt: 5 }} elevation={0}>
                <CardHeader
                  title={
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between">
                        <Box>
                          <IconButton variant="contained">
                            <Icon icon="material-symbols:favorite" />
                          </IconButton>
                        </Box>
                        <Stack direction="row" spacing={1}>
                          <Typography variant="body2">
                            {tutor.rating}
                          </Typography>
                          <Rating
                            name="read-only"
                            value={tutor.rating}
                            readOnly
                          />
                        </Stack>
                      </Stack>
                      <Typography variant="h5">
                        Hey, how was your tutor session Drop some Rating!
                      </Typography>
                    </Stack>
                  }
                />
                <CardContent>
                  <Typography variant="body2">
                    Hey, how was your tutor session Drop some Rating!
                  </Typography>
                  <Stack
                    sx={{ py: 5, width: "100%" }}
                    alignItems="center"
                    spacing={3}
                  >
                    <Rating
                      value={ratingValue}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                      }}
                      size="large"
                    />
                    <TextField
                      placeholder="Do you want to say anything more..."
                      sx={{ width: "90%", background: "#eee" }}
                      multiline
                      maxRows={4}
                      minRows={4}
                      onChange={(e) => setRatingComment(e.target.value)}
                    />
                    <TextField
                      placeholder="How many hours did you study?"
                      sx={{ width: "90%", background: "#eee" }}
                      type="number"
                      onChange={(e) => setStudyHours(e.target.value)}
                    />
                    <Button
                      sx={{ textTransform: "none", color: "black" }}
                      variant="outlined"
                      onClick={handleRatingSubmit}
                    >
                      Submit
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            )}
          </Stack>
        </Grid>

        {/* Certificates */}
        <Grid item xs={12} sm={8}>
          <Stack sx={{ mt: 4 }} spacing={2}>
            <Typography variant="h6">Certificates</Typography>
            <Grid container spacing={2}>
              {tutor.certificate &&
                tutor.certificate.map((certificate, key) => (
                  <Grid item xs={12} md={6} key={key}>
                    <Box sx={{ overflow: "hidden" }}>
                      <Image
                        myLoader={certificateLoader}
                        src={certificate.certificate}
                        alt="certificate"
                        width={500}
                        height={300}
                      />
                    </Box>
                  </Grid>
                ))}

              {isTutor && userId === tutor.id && (
                <Grid item xs={12} md={6}>
                  <Box sx={{ overflow: "hidden", height: "100%" }}>
                    <Button
                      variant="outlined"
                      sx={{ width: "100%", height: "100%", color: "black" }}
                      startIcon={<Icon icon="ph:certificate-duotone" />}
                      component="label"
                      role={undefined}
                      tabIndex={-1}
                    >
                      Add Certificate
                      <VisuallyHiddenInput
                        onChange={handleCertificateUpload}
                        type="file"
                      />
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Stack>
        <Stack sx={{ mt: 4 }} spacing={2}>
          <Typography variant="h6">Reviews</Typography>
          <Grid container spacing={2}>
            {reviews.map(({ score, comment }, key) => (
              <Grid item xs={12} md={3} key={key}>
                <Review stars={score} text={comment} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Page;

function Review({ stars, text }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" alignItems="center">
            <Typography variant="body1">({stars})</Typography>
            {Array(stars)
              .fill(0)
              .map((_, key) => (
                <Icon icon="tabler:star-filled" color="orange" key={key} />
              ))}
            {Array(5 - stars)
              .fill(0)
              .map((_, key) => (
                <Icon icon="tabler:star" key={key} />
              ))}
          </Stack>
          <Typography variant="body2">{text}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
