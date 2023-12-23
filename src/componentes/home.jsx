import Header from './header';
import Footer from './footer';
import {Container, Row, Col} from 'reactstrap';
import { Avatar, AvatarGroup } from '@mui/material';
import { deepOrange, green, pink, deepPurple } from '@mui/material/colors';
import './home.css';
import Slideshow from './slidershow';

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export default function Home() {
    return(
        <div style={{textAlign: "justify"}}>
            <Header/>
            <main>
            <Slideshow />
            </main>
            
            <Container >
                <Row style={{paddingTop: "5%", paddingBottom: "15%"}}>
                    <Col lg="6" sx="12" >
                        <h1>Anthem, </h1>
                        <h2 >la apuesta para mejorar la calidad de vida de los ciudadanos. </h2>
                        <h5>En Anthem tenemos claro que nuestro objetivo es mejorar la forma 
                            en que las personas viven o trabajan, mediante el uso de las tecnologías.
                            Una Smart City es mucho más que una ciudad tecnológica, es una ciudad que 
                            aprovecha el potencial de las nuevas tecnologías para afrontar los desafíos 
                            de la vida urbana, repercutiendo de forma directa y benéfica en la vida de 
                            los ciudadanos. </h5>
                    </Col>
                    <Col lg="6" xs="12">
                    </Col>
                </Row>
                <hr/>
                <Row style={{paddingTop: "15%", paddingBottom: "15%"}}>
                    <Col lg="6" xs="12">
                    </Col>
                    <Col lg="6" xs="12">
                        <h2>Favorecer la movilidad inteligente.</h2>
                        <h5>Especializándonos en el trasporte urbano más beneficioso para
                            la salud, hemos implementado en Talavera de la Reina la construcción de 
                            carriles paralelos para bicicletas y patinetes en las carreteras más anchas, 
                            y días en los que algunas carreteras que serán de uso exclusivo de dichos 
                            medios de transporte en las más extrechas. Con esta aplicación web podrá 
                            visualizar la disponibilidad de las bicicletas y la distribución que tienen 
                            por toda la metropolis de forma sencilla y eficaz. </h5>
                    </Col>
                </Row>
                <hr/>
                <Row style={{paddingTop: "15%", paddingBottom: "15%"}}>
                    <Col lg="6" xs="12">
                        <h2>Mejorar la forma de vida de las personas.</h2>
                        <h5>Gracias a la colaboración de varios proveedores, para cada barrio de cada distrito, la 
                            prestigiosa ciudad de la Ceramica cuenta con patinetes disponible para su población.</h5>
                    </Col>
                    <Col style={{paddingRight: "5%", paddingLeft: "5%"}} lg="6" xs="12">
                        <AvatarGroup max={10}>
                            <Avatar sx={{ bgcolor: pink[100] }}>A</Avatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>T</Avatar>
                            <Avatar sx={{ bgcolor: deepPurple[800] }}>K</Avatar>
                            <Avatar sx={{ bgcolor: green[500] }}>U</Avatar>
                            <Avatar sx={{ bgcolor: green[100] }}>R</Avatar>
                            <Avatar {...stringAvatar('JUMP UBER')} />
                            <Avatar {...stringAvatar('SJV CONSULTING')} />
                            <Avatar sx={{ bgcolor: pink[300] }}>F</Avatar>
                            <Avatar {...stringAvatar('REBY RIDES')} />
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>L</Avatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
                        </AvatarGroup>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}