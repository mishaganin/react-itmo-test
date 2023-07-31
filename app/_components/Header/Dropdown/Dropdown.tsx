'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Dropdown = () => {
    const [isOpened, setOpened] = useState<boolean>(false);
    return (
        <div>
            <Image
                src=""
                alt="itmo-university-logo"
                width={300}
                height={300}
            />
            <span>Рус</span>
        </div>
    )
}

export default Dropdown;
