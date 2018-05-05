import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import App from '../imports/ui/App';
import Lost from '../imports/ui/Lost';
import Newplayer from '../imports/ui/Newplayer';
injectTapEventPlugin();

Meteor.startup(() => {
        render((

                <Router>
                        <Switch>
                                <Route exact path="/" component={App} />
                                <Route exact path="/newplayer" component={Newplayer} />
                                <Route component={Lost} />
                        </Switch>
                </Router>                                                



        ),document.getElementById('render-target'));



})