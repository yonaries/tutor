'use client';
import Image from "next/image";
import styles from "./../page.module.css";
import { Box, Button, Card, CardContent, CardHeader, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Stack, Typography, styled } from "@mui/material";
import { Icon } from "@iconify/react";
import Nav from "@/components/Nav";

export const SimonDarkButton = styled(Button)(({ theme }) => ({
    color: "black",
    borderRadius: 20,
    textTransform: 'none',
    fontWeight: 'bold',
    boxShadow: 'none'
}));
export default function Home() {
    return (
        <main>
            <Container maxWidth="lg">
                <Nav />

                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} >
                        <Card elevation={0} sx={{ mt: 9 }}>
                            <CardContent>
                                <Stack spacing={3}>
                                    <Typography variant="h5">Filters</Typography>
                                    <Stack spacing={1}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="Near me"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Near me" control={<Radio />} label="Near me" />
                                                <FormControlLabel value="Within 5km" control={<Radio />} label="Within 5km" />
                                                <FormControlLabel value="Within 10km" control={<Radio />} label="Within 10km" />
                                                <FormControlLabel value="Within 20km" control={<Radio />} label="Within 20km" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Stack>
                                    <Stack spacing={1}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Rate</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="Any"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Any" control={<Radio />} label="Any" />
                                                <FormControlLabel value="100 - 300" control={<Radio />} label="100 - 300" />
                                                <FormControlLabel value="300 - 500" control={<Radio />} label="300 - 500" />
                                                <FormControlLabel value="500 - 800" control={<Radio />} label="500 - 800" />
                                                <FormControlLabel value="> 3 year" control={<Radio />} label="> 3 year" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Stack>
                                    <Stack spacing={1}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Work experience</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="Any experience"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Any experience" control={<Radio />} label="Any experience" />
                                                <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                                <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
                                                <FormControlLabel value="Professional Teacher" control={<Radio />} label="Professional Teacher" />
                                                <FormControlLabel value="> 3 year" control={<Radio />} label="> 3 year" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Stack>
                                    <Stack spacing={1}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Available week days</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="Monday"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Monday" control={<Radio />} label="Monday" />
                                                <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                                <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
                                                <FormControlLabel value="Professional Teacher" control={<Radio />} label="Professional Teacher" />
                                                <FormControlLabel value="> 3 year" control={<Radio />} label="> 3 year" />
                                            </RadioGroup>
                                        </FormControl>
                                        <FormGroup>
                                            <FormLabel id="demo-radio-buttons-group-label">Available week days</FormLabel>

                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Monday" />
                                            <FormControlLabel control={<Checkbox />} label="Tuesday" />
                                            <FormControlLabel control={<Checkbox />} label="Wednesday" />
                                            <FormControlLabel control={<Checkbox />} label="Thursday" />
                                            <FormControlLabel control={<Checkbox />} label="Friday" />
                                            <FormControlLabel control={<Checkbox />} label="Saturday" />
                                            <FormControlLabel control={<Checkbox />} label="Sunday" />
                                        </FormGroup>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={9}>
                        <Stack spacing={2} sx={{ mt: 9 }}>
                            <Typography variant="h5">317 Tutors</Typography>
                            <TutorCard />
                            <TutorCard />
                            <TutorCard />
                            <TutorCard />
                            <TutorCard />
                            <TutorCard />
                            <TutorCard />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

function TutorCard() {
    return (
        <Card elevation={0}>
            <CardHeader
                title={<Stack direction="row" spacing={1}>
                    <Typography variant="h6">Jams Holland</Typography>
                    <Image src="/med1.png" alt="icon" width={30} height={30} />
                </Stack>}
                subheader="Card subheader"
                avatar={<Icon icon="fluent-emoji-flat:person" fontSize={55} />}
                subheaderTypographyProps={{ color: "#A05E45" }}

            />
            <CardContent>
                <Stack direction="row" spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Icon icon="ion:location-outline" fontSize={15} />
                        <Typography variant="caption">English</Typography>
                    </Stack>
                    <span>·</span>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Icon icon="mdi:dollar" fontSize={15} />
                        <Typography variant="caption">200 Br/hr</Typography>
                    </Stack>
                    <span>·</span>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="caption">5+ certificates</Typography>
                    </Stack>
                </Stack>
                <Typography variant="body2" sx={{ mt: 3 }}>
                    Certified Math and Physics Tutor with a Masters degree. 5+ years experience. Specializing in SAT prep. Lets reach your goals together!
                </Typography>
            </CardContent>
        </Card>
    )
}
