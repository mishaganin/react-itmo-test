"use client";
import React from "react";
import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { useRouter } from "next/navigation";
import { INews, IParams } from "@/app/_global/types";
import convertDate from "@/app/_utils/convertDate";

interface NewsCardProps extends Omit<INews, "url"> {
  params: IParams;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  date,
  imageSrc,
  title,
  params,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/ru/news/${id}`);
  };

  return (
    <div className={styles.newsCard} onClick={handleCardClick}>
      <div className={styles.newsCard__wrapper}>
        <Image
          priority
          src={imageSrc || ""}
          alt="news-image"
          width={600}
          height={600}
          className={styles.newsCard__wrapper__image}
        />
      </div>
      <div className={styles.newsCard__content}>
        <div className={styles.newsCard__date}>
          {convertDate(date, params.lng || "")}
        </div>
        <p className={styles.newsCard__text}>{title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
