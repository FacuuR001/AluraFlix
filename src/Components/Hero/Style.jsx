import styled from 'styled-components';
import { colorBlanco, NavLinkPanel, colorBtnHero, colorBtnHeroActive, colorBtnHeroActive768px } from "../UI/valiables"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const CarouselWrapper = styled.div`
  position: relative;
`

export const ImagenCarruselContenedor = styled.div`
  height: 460px;
  display: flex; 
  justify-content: center;
  align-items: center; 

 
`

export const ImagenCarrusel = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;

  @media (min-width: 1024px) { 
    object-position: top;
  }
`

export const CarruselInfo = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, .01) 0%, #000000 100%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 0 1rem 3rem 1rem;

  @media (min-width: 768px) { 
      align-items: start
  }
`

export const SliderTitle = styled.h2`
  color: ${colorBlanco};
  font-size: 1.7rem;
  margin-bottom: .5rem;
  text-align: center;

  @media (min-width: 768px) { 
    font-size: 4rem;    
  }
`

export const SliderText1 = styled.p`
  color: ${colorBlanco};
  font-size: .65rem;
  margin-bottom: .2rem;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 768px) { 
      font-size: 1rem;
  }
`

export const SliderText2 = styled.p`
  color: ${colorBlanco};
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: 768px) { 
      font-size: 1.5rem;
  }
`

export const SliderButton = styled.button`
  background-color: ${colorBtnHero};
  border: none;
  border-radius: 30px;
  padding: .6rem;
  width: 8rem;
  margin-bottom: .6rem;
  color: ${colorBlanco};
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    background-color: ${colorBtnHeroActive};
  }

  @media (min-width: 768px) { 
    background-color: ${NavLinkPanel};
    border-radius: 5px;
    padding: 1rem;
    font-size: 1rem;
    width: 10rem;
    margin-bottom: 1.2rem;

    &:active {
    background-color: ${colorBtnHeroActive768px};
    }
  }
`



// Estiliza los puntos del carrusel
export const StyledSlider  = styled(Slider)`
  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li button:before {
    color: ${colorBlanco};
  }

  .slick-dots li.slick-active button:before {
    opacity: .75;
    color: ${NavLinkPanel};
  }

  .carousel-overlay{
    padding-bottom: 32px;
  }
`;