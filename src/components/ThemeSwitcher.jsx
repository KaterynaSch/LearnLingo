import Select from 'react-select';

import { useTheme } from 'context/ThemeContext';
import { themeOptions } from 'data/selectOptions';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '14px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#F8F8F8',
    width: '70px',
    height: '24px',
    boxShadow: 'none',
    borderColor: state.isFocused ? 'transparent' : '#8a8a89',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#121417',
    ':hover': {
      color: '#121417',
    },
  }),
  menu: provided => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    borderRadius: '12px',
    padding: '8px',
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '14px',
    backgroundColor: state.isSelected ? '#F8F8F8' : '#fff',
    padding: 0,
    margin: 0,
    marginBottom: '4px',
  }),
  singleValue: provided => ({
    ...provided,
    borderColor: '#121417',
    margin: 0,
    padding: 0,
  }),
  menuList: provided => ({
    ...provided,
    border: 'none',
  }),
};

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const optionLabel = ({ color }) => (
    <div className="flex items-center gap-2">
      <span
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: color,
        }}
      ></span>
    </div>
  );

  const handleChange = selectedOption => {
    toggleTheme(selectedOption.value);
  };

  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <div className="hidden md:block">
        <label className="text-lightGray ">Theme</label>
      </div>
      <Select
        options={themeOptions}
        styles={customStyles}
        value={themeOptions.find(option => option.value === theme)}
        onChange={handleChange}
        formatOptionLabel={optionLabel}
        isSearchable={false}
      />
    </div>
  );
};
