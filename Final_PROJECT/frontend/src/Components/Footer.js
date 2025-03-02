import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                VidyaSetu              </h6>
              <p>
                "Empowering students with seamless access to academic resources, grades, and communication tools."
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Centers</h6>
              <p>
                <a href='https://cdac.in/index.aspx?id=ND' className='text-reset' target="_blank">
                Noida
                </a>
              </p>
              <p>
                <a href='https://cdac.in/index.aspx?id=PN' className='text-reset' target="_blank">
                Pune
                </a>
              </p>
              <p>
                <a href='https://cdac.in/index.aspx?id=DL' className='text-reset' target="_blank">
                Delhi
                </a>
              </p>
              <p>
                <a href='https://cdac.in/index.aspx?id=HY' className='text-reset' target="_blank">
                Hyderabad
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Courses</h6>
              <p>
                <a href='https://cdac.in/index.aspx?id=DAC&courseid=0' className='text-reset' target="_blank">
                PG-DAC
                </a>
              </p>
              <p>
                <a href='https://cdac.in/index.aspx?id=DAC&courseid=30' className='text-reset' target="_blank">
                PG-DAI
                </a>
              </p>
              <p>
                <a href='https://cdac.in/index.aspx?id=DAC&courseid=65' className='text-reset' target="_blank">
                PG-DBDA
                </a>
              </p>
              <p>
                <a href='https://cdac.in/index.aspx?id=DAC&courseid=20' className='text-reset' target="_blank">
                PG-DVLSI
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                CDAC.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rsa@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 8881155989
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 9168513000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025  Copyright:
        <a className='text-white' href=''> <br />
          Rishabh Sanjana Akarsh
        </a>
      </div>
    </MDBFooter>
  );
}
