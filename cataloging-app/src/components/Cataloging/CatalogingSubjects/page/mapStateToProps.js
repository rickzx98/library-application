import { PAGE_NAME } from '../constants';
export default ({ fluidForm, routing, ajaxStatus, subjects, }) => ({
  pageForm: fluidForm[PAGE_NAME] || { data: {} },
  subjects: subjects.data || [],
  content: subjects.content || {},
  routing,
  ajax: ajaxStatus
});
