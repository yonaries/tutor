"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function AuthChecker({}) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user | (user === "undefined")) {
      router.push("/login");
    } else {
      router.push("/find");
    }
  }, []);

  return null;
}

export default AuthChecker;
