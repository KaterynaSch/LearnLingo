import { useSearchParams } from 'react-router-dom';

import { languages, levels, prices } from 'data/selectOptions';
import { CustomSelect } from './UI/Select';

export const Filters = () => {
  const [params, setParams] = useSearchParams();

  const language = params.get('language') || 'all_languages';
  const level = params.get('level') || 'a1_beginner';
  const price =
    parseInt(params.get('price'), 10) || Math.max(...prices.map(p => p.value));

  const handleChange = (selectedOption, filterName) => {
    const newParams = new URLSearchParams(params);
    newParams.set(filterName, selectedOption.value);
    setParams(newParams);
  };

  return (
    <ul className="flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-5 mb-5 lg:mb-11">
      <li>
        <CustomSelect
          label="Languages"
          options={languages}
          inputSize={{ width: '220px' }}
          inputId="select-language"
          value={languages.find(option => option.value === language)}
          onChange={selectedOption => handleChange(selectedOption, 'language')}
        />
      </li>
      <li>
        <CustomSelect
          label="Level of knowledge"
          options={levels}
          inputSize={{ width: '198px' }}
          inputId="select-level"
          value={levels.find(option => option.value === level)}
          onChange={selectedOption => handleChange(selectedOption, 'level')}
        />
      </li>
      <li>
        <CustomSelect
          label="Prices"
          options={prices}
          inputSize={{ width: '124px' }}
          inputId="select-price"
          value={prices.find(option => option.value === price)}
          onChange={selectedOption => handleChange(selectedOption, 'price')}
        />
      </li>
    </ul>
  );
};
