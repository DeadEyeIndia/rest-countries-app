import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Filters from "../Filters/Filters";
import Main from "../Main/Main";
import { useGetCountriesListByRegionQuery } from "../../services/countriesApi";
import Loader from "../Loader";

const Homepage = ({ theme }) => {
  const [countries, setCountries] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const { filterChoose } = useSelector((state) => state.filter);

  const { data: countriesList, isLoading } = useGetCountriesListByRegionQuery(
    filterChoose || "europe"
  );

  useEffect(() => {
    const searchedData = countriesList?.filter((d) =>
      d?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCountries(searchedData);
  }, [countriesList, searchTerm]);

  return (
    <>
      <Filters
        theme={theme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {isLoading ? <Loader /> : <Main countries={countries} />}
    </>
  );
};

export default Homepage;
