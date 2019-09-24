import React, { Component } from "react";
import { connect } from 'react-redux';
import { getNews } from '../reducers/index';
import NewsList from './newslist';
import { Row, Col } from 'react-bootstrap/';
class NewsListContainer extends Component {
    
  render() {
        const { news } = this.props;

        return(
            news? 
              <React.Fragment>
                  <Row>
                      <Col>
                        <h2>Наши новости</h2>
                      </Col>
                  </Row>
                  <div className="news_section">
                      <NewsList news={news} />   
                  </div>               
              </React.Fragment>
             : null
        );
  }    
}

const mapStateToProps = state => ({
  news: getNews(state),
})

export default connect(mapStateToProps)(NewsListContainer);