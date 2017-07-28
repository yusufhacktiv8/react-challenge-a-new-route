import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const SWAPI_URL = 'https://swapi.co/api/people';
class PeopleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get(SWAPI_URL)
    .then((response) => {
      this.setState({
        people: response.data.results,
      });
    });
  }

  render() {
    return (
      <div className="PeopleList">
        <ol>
          {
            this.state.people.map((person) => {
              const url = person.url;
              const personId = url.match(/\d+/)[0];
              return (
                <li key={person.name}><Link to={`/people/${personId}`}>{person.name}</Link></li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

export default PeopleList;
