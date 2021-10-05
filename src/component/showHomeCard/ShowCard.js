import React from 'react';
import { Card } from 'react-bootstrap';

const ShowCard = (props) => {
    const { LanguageName, totalStudentEnroll, price, InstructorName, image } = props.cd
    return (
        <div>
            <Card style={{ width: '18rem', color: 'black', margin: '5px', padding: "5px", height: '400px' }}>
                <Card.Img variant="top" src={image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '10px' }} />
                <Card.Body>
                    <Card.Title>Language:{LanguageName}</Card.Title>
                    <Card.Text>
                        <h4>Instructor Name:{InstructorName}</h4>
                        <p>Total Student Enroll:{totalStudentEnroll}</p>
                        <p style={{ color: "blue", fontWeight: 'bold' }}>Price:{price}Tk.</p>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default ShowCard;