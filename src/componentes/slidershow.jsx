import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowLeftOutlined,KeyboardArrowRightOutlined} from "@mui/icons-material";
import styled from "styled-components";
import smartCity from '../imagenes/smart-city.jpg';
import patineteElectrico from '../imagenes/patinete-electrico.jpg'
import carrilBiciMapa from '../imagenes/carril-bici-mapa.jpg';
import cicloCalle from '../imagenes/ciclo-calle.jpg';


const Slideshow = () => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = () => {
        if (slideshow.current === null){
            console.log("No se puede avanzar a la siguiente transición");
        }else{
            if(slideshow.current.children.length > 0){
                const primerElemento = slideshow.current.children[0];
                slideshow.current.style.transition = `300ms ease-out all`;
                const tamañoSlide = slideshow.current.children[0].offsetWidth;
                slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
                
                const transicion = () => {
                    slideshow.current.style.transition = `none`;
                    slideshow.current.style.transform = `translateX(0)`;    
                    slideshow.current.appendChild(primerElemento);
                    slideshow.current.removeEventListener('transitionend', transicion);
                }
            
                slideshow.current.addEventListener('transitionend', transicion);
                
            }
        }
    }
    
    const anterior = () => {
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            slideshow.current.style.transition = `none`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            
            setTimeout(() => {
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
                
            }, 30);

        }
    }

    useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, 5000);

    }, []);

    return(
        <ContenedorPrincipal >
            <ContenedorSlideshow ref={slideshow}>
                <Slide>
                    <Link to="/Patinetes">
                        <img src={patineteElectrico} alt=""  ></img>
                    </Link>
                    <TextoSlice >
                        <p>Two-Wheeled Wonders: Ride the Revolution!</p>
                    </TextoSlice>
                </Slide>
                <Slide>
                    <Link to="/Disponibilidad">
                        <img src={cicloCalle} alt=""  ></img>
                    </Link>
                    <TextoSlice>
                        <p>Bike More, Live More!</p>
                    </TextoSlice>
                </Slide>
                <Slide>
                    <Link to="/Aforo">
                        <img  src={carrilBiciMapa} alt=""  ></img>
                    </Link>
                    <TextoSlice>
                        <p>Pedal On, Stress Gone!</p>
                    </TextoSlice>
                </Slide>
                <Slide>
                    <img src={smartCity} alt=""  ></img>  
                    <TextoSlice>
                        <p>Creating smarter cities for a better tomorrow.</p>
                    </TextoSlice>
                </Slide>
            </ContenedorSlideshow>
            <Controles>
                <Boton onClick={anterior}>
                    <KeyboardArrowLeftOutlined style={{ color: 'white' }} sx={{ fontSize: 50 }} />                    
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <KeyboardArrowRightOutlined style={{ color: 'white' }} sx={{ fontSize: 50 }} />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`
    position: relative;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const TextoSlice = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;


`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;
    img{
        width: 100%;
        vertical-align: top;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover {
        background: rgb(0,0,0,.2);
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #000)' : 'drop-shadow(2px 0px 0px #000)'};
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0' }
`;

export default Slideshow;