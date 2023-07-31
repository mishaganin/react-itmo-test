'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import image from '@/public/img.png';
import styles from './NewsList.module.scss';
import NewsCard from "@/app/_components/NewsCard/NewsCard";
import localFont from '@next/font/local';

// const fontMuller = localFont({
//     src: '../'
// })

const NewsList = () => {
    const news = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className={styles.newsList}>
            <h3 className={styles.newsList__title}>Новости и события</h3>
            {news.map((article, id) => <NewsCard key={id} />)}
        </div>
    );
}

export default NewsList;
