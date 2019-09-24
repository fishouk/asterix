import React, { Component } from "react";
import { connect } from 'react-redux';
import { getError, getNewsPending } from '../reducers/index';

import { Row, Col } from 'react-bootstrap/';

class Preload extends Component {
  render() {
    const { error, isLoading, children } = this.props;

    if (error) {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <p>{error.message}</p>
                    </Col>
                </Row>
            </React.Fragment>            
        );
    }
    if (isLoading) {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <p>Грузим новости</p>
                    </Col>
                </Row>
            </React.Fragment> 
        );
    }
    return children;
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  isLoading: getNewsPending(state)
});

export default connect(mapStateToProps)(Preload);