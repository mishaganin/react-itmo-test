"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import Image from "next/image";
import logo from "@/public/logo.svg";
import arrowUp from "@/public/navigation/arrow-up.svg";
import arrowDown from "@/public/navigation/arrow-down.svg";
import styles from "./Header.module.scss";
import { ILanguage } from "@/app/_global/types";
import { useAppSelector } from "@/app/_redux/hooks";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const selectedLanguageName: string = useAppSelector(
    (state) => state.languages.selectedLanguage
  );
  const languages: ILanguage[] = useAppSelector(
    (state) => state.languages.languages
  );
  const [isOpened, setOpened] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<
    ILanguage | undefined
  >(
    languages.find(
      (lan: ILanguage): boolean => lan.name === selectedLanguageName
    )
  );

  const handleLogoClick = (): void => {
    router.push(`/${selectedLanguageName}`);
  };

  const handleButtonClick = (): void => {
    setOpened(!isOpened);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Image
          priority
          src={logo}
          alt="itmo-university-logo"
          width={160}
          height={16}
          className={styles.header__logo}
          onClick={handleLogoClick}
        />
        <div
          className={styles.header__languageSwitcher}
          onClick={handleButtonClick}
        >
          <div className={styles.header__language}>
            <Image
              priority
              src={selectedLanguage?.logoSrc || ''}
              width={24}
              height={24}
              alt={`flag-${selectedLanguageName}`}
            />
            <span className={styles.header__language__label}>
              {selectedLanguage?.label}
            </span>
            {isOpened ? (
              <Image src={arrowUp} alt="arrow-up" />
            ) : (
              <Image src={arrowDown} alt="arrow-down" />
            )}
          </div>
          {isOpened && <Dropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;
