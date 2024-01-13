import Slider from 'react-slick';
import './curuselContainer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from './../../../images/photo1.png';
import photo2 from './../../../images/photo2.png';
import photo3 from './../../../images/photo3.png';


const SlikComp = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slik-container">
      <Slider {...settings}>
        <div className='img-div'>
          <img src={photo1} alt='photo1' />
        </div>
        <div className='img-div'>
          <img src={photo2} alt='photo1' />
        </div>
        <div className='img-div'>
          <img src={photo3} alt='photo1' />
        </div>
        <div className='img-div'>
          <img src={photo1} alt='photo1' />
        </div>
        <div className='img-div'>
          <img src={photo2} alt='photo1' />
        </div>
        <div className='img-div'>
          <img src={photo3} alt='photo1' />
        </div>
      </Slider>
    </div>
  )
}

export default SlikComp;