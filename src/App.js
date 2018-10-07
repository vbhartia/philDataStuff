import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
    Main, Contact, Data, Us,
    INEC, Party, PVT, Technology, Turnout,
    NoMatch} from './pages';
import {NavBar} from './components/NavBar';
import Footer from './components/Footer';

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about-data" component={Data} />
            <Route exact path="/about-us" component={Us} />
            <Route exact path="/story-inec" component={INEC} />
            <Route exact path="/story-party" component={Party} />
            <Route exact path="/story-pvt" component={PVT} />
            <Route exact path="/story-technology" component={Technology} />
            <Route exact path="/story-turnout" component={Turnout} />
            <Route component={NoMatch} />
        </Switch>
    </Router>

export default App;