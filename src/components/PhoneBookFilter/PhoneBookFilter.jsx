import PropTypes from 'prop-types';

import { FilterBox, PhoneBookInput } from './phone-book-filter.styled';

const PhoneBookFilter = ({ handleChange }) => {
  return (
    <FilterBox>
      <label>Find contacts by name</label>
      <PhoneBookInput name="filter" onChange={handleChange} />
    </FilterBox>
  );
};

export default PhoneBookFilter;

PhoneBookFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
