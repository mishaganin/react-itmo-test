"use client";
import React from "react";
import { useAppSelector } from "@/app/_redux/hooks";
import { redirect, useParams } from "next/navigation";
import { INews } from "@/app/_global/types";

const News: React.FC = () => {
  const params = useParams();
  const redirectUrl: string | undefined = useAppSelector(
    (state) => state.news.news
  ).find((article: INews) => article.id === +params.id)?.url;
  const selectedLanguageName: string = useAppSelector(
    (state) => state.languages.selectedLanguage
  );

  return redirect(redirectUrl || `/${selectedLanguageName}`);
};

export default News;
