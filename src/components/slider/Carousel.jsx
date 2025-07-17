import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const itemsData = [
    {
        title: 'Caffe Latte, a new product',
        bgColor: '#9c4d2f',
        image: 'images/1.png',
    },
    {
        title: 'Strawberry mocha, a new product',
        bgColor: '#f5bfaf',
        image: 'images/2.png',
    },
    {
        title: 'Doppio espresso, a new product',
        bgColor: '#dedfe1',
        image: 'images/3.png',
    },
    {
        title: 'Matcha latte macchiato, a new product',
        bgColor: '#7eb63d',
        image: 'images/4.png',
    },
];

const Carousel = () => {
    const [active, setActive] = useState(1);
    const [direction, setDirection] = useState('next');
    const intervalRef = useRef(null);

    const countItem = itemsData.length;

    const getIndexes = (index) => {
        const other_1 = index - 1 < 0 ? countItem - 1 : index - 1;
        const other_2 = index + 1 >= countItem ? 0 : index + 1;
        return { other_1, other_2 };
    };

    const handleNext = () => {
        const newIndex = (active + 1) % countItem;
        setActive(newIndex);
        setDirection('next');
    };

    const handlePrev = () => {
        const newIndex = active - 1 < 0 ? countItem - 1 : active - 1;
        setActive(newIndex);
        setDirection('prev');
    };

    useEffect(() => {
        intervalRef.current = setInterval(handleNext, 5000);
        return () => clearInterval(intervalRef.current);
    }, [active]);

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(handleNext, 5000);
    }, [direction]);

    const { other_1, other_2 } = getIndexes(active);

    return (
        <main style={{
            overflowX: "hidden",
            position:"relative"
        }}>
            <section className={`carousel ${direction}`}>
                <div className="list">
                    {itemsData.map((item, index) => {
                        let className = 'item';
                        if (index === active) className += ' active';
                        else if (index === other_1) className += ' other_1';
                        else if (index === other_2) className += ' other_2';

                        return (
                            <article className={className} key={index}>
                                <div className="main-content" style={{ backgroundColor: item.bgColor }}>
                                    <div className="content">
                                        <h2>{item.title}</h2>
                                        <p className="price">$ 20</p>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore
                                            animi voluptatibus sequi illo, earum molestias explicabo officiis iste
                                            neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem
                                            voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.
                                        </p>
                                        <button className="addToCard">Add To Card</button>
                                    </div>
                                </div>
                                <figure className={`image ${index === active ? 'fade-in' : ''}`}>
                                    <img src={item.image} alt={item.title} />
                                    <figcaption>{item.title}</figcaption>
                                </figure>
                            </article>
                        );
                    })}
                </div>
                <div className="arrows">
                    <button onClick={handlePrev}>&lt;</button>
                    <button onClick={handleNext}>&gt;</button>
                </div>
            </section>
        </main>
    );
};

export default Carousel;
