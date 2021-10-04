import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Services = () => {
    const [cards, setCards] = useState()
    useEffect(() => {
        fetch('./cards.JSON')
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])
    return (
        <div>
            <h2>Language Learning Center</h2>

            {

                cards.map(card => <Cards>

                    key={card.key}
                    card={card}
                </Cards>)
            }
        </div>
    );
};

export default Services;