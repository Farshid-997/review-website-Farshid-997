

import React from 'react';
import { Card } from 'react-bootstrap';

const DisplayCards = (props) => {
    const { LanguageName, totalStudentEnroll, price, InstructorName, image } = props.course

    return (
        <div className="Cards">

            <Card style={{ width: '18rem', color: 'black', margin: '5px', padding: "3px", boxShadow: '5px 5px  #aaaaaa' }}>
                <Card.Img variant="top" src={image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '10px' }} />
                <Card.Body>
                    <Card.Title>Language:{LanguageName}</Card.Title>
                    <Card.Text>
                        <h4>{InstructorName}</h4>
                        <p>{totalStudentEnroll}</p>
                        <p>{price}</p>
                    </Card.Text>
                    <footer >
                        <p>All have Limited Offer</p>
                    </footer>
                </Card.Body>
            </Card>

        </div>

    );
};

export default DisplayCards;