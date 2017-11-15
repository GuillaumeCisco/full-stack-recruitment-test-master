import React, {Component} from 'react';
import {stringify} from 'query-string';
import './App.scss';

import TopNav from './components/topnav';
import Header from './components/header';
import Controls from './components/controls';
import Results from './components/results';

// define global for simple example (mock user input)
const fromPlace = 'EDI',
    toPlace = 'LON',
    adults = 2,
    cabinClass = 'Economy';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {results: []};
    }

    // put this in componentDidMount for the test, assuming this is the home page
    componentDidMount() {
        console.log('fetching results from server...');
        const url = 'http://localhost:4000/api/search',
            data = {
                fromPlace: 'EDI', // code for Edinburgh
                toPlace: 'LHR', // code for London
                fromDate: '2017-11-20', // next monday, arbitrary...
                toDate: '2017-11-21', // next monday + 1 day
                class: cabinClass, // arbitrary
                adults,
            };
        fetch(`${url}?${stringify(data)}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                // put results in state, no need redux for this simple example, but will be advised for larger app,
                // this create a render
                this.setState({results});
            })
            .catch(console.error);
    }

    render() {
        return (
            <div className="App">
                <TopNav/>
                <Header fromPlace={fromPlace} toPlace={toPlace} adults={adults} cabinClass={cabinClass}/>
                <Controls/>
                <Results results={this.state.results}/>
            </div>
        );
    }
}

export default App;
