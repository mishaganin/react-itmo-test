"use client";
import React from "react";
import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { redirect } from "next/navigation";
import { INews } from "@/app/_global/types";

interface NewsCardProps extends INews {}

const NewsCard = ({ id, date, imageSrc, title, url }: NewsCardProps) => {
  const handleCardClick = () => {
    redirect(`/news/${id}`);
  };

  return (
    <div className={styles.newsCard} onClick={handleCardClick}>
      <Image
        src={imageSrc}
        alt="news-image"
        width={300}
        height={300}
        className={styles.newsCard__image}
      />
      <div className={styles.newsCard__content}>
        <div className={styles.newsCard__date}>{date}</div>
        <p className={styles.newsCard__text}>{title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
