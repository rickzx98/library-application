import { PAGE_NAME } from '../constants';
export default ({ fluidForm, routing, ajaxStatus }) => ({
  pageForm: fluidForm[PAGE_NAME] || { data: {} },
  routing,
  ajax: ajaxStatus
});
