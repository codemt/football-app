import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
// import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
import { Players } from '../api/Players';

 class Newplayer extends Component {
    submitPlayer(event){

          //dont allow default
          event.preventDefault();
          Players.insert({

            name:this.refs.name.value,
            team:this.refs.team.value,
            ballManipulation:this.refs.ballManipulation.value,
            kickingAbilities:this.refs.kickingAbilities.value,
            passingAbilities:this.refs.passingAbilities.value,
            dualTackling:this.refs.dualTackling.value,
            fieldCoverage:this.refs.fieldCoverage.value,
            blockingAbilities:this.refs.blockingAbilities.value,
            gameStrategy:this.refs.gameStrategy.value,
            playmakingRisks:this.refs.playmakingRisks.value,
            notes:this.refs.notes.value

          })

            console.log("Success Player submitted");

            this.props.history.push('/');

    }

  render() {
    return (
      <div className="container">
      <div className="row">
          <form className="col s6" onSubmit={this.submitPlayer.bind(this)}>
              <h3> Add a New Player </h3>
                  <div className="row"> 
                      <div className="input-field col3">
                            <input placeholder="Name" ref="name" type="text" className="validate" />
                      </div>
                      <div className="input-field col3">
                            <input placeholder="Team" ref="team" type="text" className="validate" />
                      </div>
                  </div>
                  <div className="row"> 
                      <div className="input-field col3">
                        <h3> Ball Manipulation </h3> 
                            <select className="browser-default" ref="ballManipulation">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> kickingAbilities </h3> 
                            <select className="browser-default" ref="kickingAbilities">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> passingAbilities </h3> 
                            <select className="browser-default" ref="passingAbilities">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> dualTackling </h3> 
                            <select className="browser-default" ref="dualTackling">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> fieldCoverage </h3> 
                            <select className="browser-default" ref="fieldCoverage">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> blockingAbilities </h3> 
                            <select className="browser-default" ref="blockingAbilities">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> gameStrategy </h3> 
                            <select className="browser-default" ref="gameStrategy">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="input-field col3">
                        <h3> playmakingRisks </h3> 
                            <select className="browser-default" ref="playmakingRisks">
                                <option value="0"> 0 - Hasnt Demonstrated Skills </option>
                                <option value="1"> 1 - Needs Improvement </option>
                                <option value="2"> 2 - Skill Acquired </option>
                                <option value="3"> 3 - Great Skills/Could Teach </option>

                            </select>
                      </div>
                      <div className="row"> 
                      <div className="input-field col3">
                           <textarea placeholder="Notes" ref="notes" className="material-textarea" />
                      </div>
                      <div className="input-field col3">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                              Submit 
                            </button>
                      </div>
                  </div>
                      
                  </div>
             
          
          </form>
      </div>
      </div>
    )
  }
}
export default withRouter(Newplayer);