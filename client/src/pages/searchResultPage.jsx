import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/card";

const SearchResultPage = () => {
  const location = useLocation();
  const searchedData = location.state?.searchedData;
  const query_id = location.state?.query_id;
  // console.log(typeof data);
  if (!searchedData) {
    return <h1>No data found</h1>;
  } else {
    return (
      <div>
        <h1 style={{textAlign: "center", marginBottom: "2rem"}}>Search Result</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          <Card task={Array.isArray(searchedData) ? searchedData[0] : searchedData} />
        </div>
      </div>
    );
  }
};

export default SearchResultPage;
