import React, { useState, useEffect, useReducer } from "react";
import "./Page.css";
import Footer from "../Footer";
import UserCard from "../UserCard";
import OptionsPanel from "../OptionsPanel";
import usersInfoReducer, { initialState } from "../../reducer/usersInfoReducer";

const Users = () => {
  const [state, dispatch] = useReducer(usersInfoReducer, initialState);
  const [profilesApiResult, setProfilesApiResult] = useState([]);

  const getApiData = async () => {
    try {
      const apiResponse = await fetch(
        "https://randomuser.me/api/?results=" +
          state.usersNumber +
          state.usersGender +
          state.usersNationality
      );

      const apiResponseJSON = await apiResponse.json();
      const profiles = apiResponseJSON.results;
      setProfilesApiResult([...profiles]);
    } catch (e) {
      console.log("that failed", e);
    }
  };

  useEffect(() => {
    getApiData();
  }, [state]);

  const reset = () => {
    dispatch({ type: "initial" });
  };

  const changeSearchingSettings = (event, eventname) => {
    dispatch({
      type: "updateSearchingSettings",
      payload: { key: eventname, value: event.target.value },
    });
  };

  return (
    <div className="app-container">
      <OptionsPanel
        getApiData={getApiData}
        state={state}
        reset={reset}
        changeSearchingSettings={changeSearchingSettings}
      />

      <div className="container">
        {profilesApiResult.map((item, index) => {
          return (
            <UserCard
              key={index + item.name.last + item.id.value}
              profile={item}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};
export default Users;
