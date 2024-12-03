import Select from 'react-select';

export const customStyles = inputSize => ({
  control: (provided, state) => ({
    ...provided,
    borderRadius: '14px',
    border: 'none',
    outline: 'none',
    padding: '0 14px 0 18px',
    backgroundColor: '#fff',
    width: inputSize.width || '220px',
    height: inputSize.height || '48px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    color: '#121417',
    boxShadow: 'none',
    borderColor: state.isFocused && 'transparent',
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
    padding: '14px 18px',
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    color: state.isSelected ? '#121417' : '#12141733',
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
    marginBottom: '8px',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#121417',
    margin: 0,
    padding: 0,
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: '160px',
    border: 'none',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#12141733',
      borderRadius: '3px',
    },
  }),
});

export const CustomSelect = ({
  options,
  value,
  label,
  inputSize,
  inputId,
  onChange,
}) => {
  return (
    <>
      {label && (
        <div className="mb-2">
          <label className="text-lightGray " htmlFor={inputId}>
            {label}
          </label>
        </div>
      )}
      <Select
        styles={customStyles(inputSize)}
        options={options}
        value={value}
        inputId={inputId}
        onChange={onChange}
      />
    </>
  );
};
