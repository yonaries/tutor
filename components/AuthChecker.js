"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

function AuthChecker({}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user | (user === "undefined")) {
      if (
        pathname !== "/login" &&
        pathname !== "/signup" &&
        pathname !== "/become-tutor" &&
        pathname !== "/reset-password" &&
        pathname !== "/pricing"
      ) {
        router.push("https://peerconnect-pearl.vercel.app/");
      }
    } else {
      if ((pathname === "/") | (pathname === "/login")) router.push("/find");
    }
  }, []);

  return null;
}

export default AuthChecker;
