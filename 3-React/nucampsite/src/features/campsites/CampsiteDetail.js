import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

import React from "react";

export const CampsiteDetail = ({ campsite }) => {
  const { image, name, description } = campsite;
  return (
    <Col md="5" className="m-2">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;
