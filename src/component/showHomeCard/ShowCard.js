import React from 'react';
import { Card } from 'react-bootstrap';

const ShowCard = (props) => {
    const { LanguageName, totalStudentEnroll, price, InstructorName, image } = props.cd
    return (
        <div>
            <Card style={{ width: '18rem', color: 'black', margin: '5px', padding: "5px" }}>
                <Card.Img variant="top" src={image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '10px' }} />
                <Card.Body>
                    <Card.Title>Language:{LanguageName}</Card.Title>
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

export default ShowCard;