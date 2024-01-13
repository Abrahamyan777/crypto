import { useEffect, useState } from 'react';
import './header.scss'
import { FaAlignJustify, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdClose } from 'react-icons/md';


const Header = ({active, setActive}) => {
    const [screenWith, setScreenWith] = useState(window.innerWidth)

    useEffect(() => {
        const changWidth = () => {
            setScreenWith(window.innerWidth)
        }
        window.addEventListener("resize", changWidth);
        return (
            window.addEventListener("resize", changWidth)
        )
    }, [screenWith])

    return (
        <header className='headerWrapper'>
            <div className='headerLogo'>

            </div>
            {(screenWith > 1024) ? (
                <>
                    <nav className='menu-list'>
                        <ul>
                            <li>Особенности</li>
                            <li>Отзывы</li>
                            <li>Инвестиция</li>
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
                        {active ?  <MdClose />  : <FaAlignJustify /> }
                    </button>
                </div>
            }
        </header>
    )
}

export default Header;