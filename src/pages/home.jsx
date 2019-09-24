import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron } from 'react-bootstrap/';

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1>Здравствуйте, это тестовый сайт.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Здесь несколько страниц для перехода.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Вы можете почитать новости</p>
                            <p>Можете посмотреть профиль, если знаете логин и пароль</p>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container> 
        );
    }
}

export default Home;
