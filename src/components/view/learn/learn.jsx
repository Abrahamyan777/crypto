import './learn.scss'
import girle1 from '../../../images/girle1.png'
import girle2 from '../../../images/girle2.png'
import { useTranslation } from 'react-i18next'


const Learn = () => {

    const { t } = useTranslation();

    return (
        <section className='learn-wrapper'>
            <div className='left-block'>
                <div className='block1'></div>
                <div className='block2'>
                    <img src={girle1} alt='girle1' />
                </div>
                <div className='block3'>
                    <img src={girle2} alt='girle2' />
                </div>
            </div>
            <div className='right-block'>
                <h3>{t("learn.Education?")}</h3>
                <p className='text1'>
                    {t("learn.Certainly")}
                </p>
                <h3>
                {t("learn.Watch the video for more details?")}
                </h3>
                <p>
                {t("learn.Or write to the manager")}
                </p>
                <div>
                    <button>{t("learn.Write")}</button>
                </div>
            </div>
        </section>
    )
}

export default Learn;