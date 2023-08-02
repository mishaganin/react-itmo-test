"use client";
import React from "react";
import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { useRouter } from "next/navigation";
import { INews } from "@/app/_global/types";
import convertDate from "@/app/_utils/convertDate";

interface NewsCardProps extends Omit<INews, "url"> {
  params: {
    lng?: string;
  }
}

const NewsCard = ({ id, date, imageSrc, title, params }: NewsCardProps) => {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/ru/news/${id}`);
  };

  return (
    <div className={styles.newsCard} onClick={handleCardClick}>
      <Image
        src={imageSrc || ''}
        alt="news-image"
        width={300}
        height={300}
        className={styles.newsCard__image}
      />
      <div className={styles.newsCard__content}>
        <div className={styles.newsCard__date}>{convertDate(date, params.lng || '')}</div>
        <p className={styles.newsCard__text}>{title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
