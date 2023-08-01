"use client";
import NewsList from "@/app/_components/NewsList/NewsList";
import { useSelector, useDispatch } from "react-redux";
import { INews } from "@/app/_global/types";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { Providers } from "@/app/_redux/provider";
import { useEffect } from "react";
import { getNews } from "@/app/_redux/features/newsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return <NewsList news={data.news} />;
};

export default Home;
