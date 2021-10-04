import React, { useEffect, useState } from 'react';
import DisplayCards from '../Cards/DisplayCards';
import './Service.css'

const Services = () => {
    const [displayCourse, setCourse] = useState([])
    useEffect(() => {
        fetch('./output.json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])
    return (
        <div className="total-container ">
            <div className="showCourse">
                <div >
                    {
                        displayCourse.map(course => <DisplayCards
                            key={course.key}
                            course={course}


                        >
                        </DisplayCards>

                        )

                    }
                </div>


            </div>



        </div>

    );
};

export default Services;