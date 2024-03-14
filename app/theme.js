// src/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9D01',
            contrastText: '#fff'
        },
        secondary: {
            main: '#F0F0F0'
        },
    }
});

export default theme;
