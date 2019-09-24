import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getError } from '../reducers/index';
import { userActions } from '../actions/user';

import { Container, Row, Col, Form, Button } from 'react-bootstrap/';

class Login extends Component { 

    state = {
        username: '',
        password: '',
        submitted: false
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();        
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { login, history } = this.props;
        if (username && password) {
            login(username, password);
            history.push( '/profile');
        }
    }
    
    render() {
        const { history, error } = this.props;
        let user = null;
        if (localStorage.user) {user= JSON.parse(localStorage.user);}
        const { username, password, submitted } = this.state;
        if (!user || !user.isLogin) {
            return (
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-4">
                            <Form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Логин</label>
                                    <input className="form-control" type="text" id="exampleInputEmail1" placeholder="Введите Ваш логин" name="username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="text-danger">Username is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Пароль</label>
                                    <input className="form-control" type="password" id="exampleInputPassword1" placeholder="Введите Ваш пароль" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="text-danger">Password is required</div>
                                    }
                                </div>
                                <Button primary="true" type="submit">Войти</Button>
                                    {error &&
                                        <div className="text-danger">Логин и пароль не подходят</div>
                                    }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            history.push( '/profile');
        }        
        return null;
            
             
    }
}
const mapStateToProps = state => ({
    error: getError(state),
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
    login: userActions.login,
}, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
