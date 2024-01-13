import './infoPage.scss';
import img1 from './../../../images/pngwing1.png';
import img2 from './../../../images/pngwing2.png';
import img3 from './../../../images/pngwing3.png';


const InfoPage = () => {
    return (
        <div className="infoPage-wrapper">
            <div className='infoPage-top'>
                <h1 className='title'>Как “Invest Coin” работает? </h1>
                <p className='text'>Invest Coin - это команда оптыных инвесторов,
                    аналитиков и программистов. Мы работаем на площадках криптовалют
                    (и не только) уже более 4 года и имеем конкурентоспособное портфолио.
                    Все встречи, общения и договоренности
                    с нашими партнерами (клиентами) проходят в прозрачной форме.
                </p>
            </div>
            <div className='infoPage-bottom'>
                <div className='finance finance1'>
                    <div className='img-div'>
                        <img src={img1} alt='pngwing1' className='pngwing1-img' />
                    </div>
                    <h3 >Надежность</h3>
                    <p>
                        Slate helps you see how
                        many more days you need
                        to work to reach your
                        financial goal.
                    </p>
                </div>
                <div className='finance finance2'>
                    <div className='img-div'>
                        <img src={img2} alt='pngwing2' className='pngwing2-img' />
                    </div>
                    <h3 >Опыт</h3>
                    <p>
                        Slate helps you see how
                        many more days you need
                        to work to reach your
                        financial goal.
                    </p>
                </div>
                <div className='finance finance3'>
                    <div className='img-div'>
                        <img src={img3} alt='pngwing3' className='pngwing3-img' />
                    </div>
                    <h3 >Прозрачность</h3>
                    <p>
                        Slate helps you see how
                        many more days you need
                        to work to reach your
                        financial goal.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;