import React, { Component } from "react";

import { Col, Card } from 'react-bootstrap/';

class NewsList extends Component {
  render() {
        const { index, newsItems } = this.props;
        return(
            newsItems.map( (newsItem, newIndex) => 
                <Col key={index + newIndex}>
                    <Card>
                        <Card.Header>{newsItem.pub_date}</Card.Header>
                            {newsItem.image?(<img className="card-img-top" src={"http://meduza.io" + newsItem.image.large_url} alt={"image" + index + newIndex} />) : (<p>Без Фото</p>)}
                        <Card.Body>
                            <Card.Text>{newsItem.title}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {newsItem.source?(<a href={newsItem.source.url} target="_blank" rel="noopener noreferrer">Источник</a>) : (<p>Без источника</p>)}
                        </Card.Footer>
                    </Card>
                </Col>
            )
        );
        
  }    
}

export default NewsList;