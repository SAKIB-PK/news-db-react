import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const {title,urlToImage,publishedAt,description,url,content} =props.news
    const img = `https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`

    return (
        <Col>
            <Card style={{height:600}}>
                <Card.Img variant="top" src={urlToImage||img} style={{height:280}} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    { (content && content.slice(0,200) )|| description } - <a rel='noreferrer' target='_blank' href={url}>Read More...</a>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Article Submit at {publishedAt || 'now'}</small>
                </Card.Footer>                                                  
            </Card>
        </Col>
    );
};

export default News;