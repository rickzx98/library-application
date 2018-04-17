import { PropTypes } from '../imports';

export default types => ({
  ...types,
  actions: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  pageForm: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired
});
