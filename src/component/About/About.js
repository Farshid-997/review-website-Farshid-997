import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from './Image/OIP.jpg'
import img2 from './Image/OIP (1).jpg'
import img3 from './Image/R.jpg'
const About = () => {
    return (
        <div>
            <h1>This is Us!!</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Founder of this Learning Site</Card.Title>
                        <Card.Text>
                            He is the founder of this  Learning Sites.he is taking english and other language courses.he is very professional with his work and very famous among his students.
                            you can contact with him anytime.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Founder of this Learning Site</Card.Title>
                        <Card.Text>
                            He is the founder of this  Learning Sites.he is taking bengali courses and he is  very helpful person.he is very professional with his work and very famous among his students. you can contact with him anytime.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Founder of this Learning Site</Card.Title>
                        <Card.Text>
                            He is the founder of this  Learning Sites.he is taking spanish  courses and he is  very helpful person.he is very professional with his work and very famous among his students.
                            you can contact with him anytime.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
            </CardGroup>
        </div>
    );
};

export default About;