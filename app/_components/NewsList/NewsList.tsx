import React from "react";
import styles from "./NewsList.module.scss";
import NewsCard from "@/app/_components/NewsCard/NewsCard";
import { INews, IParams } from "@/app/_global/types";
import { useTranslation } from "@/app/_i18n";

interface NewsListProps {
  news: INews[];
  params: IParams;
}

const NewsList: React.FC<NewsListProps> = async ({ news, params }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lng);

  return (
    <div className={styles.newsList}>
      <h3 className={styles.newsList__title}>{t("title")}</h3>
      {news.map((article: INews, id: number) => (
        <NewsCard
          key={`${article.id}_${id}`}
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
