import { 
    CarouselWrapper, 
    ImagenCarrusel, 
    CarruselInfo, 
    SliderTitle, 
    SliderText1, 
    SliderText2, 
    SliderButton,
    StyledSlider,
    ImagenCarruselContenedor
} from './Style';

import slide1 from "../../assets/img/slide/slide1.jpg"
import slide2 from "../../assets/img/slide/slide2.jpg"
import slide3 from "../../assets/img/slide/slide3.jpg"
import slide4 from "../../assets/img/slide/slide4.jpg"
import slide5 from "../../assets/img/slide/slide5.jpg"



const carouselData = [
    {
      image: `${slide1}`,
      title: 'No Escape',
      description1: 'Nueva pelicula disponible',
      description2: 'El misterio comienza en alta mar',
      id: '1'
    },
    {
      image: `${slide2}`,
      title: 'Calabozos & Dragones',
      description1: 'Nueva pelicula disponible',
      description2: '¿Quién necesita héroes cuando tienes ladrones?',
      id: '2'
    },
    {
      image: `${slide3}`,
      title: 'Scream VI',
      description1: 'Nueva pelicula disponible',
      description2: 'Nueva ciudad, nuevas reglas',
      id: '3'
    },
    {
      image: `${slide4}`,
      title: 'Acusado',
      description1: 'Nueva serie disponible',
      description2: 'Los delitos a través de los ojos del acusado',
      id: '4'
    },
    {
      image: `${slide5}`,
      title: 'El Oro',
      description1: 'Nueva serie disponible',
      description2: 'El robo millonario que conmocionó al mundo',
      id: '5'
    },
    
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: false,
  };

  

const Hero = () => {
    return(
        <>
            <StyledSlider  {...settings} >
                {carouselData.map((item) => (
                    <CarouselWrapper key={item.id} className="carousel-item">
                        <ImagenCarruselContenedor>
                          <ImagenCarrusel src={item.image} alt={item.title} />
                        </ImagenCarruselContenedor>
                        <CarruselInfo className="carousel-overlay">
                            <SliderTitle>{item.title}</SliderTitle>
                            <SliderButton>Ver Ahora</SliderButton>
                            <SliderText1>{item.description1}</SliderText1>
                            <SliderText2>{item.description2}</SliderText2>
                        </CarruselInfo>
                    </CarouselWrapper>
                        )
                    )
                }
            </StyledSlider>
        </>
    );
}

export default Hero;