'use client';
import { Box, Button, Container, Divider, Stack, TextField, Typography, styled } from "@mui/material"
import { Icon } from '@iconify/react';
import Image from "next/image";
import { useState } from "react";

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
    const [profession, setProfession] = useState('');
    const [higherEducation, setHigherEducation] = useState('');
    const [location, setLocation] = useState('');
    const [availability, setAvailability] = useState('');
    const [teachingMethod, setTeachingMethod] = useState('');
    const [courses, setCourses] = useState('');
    const [ratePerHour, setRatePerHour] = useState('');
    const [register, setRegister] = useState('');
    // crate states for  name, profession, higher education and location
    const handleSubmit = () => {
        alert(`Submit ${name} ${profession}`)
    }
    return (
        <>
            <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Stack justifyContent="center" alignItems="center" spacing={2} sx={{ width: 400 }}>

                    <Typography variant="h5">Become a tutor</Typography>
                    {/* Full Name
                    Profession
                    Higher Education
                    Location

                    Availability
                    Teaching Method
                    Courses
                    Rate per hour (ETB)
                    Register */}

                    <SimonText placeholder="Full Name" variant="outlined" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />
                    <SimonText placeholder="Profession" variant="outlined" fullWidth required value={profession} onChange={(e) => setProfession(e.target.value)} />
                    <SimonText placeholder="Higher Education" variant="outlined" fullWidth required value={higherEducation} onChange={(e) => setHigherEducation(e.target.value)} />
                    <SimonText placeholder="Location" variant="outlined" fullWidth required value={location} onChange={(e) => setLocation(e.target.value)} />
                    <SimonText placeholder="Availability" variant="outlined" fullWidth required value={availability} onChange={(e) => setAvailability(e.target.value)} />
                    <SimonText placeholder="Teaching Method" variant="outlined" fullWidth required value={teachingMethod} onChange={(e) => setTeachingMethod(e.target.value)} />
                    <SimonText placeholder="Courses" variant="outlined" fullWidth required value={courses} onChange={(e) => setCourses(e.target.value)} />
                    <SimonText placeholder="Rate per hour (ETB)" variant="outlined" fullWidth required value={ratePerHour} onChange={(e) => setRatePerHour(e.target.value)} />
                    <SimonButton type="submit" variant="contained" fullWidth onClick={handleSubmit}>Register</SimonButton>
                </Stack>
            </Container>
        </>
    )
}

export default Login