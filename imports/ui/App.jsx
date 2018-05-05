import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import TeamList from './Team-list';
import Player from './Player';
import TeamStats from './Team-stats';
import  { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//database
import { Players } from '../api/Players';

export  class App extends Component {


  constructor(props){

        super(props);
        //setting up the state.
        this.state = {

              players : []

        };

  }

    // getPlayers(){
    

    //       return []

    // }

      renderPlayers(){

          return this.props.players.map((player) => (

              <TeamList key={player._id} player={player} />

          ));

      }

  render() {
    return (
    
          <MuiThemeProvider>
                <AppBar
                    title="Football Application"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    showMenuIconButton={false}
                />
              <div className="container">
              <div className="row">
                    <div className="col s12 m7"> <Player />  </div>
                    <div className="col s12 m5">
                      <Divider />
                      <h1> Team List </h1> <Link to="/newplayer" className="waves-effect waves-light btn"> Add Player </Link>   
                        <List>
                            {this.renderPlayers()}
                        </List>
                      </div>
                    <div className="col s12 m5"> <TeamStats />  </div>
             </div>
             </div>
         </MuiThemeProvider>

     
    )
  }
}
App.propTypes = {


            players : PropTypes.array.isRequired,

};
export default createContainer(() => {

        Meteor.subscribe('players');

        return {

                players : Players.find({},{sort : {name:1}}).fetch(),
        };

},App);
