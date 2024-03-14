'use client';
import { VisuallyHiddenInput } from "@/app/become-tutor/page";
import { SimonDarkButton } from "@/app/find/page";
import Nav from "@/components/Nav";
import { Icon } from "@iconify/react"
import { Avatar, Badge, Box, Button, Card, CardContent, CardHeader, Container, Grid, IconButton, Rating, Stack, Typography, alpha, styled } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
const reviews = [
    {
        text: "This teacher's enthusiasm for their subject shines through in every lesson, making learning engaging and enjoyable for all students. They foster a supportive and inclusive classroom environment where everyone feels valued and encouraged to participate actively.",
        stars: 5
    },
    {
        text: "The dedication and commitment of this teacher are evident in their willingness to go the extra mile for their students. They provide ample support and resources to ensure that every student has the opportunity to succeed, both academically and personally.",
        stars: 4
    },
    {
        text: "With a compassionate approach, this teacher demonstrates genuine care for their students' well-being. They take the time to understand each student's unique needs and adapt their teaching style accordingly, creating a safe and nurturing learning environment.",
        stars: 5
    },
    {
        text: "Bringing real-world expertise into the classroom, this teacher's practical examples and interactive teaching methods make complex concepts accessible and relevant to students. They challenge students to think critically and independently, fostering a deeper understanding of the subject matter.",
        stars: 4
    },
    {
        text: "Dynamic and innovative, this teacher incorporates technology and hands-on activities to make learning exciting and interactive. They encourage collaboration and empower students to explore new ideas, fostering a sense of curiosity and creativity in the classroom.",
        stars: 5
    }
];

const certificationImages = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/350"
];

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 42,
    height: 42,
}));
function Page() {
    const [ratingValue, setRatingValue] = useState(3);
    const [rating, setRating] = useState(3);
    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Nav />
            <Grid container spacing={3} sx={{ pt: 3 }}>
                <Grid item spacing={1} xs={12} sm={4}>
                    <Stack spacing={3}>

                        <Card sx={{ borderRadius: 6, pb: 1, pt: 5 }} elevation={0}>
                            <CardContent>
                                <Stack justifyContent="center" alignItems="center" >
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                        badgeContent={
                                            <SmallAvatar alt="Remy Sharp" src="/med2.png" />
                                        }

                                        width={100}
                                    >
                                        <Avatar alt="Travis Howard" src="/avatar.png" sx={{
                                            width: 100,
                                            height: 100
                                        }} />
                                    </Badge>
                                    <Typography variant="h6">Abebe Bikila</Typography>
                                    <Typography variant="body2" sx={{ color: '#A05E45' }}>Teacher • Master&apos;s Degree </Typography>
                                    <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>Certified Math and Physics Tutor with a Master&apos;s degree. 5+ years experience. Specializing in SAT prep. Let&apos;s reach your goals together!</Typography>

                                    <Box sx={{ background: alpha('#F0F0F0', 0.5), borderRadius: 5, width: '100%', mt: 10, py: 2, px: 2, textAlign: 'center' }}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Stack>
                                                <Typography variant="caption">Worked</Typography>
                                                <Typography variant="h5" sx={{ color: '#FF9D01' }}>587hr+</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="caption">Rate</Typography>
                                                <Typography variant="h5" sx={{ color: '#FF9D01' }}>350/hr</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="caption">Certificates</Typography>
                                                <Typography variant="h5" sx={{ color: '#FF9D01' }}>5</Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card sx={{ borderRadius: 6, pb: 1, pt: 5 }} elevation={0}>
                            <CardHeader title={<Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Box>
                                        <IconButton variant="contained">
                                            <Icon icon="material-symbols:favorite" />
                                        </IconButton>
                                    </Box>
                                    <Stack direction="row" spacing={1}>
                                        <Typography variant="body2">({rating})</Typography>
                                        <Rating name="read-only" value={rating} readOnly />
                                    </Stack>
                                </Stack>
                                <Typography variant="h5">Hey, how was your tutor session Drop some Rating!</Typography>
                            </Stack>} />
                            <CardContent>
                                <Typography variant="body2">Hey, how was your tutor session Drop some Rating!</Typography>
                                <Stack sx={{ py: 5 }} alignItems="center" spacing={3}>
                                    <Rating name="read-only" value={ratingValue}
                                        onChange={(event, newValue) => {
                                            setRatingValue(newValue);
                                        }} size="large" />
                                    <Button sx={{ textTransform: 'none', color: 'black' }} variant="outlined">Submit</Button>
                                </Stack>

                            </CardContent>
                        </Card>
                    </Stack>

                </Grid>
                <Grid item xs={12} sm={8}>
                    <Stack sx={{ mt: 4 }} spacing={2}>
                        <Typography variant="h6">Certificates</Typography>
                        <Grid container spacing={2}>
                            {certificationImages.map((url, key) => (
                                <Grid item xs={12} md={6} key={key}>
                                    <Box sx={{ overflow: 'hidden' }}>
                                        <Image src={'/Certificate.webp'} alt="certificate" width={500} height={300} />
                                    </Box>
                                </Grid>
                            ))}

                            <Grid item xs={12} md={6}>
                                <Box sx={{ overflow: 'hidden', height: '100%' }}>
                                    <Button variant="outlined" sx={{ width: '100%', height: "100%", color: 'black' }} startIcon={<Icon icon="ph:certificate-duotone" />}
                                        component="label"
                                        role={undefined}
                                        tabIndex={-1}
                                    >
                                        Add Certificate
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
            <Stack>

                <Stack sx={{ mt: 4 }} spacing={2}>
                    <Typography variant="h6">Reviews</Typography>
                    <Grid container spacing={2}>
                        {reviews.map(({ text, stars }, key) => (
                            <Grid item xs={12} md={3} key={key}>
                                <Review stars={stars} text={text} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

            </Stack>
        </Container>
    )
}

export default Page

function Review({ stars, text }) {

    return (
        <Card>
            <CardContent>
                <Stack spacing={3}>
                    <Stack direction="row" alignItems="center">
                        <Typography variant="body1">({stars})</Typography>
                        {Array(stars).fill(0).map((_, key) => (
                            <Icon icon="tabler:star-filled" color="orange" key={key} />
                        ))}
                        {Array(5 - stars).fill(0).map((_, key) => (
                            <Icon icon="tabler:star" key={key} />
                        ))}
                    </Stack>
                    <Typography variant="body2">
                        {text}
                    </Typography>
                </Stack>

            </CardContent>
        </Card>
    )
}