"use client";
import Image from "next/image";
import styles from "./../page.module.css";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import { fetchTutors } from "@/actions/tutor";

export const SimonDarkButton = styled(Button)(({ theme }) => ({
  color: "black",
  borderRadius: 20,
  textTransform: "none",
  fontWeight: "bold",
  boxShadow: "none",
}));
export default function Home() {
  const [tutors, setTutors] = useState([]);
  const [filterRateRange, setFilterRateRange] = useState("Any");
  const [filterTeachingMethod, setFilterTeachingMethod] = useState("Any");
  const [unfilteredTutors, setUnfilteredTutors] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(null);

  useEffect(() => {
    const filterTutor = () => {
      if (
        filterRateRange !== "Any" ||
        filterTeachingMethod !== "Any" ||
        searchKeyword
      ) {
        if (searchKeyword) {
          setTutors(unfilteredTutors);
          const filteredTutors = tutors.filter((tutor) =>
            tutor.first_name.toLowerCase().includes(searchKeyword.toLowerCase())
          );
          setTutors(filteredTutors);
        }

        if (filterTeachingMethod !== "Any") {
          const filteredTutors = tutors.filter((tutor) => {
            return (
              String(tutor.teaching_method).toLocaleLowerCase() ===
              String(filterTeachingMethod).toLocaleLowerCase()
            );
          });
          setTutors(filteredTutors);
        }

        if (filterRateRange !== "Any") {
          setTutors(unfilteredTutors);
          const range = filterRateRange.split(" ");
          const filteredTutors = tutors.filter((tutor) => {
            return tutor.price >= range[0] && tutor.price <= range[2];
          });
          setTutors(filteredTutors);
        }
      } else {
        if (unfilteredTutors.length === 0) {
          fetchTutors().then((data) => {
            setTutors(data);
            setUnfilteredTutors(data);
          });
        } else {
          setTutors(unfilteredTutors);
        }
      }

      console.log(tutors);
    };
    filterTutor();
  }, [filterRateRange, filterTeachingMethod, searchKeyword]);

  return (
    <main>
      <Container maxWidth="lg">
        <Nav />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ pt: 10, pb: 3 }}
              spacing={5}
            >
              <Image width={967} height={172} src="/Frame.png" alt="find" />
              <Stack direction="row" sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  sx={{
                    background: "white",
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 30,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    border: "none",
                    py: 2,
                    px: 1,
                  }}
                  variant="standard"
                  placeholder="What subject tutor are you looking for ?"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon icon="ic:baseline-search" fontSize={22} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    width: 150,
                  }}
                  disableElevation
                >
                  Find Tutor
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={0} sx={{ mt: 9 }}>
              <CardContent>
                <Stack spacing={3}>
                  <Typography variant="h5">Filters</Typography>
                  <Stack spacing={1}>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Teaching Method
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Any"
                        name="radio-buttons-group"
                        onChange={(e) =>
                          setFilterTeachingMethod(e.target.value)
                        }
                      >
                        <FormControlLabel
                          value="Any"
                          control={<Radio />}
                          label="Any"
                        />
                        <FormControlLabel
                          value="In-Person"
                          control={<Radio />}
                          label="In-Person"
                        />
                        <FormControlLabel
                          value="Remote"
                          control={<Radio />}
                          label="Remote"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                  <Stack spacing={1}>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Rate
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Any"
                        name="radio-buttons-group"
                        onChange={(e) => setFilterRateRange(e.target.value)}
                      >
                        <FormControlLabel
                          value="Any"
                          control={<Radio />}
                          label="Any"
                        />
                        <FormControlLabel
                          value="100 - 300"
                          control={<Radio />}
                          label="100 - 300"
                        />
                        <FormControlLabel
                          value="300 - 500"
                          control={<Radio />}
                          label="300 - 500"
                        />
                        <FormControlLabel
                          value="500 - 800"
                          control={<Radio />}
                          label="500 - 800"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Stack spacing={2} sx={{ mt: 9 }}>
              <Typography variant="h5">
                {tutors && tutors.length > 0
                  ? `Showing ${tutors.length} tutors`
                  : "No tutors found"}
              </Typography>
              {tutors &&
                tutors.length > 0 &&
                tutors.map((tutor) => {
                  return <TutorCard key={tutor.id} tutor={tutor} />;
                })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

function TutorCard({ tutor }) {
  const router = useRouter();

  const handleTutorClick = (e) => {
    e.preventDefault();
    router.push(`/profile/${tutor.id}`);
  };

  return (
    <Card
      style={{
        cursor: "pointer",
      }}
      elevation={0}
      onClick={handleTutorClick}
    >
      <CardHeader
        title={
          <Stack direction="row" spacing={1}>
            <Typography variant="h6">
              {tutor.first_name + " " + tutor.last_name}
            </Typography>
            <Image src="/med1.png" alt="icon" width={30} height={30} />
          </Stack>
        }
        subheader="Card subheader"
        avatar={
          <Image
            style={{
              borderRadius: "50%",
            }}
            src={tutor.profile_picture}
            alt="icon"
            width={55}
            height={55}
          />
        }
        subheaderTypographyProps={{ color: "#A05E45" }}
      />
      <CardContent>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Icon icon="ion:location-outline" fontSize={15} />
            <Typography variant="caption">{tutor.course}</Typography>
          </Stack>
          <span>·</span>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Icon icon="mdi:dollar" fontSize={15} />
            <Typography variant="caption">{tutor.price} Br/hr</Typography>
          </Stack>
          <span>·</span>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="caption">
              {tutor.rating === 0 ? "No rating" : tutor.rating + " rating"}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{ mt: 3 }}>
          Certified Math and Physics Tutor with a Masters degree. 5+ years
          experience. Specializing in SAT prep. Lets reach your goals together!
        </Typography>
      </CardContent>
    </Card>
  );
}
