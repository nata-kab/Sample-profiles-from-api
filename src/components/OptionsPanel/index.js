import "./OptionPanel.css";
import UilRedo from "@iconscout/react-unicons/icons/uil-redo";
import UilMultiply from "@iconscout/react-unicons/icons/uil-multiply";

const OptionsPanel = ({
  getApiData,
  state,
  changeSearchingSettings,
  reset,
}) => {
  return (
    <div className="option-container">
      <button className="button" onClick={getApiData}>
        <UilRedo size="20" color=" 	#606060" />
      </button>
      <button className="button" onClick={reset}>
        <UilMultiply size="20" color=" 	#606060" />
      </button>
      <div className="select-container">
        <label>
          Gender:
          <select
            className="select"
            value={state.usersGender}
            onChange={(event) => {
              changeSearchingSettings(event, "usersGender");
            }}
          >
            <option value="">Male and Female</option>
            <option value="&gender=male">Male</option>
            <option value="&gender=female">Female</option>
          </select>
        </label>
      </div>
      <div className="select-container">
        <label>
          Profiles number:
          <select
            className="select"
            value={state.usersNumber}
            onChange={(event) => {
              changeSearchingSettings(event, "usersNumber");
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
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
      <div className="select-container">
        <label>
          Nationality:
          <select
            className="select"
            value={state.usersNationality}
            onChange={(event) => {
              changeSearchingSettings(event, "usersNationality");
            }}
          >
            <option value="">all</option>
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
  );
};
export default OptionsPanel;
