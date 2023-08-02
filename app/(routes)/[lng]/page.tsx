"use client";
import { useEffect } from "react";
import NewsList from "@/app/_components/NewsList/NewsList";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { getNews } from "@/app/_redux/features/newsSlice";

const Home = ({ params }: { params: { lng?: string }}) => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return <NewsList news={news} params={params} />;
};

export default Home;
