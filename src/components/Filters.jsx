import { useSearchParams } from 'react-router-dom';

import { Select } from './UI/Select';
import { languages, levels, prices } from 'data/selectOptions';

export const Filters = () => {
  const [params, setParams] = useSearchParams();

  const maxPrice = Math.max(...prices.map(price => price.value));

  const language = params.get('language') ?? 'all_languages';
  const level = params.get('level') ?? 'a1_beginner';
  const price = params.get('price') ?? String(maxPrice);

  const handleChange = (e, filterName) => {
    params.set(filterName, e.target.value);
    setParams(params);
  };

  return (
    <ul className="flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-5 mb-5 lg:mb-11">
      <li className="md:w-[220px]">
        <Select
          label="Languages"
          name="Languages"
          options={languages}
          value={language}
          onChange={e => handleChange(e, 'language')}
        />
      </li>
      <li className="md:w-[200px]">
        <Select
          label="Level of knowledge"
          name="Levels"
          options={levels}
          value={level}
          onChange={e => handleChange(e, 'level')}
        />
      </li>
      <li className="md:w-[124px]">
        <Select
          label="Prices"
          name="Prices"
          options={prices}
          value={price}
          onChange={e => handleChange(e, 'price')}
        />
      </li>
    </ul>
  );
};
