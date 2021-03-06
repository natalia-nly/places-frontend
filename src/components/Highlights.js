import React, { Component } from "react";
import axios from "axios";

export class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/places/highlights").then((res) => {
      this.setState({ places: res.data });
      console.log(res.data);
    });
  }
  render() {
    const places = this.state.places
      .filter((place) => place.highlights)
      .map((place) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={place._id}>
            <img
              className="card-img-top"
              src={place.imageUrl}
              alt={place.name}
            />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        );
        //   return (
        //     <div key={place._id}>
        //       <h1>{place.name}</h1>
        //     </div>
        //   );
      });
    return <div>{places}</div>;
  }
}

export default Highlights;
