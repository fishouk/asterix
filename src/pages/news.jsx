import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchNews from '../actions/fetchNews';

import { Container } from 'react-bootstrap/';

import Preload from '../parts/preload';
import NewsListContainer from '../parts/newslistcontainer';

class News extends Component {
    componentDidMount() {
        const { fetchNews } = this.props;
        fetchNews();
    }

    render() {
        return (
            <Container>
                <Preload>  
                    <NewsListContainer />
                </Preload>
            </Container> 
        );
    }
}

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNews: fetchNews
}, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);