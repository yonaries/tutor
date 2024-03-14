import { SimonDarkButton } from "@/app/find/page"
import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

function Nav() {
    return (
        <Box sx={{ mt: 3, py: 1, px: 2, boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.1)', borderRadius: 10 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={2} direction="row" alignItems="center">
                    <Link href="/">
                        <Image src="/Home1.png" width={119} height={25} alt="mr.simon" />
                    </Link>
                    <Link href="/find" style={{ textDecoration: 'none' }} >
                        <Typography valiant="subtitle2" sx={{ color: 'black', textDecoration: 'none' }}>Find tutors</Typography>
                    </Link>
                    <Link href="/pricing" style={{ textDecoration: 'none' }}>
                        <Typography valiant="subtitle2" sx={{ color: 'black', textDecoration: 'none' }}>Pricing</Typography>
                    </Link>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Typography valiant="subtitle2" sx={{ color: 'black', textDecoration: 'none' }}>Resources</Typography>
                    </Link>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Link href="/login" style={{ textDecoration: 'none' }}>
                        <Typography valiant="subtitle2">Sign in</Typography>
                    </Link>
                    <Link href="/become-tutor">
                        <SimonDarkButton variant="contained">Become a tutor</SimonDarkButton>
                    </Link>
                </Stack>
            </Stack>
        </Box >
    )
}

export default Nav