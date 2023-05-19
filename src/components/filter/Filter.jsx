// import PropTypes from 'prop-types';

import { setFilter } from 'redux/filtersSlice';
import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    const normalizeFilter = e.target.value;

    dispatch(setFilter(normalizeFilter));
  };

  return (
    <Label htmlFor="name">
      Find contacts by name
      <Input type="text" name="name" onInput={handleInput} />
    </Label>
  );
};

export default Filter;

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
