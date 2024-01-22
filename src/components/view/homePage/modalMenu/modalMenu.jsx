import { useTranslation } from 'react-i18next';
import './modalMenu.scss'
import { MdClose } from "react-icons/md";




const ModalMenu = ({ active, setActive }) => {

    const { t, i18n } = useTranslation();


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_contant act ' : 'modal_contant'} onClick={(e) => e.stopPropagation()}>
                <div className='modal_title'>
                    <h2>{t("ModalMenu.Menu")}</h2>
                    <MdClose onClick={() => setActive(false)} />
                </div>
                <div className='modal-menu-list'>
                    <ul>
                        <li>{t("homepage.header.Peculiarities")}</li>
                        <li>{t("homepage.header.Reviews")}</li>
                        <li>{t("homepage.header.Investment")}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModalMenu;