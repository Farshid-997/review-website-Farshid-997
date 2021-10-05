

import React from 'react';
import { Card } from 'react-bootstrap';

const DisplayCards = (props) => {
    const { LanguageName, totalStudentEnroll, price, InstructorName, image } = props.course

    return (
        <div className="Cards">

            <Card style={{ width: '18rem', color: 'black', margin: '5px', padding: "3px", boxShadow: '5px 5px  #aaaaaa', height: '450px' }}>
                <Card.Img variant="top" src={image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '5px', textAlign: 'center' }} />
                <Card.Body>
                    <Card.Title>Language:{LanguageName}</Card.Title>
                    <Card.Text>
                        <h4>Instructor Name:{InstructorName}</h4>
                        <p>Total Student Enroll:{totalStudentEnroll}</p>
                        <p style={{ color: "blue", fontWeight: 'bold' }}>Price:{price}Tk</p>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>

    );
};

export default DisplayCards;