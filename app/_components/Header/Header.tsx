"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import Image from "next/image";
import logo from "@/public/logo.svg";
import arrowUp from "@/public/navigation/arrow-up.svg";
import arrowDown from "@/public/navigation/arrow-down.svg";
import flagRus from "@/public/flags/flag-rus.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setOpened(!isOpened);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Image src={logo} alt="itmo-university-logo" width={160} height={16} />
        <div className={styles.header__languageSwitcher} onClick={handleButtonClick}>
          <div className={styles.header__language}>
            <Image src={flagRus} alt="flag-russia" width={24} height={24} />
            <span className={styles.header__language__label}>Рус</span>
            {isOpened ? (
              <Image
                src={arrowUp}
                alt="arrow-up"
              /> // TODO add alt attribute
            ) : (
              <Image
                src={arrowDown}
                alt="arrow-down"
              /> // TODO add alt attribute
            )}
          </div>
          {isOpened && <Dropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;
