import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
{/* Card Component - Template A 
Card with Image, Title, Subtitle, Text, and Button */}
const CardA = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={props.img_src} alt={props.img_alt} />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
            <CardText>{props.text}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default CardA;