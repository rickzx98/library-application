import { PAGE_NAME } from '../constants';
export default ({ fluidForm, routing, ajaxStatus, subjects, }) => ({
  pageForm: fluidForm[PAGE_NAME] || { data: {} },
  subjects,
  routing,
  ajax: ajaxStatus
});
