import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

import React from "react";

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);
  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
