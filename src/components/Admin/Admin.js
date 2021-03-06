import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        places: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/places`).then((res) => {
      const places = res.data;
      this.setState({ places: places });
    });
  }
  render() {
    const placeEdit = this.state.places.map((place) => {
      return (
        <div>
          <h4>{place.name}</h4>
          <Link to={"/edit/" + place._id}>Edit</Link>
          <button>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <h2>Manage your places</h2>
        {placeEdit}
      </div>
    );
  }
}
export default Admin;
