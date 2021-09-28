import React from 'react';
import { Row } from 'react-bootstrap';
import News from './News/News';

const Cards = (props) => {
    const news =props.news
    return (
        <Row xs={6} md={4} lg={3} className="g-4">
            {
                news.map((res,i) =><News key={i}  news={res}/>)
            }
        </Row>
    )
};

export default Cards;