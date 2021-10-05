import Button from '@restart/ui/esm/Button';
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
            <h1> <span style={{ color: 'red' }}> E-duca</span>  Online Language Learning Platform</h1>


            <div className="show-Course">
                {

                    demoCourse.map(cd => <ShowCard
                        key={cd.key}
                        cd={cd}

                    > </ShowCard>)
                }
            </div>

            <div>
                <form action="">
                    <Button className="btn btn-success" style={{ padding: '10px', margin: '10px' }}>Show More...!!</Button>
                </form>

            </div>




        </div>
    );
};

export default Home;