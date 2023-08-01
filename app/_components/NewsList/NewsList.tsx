"use client";
import React from "react";
import styles from "./NewsList.module.scss";
import NewsCard from "@/app/_components/NewsCard/NewsCard";
import { INews } from "@/app/_global/types";

interface NewsListProps {
  news: INews[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <div className={styles.newsList}>
      <h3 className={styles.newsList__title}>Новости и события</h3>
      {news.map((article: any, id: any) => (
        <NewsCard
          key={article.id}
          id={article.id}
          date={article.date}
          imageSrc={article.image_big}
          title={article.title}
          url={article.url}
        />
      ))}
    </div>
  );
};

export default NewsList;
