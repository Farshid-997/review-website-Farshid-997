import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from './Images/R.jpg'
import img1 from './Images/R (1).jpg'
import img2 from './Images/R.png'
const Features = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New Language Courses Are here!!</h3>
                        <p>Offers Are limited!!Get 50! offer with each courses stay with us..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'red', fontWeight: 'bold', margin: '5px' }}>Online Classes will be Start Soon</h3>
                        <p style={{ color: 'red', fontWeight: 'bold', margin: '5px' }}>Grab Your Desire Course fast!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'red', fontWeight: 'bold' }}>Grab New Tools From New Language Courses</h3>
                        <p style={{ color: 'red', fontWeight: 'bold' }}>Your Lerning Will be good with us!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Features;