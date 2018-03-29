import PropTypes from 'prop-types';
export default types => ({
  ...types,
  actions: PropTypes.object.isRequired,
  pageList: PropTypes.array.isRequired,
  pageForm: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
});
