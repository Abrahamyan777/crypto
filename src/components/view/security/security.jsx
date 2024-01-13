import './security.scss';
import motors from '../../../images/Mockup.png'




const Security = () => {
    return (
        <section className='security-container'>
            <div className="left-block">
                <h2>Invest Coin - это про
                    безопасность!</h2>
                <p>И как выражается безопасность? Чем меньше вложений в инвестиции, тем больше риска потерпеть неудачу. Чем больше вложений, тем тем меньше риска.
                Безопасность инвестии означает что ваши вложения (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы делают ставки с общего счета, где на балансе всегда больше 100 000$.
            Нажмите на кнопку ниже и узнайте все лично от наших менеджеров</p>
                    <div>
                        <button>Узнать подробнее</button>
                    </div>
            </div>
            <div className="right-block">
                <img src={motors} alt='' /> 
            </div>
        </section>
    )
}

export default Security;