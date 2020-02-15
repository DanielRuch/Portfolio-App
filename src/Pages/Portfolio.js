import CardA from "../Resources/components"
import React from 'react';
import {Row, Col, Container} from 'reactstrap'
import imgPandas from '../Resources/Images/pandas-project-fantasy.png';

const Portfolio = (props) => {
    return (
        <Row> 
            <Col md="4">
                <Container>
                    <CardA className="mx-auto d-flex h-100" title="VBA Project" subtitle="Test 1" img_alt="image" img_src={imgPandas}/>
                </Container>
            </Col>
            <Col md="4">
                <Container>
                    <CardA className="mx-auto d-flex h-100" title="Python Project" subtitle="Test 2" img_alt="image" img_src={imgPandas}/>
                </Container>
            </Col>
        </Row>
        
    )
    }

export default Portfolio;