"use client";

import { Button, Label } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid m-6 gap-4">
      <form className="text-blue-500 grid gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search") as string;
          router.push(pathname + "?search=" + queryTerm);
        }}
      >
        <Label className="text-white font-semibold" htmlFor="search">Search for Users:-</Label>
        <input id="search" name="search" type="text" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};