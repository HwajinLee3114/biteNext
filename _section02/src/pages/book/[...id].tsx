import { useRouter } from "next/router";
import React from "react";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>BookDetail : {id}</h1>;
}
