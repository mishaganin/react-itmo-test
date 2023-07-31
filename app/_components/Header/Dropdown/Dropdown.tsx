"use client";
import React, { useState } from "react";
import Image from "next/image";
import flagEng from "@/public/flags/flag-eng.svg";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const languages = [1, 2];
  return (
    <div className={styles.dropdown}>
      {languages.map((language, id) => {
        return (
          <div
            key={id}
            className={
              styles.dropdown__item +
              (id % 2 == 1 ? ` ${styles.dropdown__item_dark}` : "")
            }
          >
            <Image src={flagEng} alt="flag-eng" width={24} height={24} />
            <span className={styles.dropdown__item__label}>Рус</span>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
