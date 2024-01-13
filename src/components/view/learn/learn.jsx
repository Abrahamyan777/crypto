import './learn.scss'
import girle1 from '../../../images/girle1.png'
import girle2 from '../../../images/girle2.png'


const Learn = () => {
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
                <h3>Обучение?</h3>
                <p className='text1'>
                    Конечно! Индивидуальные уроки тем кто хочет научиться инвестировать.
                </p>
                <h3>
                    Подробнее посмотрите на видео
                </h3>
                <p>
                    Или напишите менеджеру
                </p>
                <div>
                    <button>Написать</button>
                </div>
            </div>
        </section>
    )
}

export default Learn;