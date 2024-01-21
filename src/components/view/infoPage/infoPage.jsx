import './infoPage.scss';
import img1 from './../../../images/pngwing1.png';
import img2 from './../../../images/pngwing2.png';
import img3 from './../../../images/pngwing3.png';
import { useTranslation } from 'react-i18next';


const InfoPage = () => {

    const { t, i18n } = useTranslation();


    return (
        <div className="infoPage-wrapper">
            <div className='infoPage-top'>
                <h1 className='title'>{t("InfoPage.Coin")}</h1>
                <p className='text'>{t("InfoPage.CoinText")} </p>
            </div>
            <div className='infoPage-bottom'>
                <div className='finance finance1'>
                    <div className='img-div'>
                        <img src={img1} alt='pngwing1' className='pngwing1-img' />
                    </div>
                    <h3 >{t("InfoPage.Reliability")}</h3>
                    <p>
                    {t("InfoPage.h3text")}
                    </p>
                </div>
                <div className='finance finance2'>
                    <div className='img-div'>
                        <img src={img2} alt='pngwing2' className='pngwing2-img' />
                    </div>
                    <h3 >{t("InfoPage.Experience")}</h3>
                    <p>
                    {t("InfoPage.h3text2")}
                    </p>
                </div>
                <div className='finance finance3'>
                    <div className='img-div'>
                        <img src={img3} alt='pngwing3' className='pngwing3-img' />
                    </div>
                    <h3 >{t("InfoPage.Transparency")}</h3>
                    <p>
                    {t("InfoPage.TransparencyText")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;