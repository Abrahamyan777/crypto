import { Suspense, useState } from 'react';
import './App.css';
import HomePage from './components/view/homePage/homePage';
import ModalMenu from './components/view/homePage/modalMenu/modalMenu';
import InfoPage from './components/view/infoPage/infoPage';
import Footer from './components/view/footer/footer';
import SlikComp from './components/view/curuselContainer/curuselContainer';
import VideoSlider from './components/view/videoSlider/videoSlider';
import Security from './components/view/security/security';
import Learn from './components/view/learn/learn';
import Platforms from './components/view/platforms/platforms';
import Reviews from './components/view/reviews/reviews';


function App() {

  const [modalActive, setModalActiv] = useState(false);


  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <ModalMenu active={modalActive} setActive={setModalActiv} />
        <HomePage active={modalActive} setActive={setModalActiv} />
        <InfoPage />
        <VideoSlider />
        <Security />
        <Learn />
        <Platforms />
        <Reviews />

        {/* <SlikComp /> */}
        <Footer />
      </div>
    </Suspense>

  );
}

export default App;
