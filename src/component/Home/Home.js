import React, { useEffect, useState } from 'react';
import ShowCard from '../showHomeCard/ShowCard';
import './Home.css'
const Home = () => {
    const [demoCourse, setdemoCourse] = useState([])
    useEffect(() => {
        fetch('./output.json')
            .then(res => res.json())
            .then(data => setdemoCourse(data))

    }, [])
    return (
        <div>



            <div className="show-Course">
                {

                    demoCourse.map(cd => <ShowCard
                        key={cd.key}
                        cd={cd}

                    ></ShowCard>)
                }
            </div>






        </div>
    );
};

export default Home;