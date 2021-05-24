import React,{useState} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'



const ServicesCard = ({images}) =>{
    return(
  <Card style={{boxShadow: 'none'}}>
    <Image src={images} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
)
}

export default ServicesCard;