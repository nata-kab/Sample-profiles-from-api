import React, { useState, useEffect, useReducer } from "react";
import "./Users.css";
import avatar from "../../assets/img/avatar.png";
import * as Unicons from "@iconscout/react-unicons";
import UilRedo from "@iconscout/react-unicons/icons/uil-redo";
import UilMultiply from "@iconscout/react-unicons/icons/uil-multiply";

const initialState = {
  usersNumber: "30",
  usersGender: "",
  usersNationality: "",
};

function usersInfoReducer(state, action) {
  switch (action.type) {
    case "updateSearchingSettings":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "initial":
      return initialState;
    default:
      throw new Error();
  }
}

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
    <div>
      <div className="OptionContainer">
        <button onClick={getApiData}>
          <UilRedo size="25" color="green" />
        </button>
        <button onClick={reset}>
          <UilMultiply size="25" color="black" />
        </button>
        <div>
          <select
            value={state.usersGender}
            onChange={(event) => {
              changeSearchingSettings(event, "usersGender");
            }}
          >
            <option value="">Male and Female</option>
            <option value="&gender=male">Male</option>
            <option value="&gender=female">Female</option>
          </select>
        </div>
        <div>
          <label>
            Number of users profiles:
            <select
              value={state.usersNumber}
              onChange={(event) => {
                changeSearchingSettings(event, "usersNumber");
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">20</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Select nationality:
            <select
              value={state.usersNationality}
              onChange={(event) => {
                changeSearchingSettings(event, "usersNationality");
              }}
            >
              <option value=""></option>
              <option value="&nat=us">US</option>
              <option value="&nat=ua">UA</option>
              <option value="&nat=tr">TR</option>
              <option value="&nat=no">NO</option>
              <option value="&nat=gb">GB</option>
              <option value="&nat=fr">FR</option>
              <option value="&nat=es">ES</option>
              <option value="&nat=br">BR</option>
              <option value="&nat=au">AU</option>
            </select>
          </label>
        </div>
      </div>

      <div className="Container">
        {profilesApiResult.map((item, i) => {
          return (
            <div className="User" key={i + item.name.last + item.id.value}>
              <div className="Img-container">
                <img
                  src={item.picture.large || avatar}
                  className="App-img"
                  alt=""
                />
              </div>
              <div className="Section-container">
                <div className="Row-container">
                  <Unicons.UilUser />
                  <b className="text"> Name: </b>
                </div>
                <div className="Row-container">
                  <p className="text"> {item.name.title} </p>
                  <p className="text"> {item.name.first} </p>
                  <b className="text"> {item.name.last} </b>
                </div>
              </div>
              <div className="Section-container">
                <div className="Row-container">
                  <Unicons.UilMapMarker />
                  <b className="text"> Country: </b>
                </div>
                <div className="Row-container">
                  <p className="text"> {item.location.country} </p>
                </div>
              </div>
              <div className="Section-container">
                <div className="Row-container">
                  <Unicons.UilEnvelope />
                  <b className="text"> Email: </b>
                </div>
                <div className="Row-container">
                  <p className="text"> {item.email}</p>
                </div>
              </div>
              <div className="Section-container">
                <div className="Row-container">
                  <Unicons.UilPhone />
                  <b className="text"> Phone: </b>
                </div>
                <div className="Row-container">
                  <p className="text"> {item.phone}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Users;
