import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import React from 'react'

const CampsiteCard = (props) => {
  return (
    <Card>
        <CardImg 
            width='100%'
            src={props.campsite.image}
            alt={props.campsite.name}
        /> 
        <CardImgOverlay>
            <CardTitle>{props.campsite.name}</CardTitle>
        </CardImgOverlay>
    </Card>
  )
}

export default CampsiteCard