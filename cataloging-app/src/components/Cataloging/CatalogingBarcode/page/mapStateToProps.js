import { BARCODE, PAGE_NAME } from '../constants';
export default ({ fluidForm, routing, ajaxStatus, pageListData }) => ({
  pageForm: fluidForm[PAGE_NAME] || { data: {} },
  pageList: pageListData[BARCODE] || [],
  routing,
  ajax: ajaxStatus
});
