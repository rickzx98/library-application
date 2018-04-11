import { PropTypes } from '../imports';
export default types => ({
  ...types,
  actions: PropTypes.object.isRequired,
  pageForm: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
});
