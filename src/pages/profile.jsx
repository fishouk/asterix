import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions/user';

import { Container, Row, Col, Button } from 'react-bootstrap/';

class Profile extends Component {    
    
    
    handleLogout = () => {
        const { logout, history } = this.props;
        logout();
        history.push( '/login');
    }
    render() {
        
        const { history } = this.props;
        let user = null;
        if (localStorage.user) {user= JSON.parse(localStorage.user);}

        if (user && user.isLogin) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h1>Приветствую, {user.username}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Ваш логин: {user.username}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Ваш пароль: {user.password}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Ваш статус: {user.isLogin? "в сети" : "не в сети"}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="btn btn-danger" onClick={this.handleLogout}>Выйти</Button>
                        </Col>
                    </Row>                    
                </Container>
            );
        } else {
            history.push("/login");
        }
        
        return null;
            
             
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logout: userActions.logout,
}, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);