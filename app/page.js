'use client';

import { SimonDarkButton } from "@/app/find/page";
import Nav from "@/components/Nav";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

function Page() {
  return (
    <Stack>
      <Nav />
      <Box>
        <Box width="100%" height="100%">
          <Image src="/Landing.png" alt="landing"
            width={window.innerWidth}
            height={(2826 * window.innerWidth) / 752}
          />
        </Box>
      </Box>
    </Stack>
  )
}

export default Page