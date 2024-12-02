import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  // const q = router.query.q;
  const { q } = router.query;
  return <h1>search : {q}</h1>;
}
