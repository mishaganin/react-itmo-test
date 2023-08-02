'use client'
import React, {useEffect} from 'react';
import {useAppSelector} from "@/app/_redux/hooks";
import {redirect, useParams} from "next/navigation";

export default function News() {
  const params = useParams();
  const redirectUrl = useAppSelector((state) => state.news.news)
    .find((article) => article.id === +params.id)
    ?.url;

  return redirect(redirectUrl || `/`);
}
