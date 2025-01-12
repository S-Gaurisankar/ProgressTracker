import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/card";

const SearchResultPage = () => {
  const location = useLocation();
  const searchedData = location.state?.searchedData;
  const query_id = location.state?.query_id;
  console.log(searchedData);
  if (!searchedData) {
    return <h1>No data found</h1>;
  } else {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Search Result</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          <Card task={searchedData} />
        </div>
      </div>
    );
  }
};

export default SearchResultPage;
