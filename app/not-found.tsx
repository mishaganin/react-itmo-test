import React from 'react';
import { NextPage } from 'next';
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <h1>404 - Page not found</h1>
      <Link href='/'>Go home</Link>
    </>
  )
}

export default NotFound;
