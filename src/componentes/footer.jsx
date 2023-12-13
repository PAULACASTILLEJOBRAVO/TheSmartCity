import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import PedalBike from '@mui/icons-material/PedalBike';

export default function App() {
  return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >
            <section className=''>
            <form action=''>
                <MDBRow className='d-flex justify-content-center'>
                    <MDBCol size="auto">
                    <p className='pt-2'>
                        <strong>Regístrate con tu email</strong>
                    </p>
                    </MDBCol>

                    <MDBCol md='5' start>
                    <MDBInput contrast type='email' className='mb-4' />
                    </MDBCol>

                    <MDBCol size="auto">
                    <MDBBtn outline color='dark' type='submit' className='mb-4'>
                        Subscribirse
                    </MDBBtn>
                    </MDBCol>
                </MDBRow>
                </form>
            </section>
        
        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    
                    <h6 className='text-uppercase fw-bold mb-4' align="center">
                        <PedalBike/>
                        The Smart City
                    </h6>
                    <p align="justify">
                    En esta ciudad se quiere implantar un sistema de uso común de bicicletas para combatir 
                    la obesidad y conseguir una ciudad más verde y con menos contaminación. 
                    </p>
                </MDBCol>
                
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className=' fw-bold mb-4'>Contáctanos</h6>
                <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    thesmartcity@gmail.com
                </p>
                <p>
                    <MDBIcon icon="phone" className="me-3" /> +34  643 56 07 88
                </p>
                <p>
                    <MDBIcon icon="print" className="me-3" /> +34 643 56 07 89
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <a className='text-reset fw-bold' href='https://thesmartcity.onrender.com/'>
            TheSmartCity.com
            </a>
        </div>
        </MDBFooter>
  );
}