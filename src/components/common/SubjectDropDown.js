import Select from "react-select";
const SubjectDropDown = ({
  allData,
  currentName,
  name,
  handleDropDownData,
}) => {
  

  return (
    <Select
      id="dropdown"
      name="dropdown"
      className={`focus:ring-primary-600 focus:border-primary-600 block w-full md:w-40 py-2 `}
      onChange={(e) => handleDropDownData(e.label, name)}
      options={allData}
      value={allData.find((data) => data.label === currentName) || null}
      placeholder={name}
    />
  );
};

export default SubjectDropDown;
