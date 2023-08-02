"use client";
import React, { useEffect } from "react";
import NewsList from "@/app/_components/NewsList/NewsList";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { getNews } from "@/app/_redux/features/newsSlice";
import { INews, IParams } from "@/app/_global/types";

interface HomePageProps {
  params: IParams;
}

const Home: React.FC<HomePageProps> = ({ params }) => {
  const dispatch = useAppDispatch();
  const news: INews[] = useAppSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return <NewsList news={news} params={params} />;
};

export default Home;
