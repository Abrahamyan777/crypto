import './security.scss';
import motors from '../../../images/Mockup.png'
import { useTranslation } from 'react-i18next';




const Security = () => {

    const {t} = useTranslation();

    return (
        <section className='security-container'>
            <div className="left-block">
                <h2>{t("security.Invest Coin is about security!")}</h2>
                <p>{t("security.textInvest")}</p>
                    <div>
                        <button>{t("security.Find out more")}</button>
                    </div>
            </div>
            <div className="right-block">
                <img src={motors} alt='' /> 
            </div>
        </section>
    )
}

export default Security;