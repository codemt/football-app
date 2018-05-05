import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {blue200, indigo900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
      margin: 12

  },
};

export default class Player extends Component {
  render() {
    return (
    
            <Card>
           
            <CardMedia
              overlay={<CardTitle title="Emaneul Grey" subtitle="Offense:12 - Defense : 8" />}
            >
              <img src="player1.jpg" width="400px" height="400px"/>
            </CardMedia>
         
            <CardText>
              <div style={styles.wrapper}>
                  <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
                   <Chip style={styles.chip} >
                   Text Chip
                   </Chip>
              </div>

            </CardText>
            <CardActions>
            
            </CardActions>
          </Card>

     
    )
  }
}
