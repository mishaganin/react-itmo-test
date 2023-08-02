import React from "react";
import styles from "./NewsList.module.scss";
import NewsCard from "@/app/_components/NewsCard/NewsCard";
import { INews } from "@/app/_global/types";
import {useTranslation} from "@/app/_i18n";
import {useParams} from "next/navigation";

interface NewsListProps {
  news: INews[];
  params: {
    lng?: string;
  };
}

const NewsList = async ({ news, params }: NewsListProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lng);
  console.log(params.lng);
  return (
    <div className={styles.newsList}>
      <h3 className={styles.newsList__title}>{t('title')}</h3>
      {news.map((article: INews) => (
        <NewsCard
          key={article.id}
          id={article.id}
          date={article.date}
          imageSrc={article.imageSrc}
          title={article.title}
          params={params}
        />
      ))}
    </div>
  );
};

export default NewsList;
