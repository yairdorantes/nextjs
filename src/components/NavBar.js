"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export const NavBar = () => {
  const router = useRouter();

  return (
    <header>
      <Link href="/">
        <h1>Task app</h1>
      </Link>
      <div>
        <button onClick={() => router.push("/new")}>ADD TASK</button>
      </div>
    </header>
  );
};
