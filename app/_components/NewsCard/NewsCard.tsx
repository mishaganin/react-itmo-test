'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import image from '@/public/img_1.png';
import styles from './NewsCard.module.scss';

const NewsCard = () => {
    return (
        <div className={styles.newsCard}>
            <Image
                src={image}
                alt="news-image"
                className={styles.newsCard__image}
            />
            <div className={styles.newsCard__content}>
                <div className={styles.newsCard__date}>2 декабря 2019</div>
                <p className={styles.newsCard__text}>Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о связи человеческого и нечеловеческого, представленный на Кураторском форуме в Молодёжный...</p>
            </div>
        </div>
    );
}

export default NewsCard;
