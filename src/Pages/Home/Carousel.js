import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Carousel.css';

function Carousel({ Contents }) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 6000);
    })

    const slideRight = () => {
        setCurrent(current === Contents.length-1 ? 0 : current+1)
    }
    
    const slideLeft = () => {
        setCurrent(current === 0 ? Contents.length-1 : current-1)
    }

    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    }

  return (
    <div className='Carousel-Frame'>
        <div className="Carousel" onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}}>
            <div className='Carousel-Wrapper'>
                {Contents.map((card, idx) => {
                    return (
                        <div key={idx} className={idx === current ? 'Carousel-Card Carousel-Card-Active' : 'Carousel-Card' }>
                            <img src={card.image} className='Card-Image' slt={card.title} />
                            <div className='Card-Overlay'>
                                <div className='Card-Overlay-Content'>
                                    <h2 className='Card-Title'>{card.title}</h2>
                                    <p className='Card-Description'>{card.description}</p>
                                    {/* <button className='Card-Button'>Visit</button> */}
                                    <Link key={card.key} to={card.link} onClick={ScrollToTop} ><button className='Card-Button'>Visit</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='Carousel-Arrow-Left' onClick={slideLeft}></div>
                <div className='Carousel-Arrow-Right' onClick={slideRight}></div>
                <div className='Carousel-Pagination'>
                    {Contents.map((_, idx) => {
                        return (
                            <div key={idx} className={idx === current ? 'Pagination-Dot Pagination-Dot-Active' : 'Pagination-Dot' } onClick={() => setCurrent(idx)}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Carousel;