'use client';
import { initializeChapaCheckout } from '@/actions/chapa';
import Nav from '@/components/Nav';
import { Icon } from '@iconify/react'
import { Box, Button, ButtonBase, Card, CardContent, Chip, Container, Stack, Typography, alpha, styled } from '@mui/material'
import React from 'react'
import { useRouter } from "next/navigation";

export const SimonDarkButton = styled(ButtonBase)(({ theme }) => ({
    color: "black",
    borderRadius: 20,
    textTransform: 'none',
    fontWeight: 'bold',
    boxShadow: 'none',
    color: '#FF9D01',
    background: alpha('#FF9D01', 0.1),
    height: 40
}));
export const SimonDarkButtonContained = styled(ButtonBase)(({ theme }) => ({
    color: "black",
    borderRadius: 20,
    textTransform: 'none',
    fontWeight: 'bold',
    boxShadow: 'none',
    color: '#307B74',
    background: '#FF9D01',
    height: 40
}));
function Page() {
    return (
        <>

            <Container maxWidth="lg">
                <Nav />
                <Stack justifyContent="center" alignItems="center" spacing={20} sx={{ mt: 10 }}>
                    <Stack sx={{ textAlign: 'center' }}>
                        <Typography variant='h3'>Simple, transparent pricing</Typography>
                        <Typography variant='subtitle1' color="text.secondary">Become premium tutor, appear on top searches</Typography>
                    </Stack>
                    <Card sx={{ borderRadius: 10, px: 3, py: 2, boxShadow: '2px 2px 15px 10px rgba(0,0,0,0.03)', overflow: 'unset' }} elevation={0}>
                        <CardContent>

                            <Stack direction="row" spacing={2}>
                                <PricingCard title="Intro" price="$20" />
                                <PricingCard title="Base" price="$50" />
                                <PricingCardMain title="Pro" price="$100" />
                                <PricingCard title="Enterprise" price="$200" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Container>
        </>
    )
}

function PricingCard({ title, price }) {
    const router = useRouter();

    const handlePlanSubscribe = async () => {
        try {
            console.log("subscribing to plan");
            const response = await initializeChapaCheckout({
                amount: 1000,
                email: "john@gmail.com",
                first_name: "John",
                last_name: "Doe",
                phone_number: "0712345678",
            });
            router.push(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
      <>
        <Stack spacing={2}>
          <Stack sx={{}}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h4">{price}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                /month
              </Typography>
            </Stack>
            <Box sx={{ height: 10 }} />
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              For most businesses that want to otpimize web queries
            </Typography>
          </Stack>

          <Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Icon icon="solar:check-circle-bold-duotone" color="#ADD8E6" />
              <Typography variant="body1" color="text.secondary">
                All limited links
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Icon icon="solar:check-circle-bold-duotone" color="#ADD8E6" />
              <Typography variant="body1" color="text.secondary">
                Own analytics platform
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Icon icon="solar:check-circle-bold-duotone" color="#ADD8E6" />
              <Typography variant="body1" color="text.secondary">
                Chat support
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Icon icon="solar:check-circle-bold-duotone" color="#ADD8E6" />
              <Typography variant="body1" color="text.secondary">
                Optimize hashtags
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Icon icon="solar:check-circle-bold-duotone" color="#ADD8E6" />
              <Typography variant="body1" color="text.secondary">
                Unlimited users
              </Typography>
            </Stack>
          </Stack>
          <SimonDarkButton onClick={(e)=>handlePlanSubscribe()} variant="contained">
            Choose plan
          </SimonDarkButton>
        </Stack>
      </>
    );
}
function PricingCardMain({ title, price }) {
    return (

        <>
            <Box sx={{ height: "100%", position: 'relative' }}>
                <Box sx={{ opacity: 0 }}>
                    <PricingCard title="" price="" />
                </Box>
                <Card sx={{ borderRadius: 5, boxShadow: '0px 25px 15px 5px rgba(0,0,0,0.1)', height: 400, position: 'absolute', top: -80, background: '#307B74', color: 'white' }}>
                    <CardContent>
                        <Stack alignItems="flex-end">
                            <Box>
                                <Chip
                                    size='small'
                                    label="MOST POPULAR" sx={{
                                        background: '#A05E45',
                                        color: '#fff',
                                        fontWeight: 500
                                    }} />
                            </Box>
                        </Stack>
                        <Stack spacing={2}>
                            <Stack sx={{}}>
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="h4">{price}</Typography>
                                    <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.9)' }}>/month</Typography>
                                </Stack>
                                <Box sx={{ height: 10 }} />
                                <Typography variant="h5">{title}</Typography>
                                <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.9)' }}>For most businesses that want to otpimize web queries</Typography>
                            </Stack>

                            <Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Icon icon="solar:check-circle-bold-duotone" color='#ADD8E6' />
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>All limited links</Typography>
                                </Stack>

                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Icon icon="solar:check-circle-bold-duotone" color='#ADD8E6' />
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>Own analytics platform</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Icon icon="solar:check-circle-bold-duotone" color='#ADD8E6' />
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>Chat support</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Icon icon="solar:check-circle-bold-duotone" color='#ADD8E6' />
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>Optimize hashtags</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Icon icon="solar:check-circle-bold-duotone" color='#ADD8E6' />
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>Unlimited users</Typography>
                                </Stack>
                            </Stack>
                            <SimonDarkButtonContained variant='contained'>Choose plan</SimonDarkButtonContained>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
export default Page