import React, { Component } from "react";
import NewsRow from './newsrow';
import { Row } from "react-bootstrap";

class NewsList extends Component {

    splitEvery = (array, length) =>
        array.reduce(
            (result, item, index) => {
            if ( index % length === 0 ) result.push([])
                result[Math.floor(index / length)].push(item)
            return result
            },
        []
    );

    render() {        
            const { news } = this.props;

            return(
                this.splitEvery(news, 3).map( (newsItems, index) => 
                    <Row key={index}>
                        <NewsRow index={index} newsItems={newsItems} />
                    </Row>
                )
            );
            
    }    
}

export default NewsList;