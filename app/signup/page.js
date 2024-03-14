'use client';
import { Box, Button, Container, Divider, Stack, TextField, Typography, styled } from "@mui/material"
import { Icon } from '@iconify/react';
import Image from "next/image";
import { useState } from "react";
import { VisuallyHiddenInput } from "@/app/become-tutor/page";

const SimonButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    borderRadius: 8,
    background: theme.palette.primary.main
}))
const SimonButton2 = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    borderRadius: 8,
    background: theme.palette.secondary.main

}))
const SimonText = styled(TextField)(({ theme }) => ({
    width: '100%',
    background: theme.palette.secondary.main,
    fontSize: 12,
    fontWeight: '600',
    borderRadius: 8,
    border: '1px solid ' + theme.palette.secondary.main
}));
function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        alert(`Submit ${email} ${password} ${name}`)
    }
    const handleSignInWithGoogle = () => {
        alert(`With google`)

    }
    return (
        <>
            <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Stack justifyContent="center" alignItems="center" spacing={2} sx={{ width: 400 }}>
                    <Box sx={{ pb: 5 }}>
                        <Image src="/Home.png" alt="Home Image" width={194} height={118} />
                    </Box>
                    <Typography variant="h5">Sign Up</Typography>
                    <SimonText placeholder="First Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} required />
                    <SimonText placeholder="Email" variant="outlined" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <SimonText placeholder="Password" variant="outlined" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<Icon icon="icon-park-outline:upload-picture" />}
                        sx={{
                            color: '#555'
                        }}
                        disableElevation
                    >
                        Upload Profile Picture
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <SimonButton type="submit" variant="contained" fullWidth onClick={handleSubmit}>Sign In</SimonButton>

                </Stack>
            </Container>
        </>
    )
}

export default Login