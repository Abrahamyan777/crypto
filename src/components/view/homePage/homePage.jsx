import { useTranslation } from 'react-i18next';
import Header from './header/header';
import './homePage.scss'




const HomePage = ({ active, setActive }) => {

    const { t, i18n } = useTranslation();
    
    return (
        <div className="homePageWrapper">
            <Header active={active} setActive={setActive} />
            <div className='left-section'>
                <h6>{t("homepage.Best project")}</h6>
                <h1>{t("homepage.Crypto")}</h1>
                <h2>{t("homepage.Investments")}</h2>
                <p>{t("homepage.text1")} <br />{t("homepage.text2")}</p>
                <div className='div-btn'>
                    <button className='btn1'>  {t("homepage.Join")}</button>
                    <button className='btn2'>{t("homepage.More details")}</button>
                </div>
                <div className='klients'>
                
                </div>
            </div>
        </div>
    )
}

export default HomePage;