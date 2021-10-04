import React from 'react';
import { Card } from 'react-bootstrap';

const DisplayCards = (props) => {
    const { LanguageName, totalStudentEnroll, price, InstructorName, image } = props.course
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{LanguageName}</Card.Title>
                    <Card.Text>
                        <h4>{InstructorName}</h4>
                        <p>{totalStudentEnroll}</p>
                        <p>{price}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayCards;