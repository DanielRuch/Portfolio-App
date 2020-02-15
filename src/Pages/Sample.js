import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap';

const Sample = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
            <Row>
                <Col>
                    <h1>SAMPLE MCSAMPLEFACE</h1>
                    <p>
                        <Button
                            tag="a"
                            color="success"
                            size="large"
                            href="http://reactstrap.github.io"
                            target="_blank"
                        >
                            THE BEST SAMPLE IN THE WORLD
                        </Button>
                    </p>
                </Col>
            </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Sample;