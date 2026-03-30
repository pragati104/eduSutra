import Select from "react-select";
const LanguageDropDown = () => {
  const language = [
    { label: "English", value: 1 },
    { label: "Hindi", value: 2 },
  ];
  return (
    <Select
      id="language"
      name="language"
      className={`focus:ring-primary-600 focus:border-primary-600 block w-full md:w-40 py-2 `}
      // onChange={(e) => handleDropDownData(e.label)}
      options={language}
      // value={allData.find((data) => data.label === currentName) || null}
      placeholder={"language"}
    />
  );
};

export default LanguageDropDown;
