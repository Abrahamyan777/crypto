import { useEffect, useState } from 'react';
import './header.scss'
import { FaAlignJustify, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import '../../../../i18n'


function Header({ active, setActive }) {
    const [screenWith, setScreenWith] = useState(window.innerWidth);
    const { t, i18n } = useTranslation();


    const handleChange = (e) => {
        console.log(e.target.value);
         let le = e.target.value
        i18n.changeLanguage(le)
    };

    useEffect(() => {
        const changWidth = () => {
            setScreenWith(window.innerWidth);
        };
        window.addEventListener("resize", changWidth);
        return (
            window.addEventListener("resize", changWidth)
        );
    }, [screenWith]);

    return (
        <header className='headerWrapper'>
            <div className='headerLogo'>

            </div>
            {(screenWith > 1024) ? (
                <>
                    <nav className='menu-list'>
                        <ul>
                            <li>{t("homepage.header.Peculiarities")}</li>
                            <li>{t("homepage.header.Reviews")}</li>
                            <li>{t("homepage.header.Investment")}</li>
                        </ul>
                    </nav>
                    <div className='headerIcons'>
                        <ul>
                            <li> <FaInstagram />  </li>
                            <li><FaTelegramPlane /></li>
                            <li><FaWhatsapp /></li>
                        </ul>
                    </div>
                </>

            ) :
                <div className='IconBtn'>
                    <button onClick={() => setActive(true)}>
                        {active ? <MdClose /> : <FaAlignJustify />}
                    </button>
                </div>}
            <div className='languges-wrapper'>
                <div className='languges-container'>
                    <select onChange={handleChange}>
                        <option value="EN">En</option>
                        <option value="RU">Ru</option>
                        <option value="AM">Am</option>
                    </select>
                </div>

            </div>
        </header>
    );
}

export default Header;