import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = (props) => {
    const { LanguageName, totalStudentEnroll, price, InstructorName, image } = props.cards
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;