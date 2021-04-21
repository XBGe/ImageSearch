import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    //using axios get url router
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    //one option get response from asynchronous request
    /*.then(response =>{
      console.log(response.data.result);
    });*/
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Image Search App </h1>
        <SearchBar runUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
