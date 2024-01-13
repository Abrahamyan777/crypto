import './platforms.scss';
import bitcoin1 from '../../../images/bitcoin1.png'
import bitcoin2 from '../../../images/bitcoin2.png'
import bitcoin3 from '../../../images/bitcoin3.png'
import bitcoin4 from '../../../images/bitcoin4.png'
import bitcoin5 from '../../../images/bitcoin5.png'
import bitcoin6 from '../../../images/bitcoin6.png'



const Platforms = () => {
    return (
        <section className='platforms-wrapper'>
            <h2>Наши площадки</h2>
            <p>Наш проект работает только с проверенными площадками для инвестиций, чтобы максимально снизить риски.</p>

            <div className='platforms-items'>
                <ul>
                    <li>
                        <img src={bitcoin1} alt='bitcoin1' />
                    </li>
                    <li>
                        <img src={bitcoin2} alt='bitcoin2' />
                    </li>
                    <li>
                        <img src={bitcoin3} alt='bitcoin3' />
                    </li>
                    <li>
                        <img src={bitcoin4} alt='bitcoin4' />
                    </li>
                    <li>
                        <img src={bitcoin5} alt='bitcoin5' />
                    </li>
                    <li>
                        <img src={bitcoin6} alt='bitcoin6' />
                    </li>
                </ul>
            </div>
            <div className='line'></div>

        </section>
    )
}

export default Platforms;