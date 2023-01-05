import "./UserCard.css";
import avatar from "../../assets/img/avatar.png";
import UilMapMarker from "@iconscout/react-unicons/icons/uil-map-marker";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";

const UserCard = ({
  profile: {
    name: { title, first, last },
    location: { country },
    email,
    phone,
    picture: { large },
  },
}) => {
  return (
    <div className="user">
      <div className="img-container">
        <img src={large || avatar} className="app-img" alt="" />
      </div>

      <div className="section-container">
        <div className="row-container">
          <UilUser />
          <b className="text"> Name: </b>
        </div>
        <div className="row-container">
          <p className="text"> {title} </p>
          <p className="text"> {first} </p>
          <b className="text"> {last} </b>
        </div>
      </div>

      <div className="section-container">
        <div className="row-container">
          <UilMapMarker />
          <b className="text"> Country: </b>
        </div>
        <div className="row-container">
          <p className="text"> {country} </p>
        </div>
      </div>

      <div className="section-container">
        <div className="row-container">
          <UilEnvelope />
          <b className="text"> Email: </b>
        </div>
        <div className="row-container">
          <p className="text"> {email} </p>
        </div>
      </div>

      <div className="section-container">
        <div className="row-container">
          <UilPhone />
          <b className="text"> Phone: </b>
        </div>
        <div className="row-container">
          <p className="text"> {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
