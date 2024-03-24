"use client";

import { SimonDarkButton } from "@/app/find/page";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const isAuth = localStorage.getItem("user");
  const userRole = JSON.parse(localStorage.getItem("userRole"));

  function handleLogout(e) {
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    window.location.reload();
  }

  return (
    <Box
      sx={{
        mt: 3,
        py: 1,
        px: 2,
        boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)",
        borderRadius: 10,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={2} direction="row" alignItems="center">
          <Link style={{
            textDecoration: "none",
          }} href="https://peerconnect-pearl.vercel.app">
            <Typography
              style={{
                fontWeight: "bold",
                color: "black",
              }}
              variant="subtitle2"
            >
              Peer
              <span
                style={{
                  color: "#FF9D01",
                }}
              >
                Connect
              </span>
            </Typography>
          </Link>
          <Link href="/find" style={{ textDecoration: "none" }}>
            <Typography
              valiant="subtitle2"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Find tutors
            </Typography>
          </Link>
          <Link href="/pricing" style={{ textDecoration: "none" }}>
            <Typography
              valiant="subtitle2"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Pricing
            </Typography>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              valiant="subtitle2"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Resources
            </Typography>
          </Link>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          {isAuth ? (
            <>
              {userRole === "Tutor" ? (
                <Link href="/assessment" style={{ textDecoration: "none" }}>
                  <Typography valiant="subtitle2">Assessments</Typography>
                </Link>
              ) : (
                <Link href="/become-tutor" style={{ textDecoration: "none" }}>
                  <Typography valiant="subtitle2">Become a tutor</Typography>
                </Link>
              )}
              <SimonDarkButton onClick={handleLogout} variant="outlined">
                SignOut
              </SimonDarkButton>
            </>
          ) : (
            <>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Typography valiant="subtitle2">Sign in</Typography>
              </Link>
              <Link href="/become-tutor">
                <SimonDarkButton variant="contained">
                  Become a tutor
                </SimonDarkButton>
              </Link>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Nav;
