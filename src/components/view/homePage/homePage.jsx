import Header from './header/header';
import './homePage.scss'



const HomePage = ({ active, setActive }) => {
    return (
        <div className="homePageWrapper">
            <Header active={active} setActive={setActive} />
            <div className='left-section'>
                <h6>Лучший проект</h6>
                <h1>Крипто</h1>
                <h2>Инвестиции</h2>
                <p>Международный проект инвестиции в криптовалюту и <br />не только. Мы заработаем если вы заработаете!</p>
                <div className='div-btn'>
                    <button className='btn1'>  Присоединиться</button>
                    <button className='btn2'>Подробнее</button>
                </div>
                <div className='klients'>
                
                </div>
            </div>
        </div>
    )
}

export default HomePage;