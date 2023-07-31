'use client'
import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import arrowUp from '@/public/navigation/arrow-up.svg';
import arrowDown from '@/public/navigation/arrow-down.svg';
import flagRus from '@/public/flags/flag-rus.svg';
import styles from './Header.module.scss';

const Header = () => {
    const [isOpened, setOpened] = useState<boolean>(false);
    return (
      <header className={styles.header}>
        <div className={styles.header__content}>
          <Image
            src={logo}
            alt="itmo-university-logo"
            width={160}
            height={16}
          />
          <div>
            <div>
              <Image src={flagRus} alt="flag-russia" width={24} height={24} />
              <span>Рус</span>
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
}

export default Header;
