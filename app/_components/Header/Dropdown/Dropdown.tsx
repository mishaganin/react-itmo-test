"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import styles from "./Dropdown.module.scss";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { useRouter } from "next/navigation";
import { changeLanguage } from "@/app/_redux/features/languagesSlice";

const Dropdown = (): ReactElement => {
  const languages = useAppSelector((state) => state.languages.languages);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className={styles.dropdown}>
      {languages.map((language, id) => {
        return (
          <div
            key={language.name}
            className={
              styles.dropdown__item +
              (id % 2 == 1 ? ` ${styles.dropdown__item_dark}` : "")
            }
            onClick={() => {
              dispatch(changeLanguage(language.name));
              router.push(`/${language.name}`);
            }}
          >
            <Image
              priority
              src={language.logoSrc}
              width={24}
              height={24}
              alt={`${language.name}-logo`}
              key={language.name}
            />
            <span className={styles.dropdown__item__label}>
              {language.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
