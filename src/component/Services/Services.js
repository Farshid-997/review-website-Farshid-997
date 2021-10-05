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
        <div>
            <div className="showCourse">

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

    );
};

export default Services;