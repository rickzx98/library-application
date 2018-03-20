import { Library } from '../../../types/';
import { getLabel } from '../../../utils/';
export default () => ([
  {
    field: Library.NAME,
    label: getLabel('LABEL_LIBRARY_NAME')
  },
  {
    field: Library.ADDRESS,
    label: getLabel('LABEL_ADDRESS')
  },
  {
    field: Library.CITY,
    label: getLabel('LABEL_CITY')
  },
  {
    field: Library.ZIPCODE,
    label: getLabel('LABEL_ZIPCODE')
  },
  {
    field: Library.PHONE,
    label: getLabel('LABEL_PHONE')
  },
  {
    field: Library.FAX,
    label: getLabel('LABEL_FAX')
  },
  {
    field: Library.MODEM,
    label: getLabel('LABEL_MODEM')
  },
  {
    field: Library.EMAIL,
    label: getLabel('LABEL_EMAIL')
  },
  {
    field: Library.LIBRARIAN,
    label: getLabel('LABEL_LIBRARIAN')
  },
  {
    field: Library.LIBRARIAN_TITLE,
    label: getLabel('LABEL_LIBRARIAN_TITLE')
  },
  {
    field: Library.CONTACT_PERSON,
    label: getLabel('LABEL_CONTACT_PERSON')
  },
  {
    field: Library.ALERT_INFO,
    label: getLabel('LABEL_ALERT_INFO')
  },
  {
    field: Library.DISCUSSION,
    label: getLabel('LABEL_DISCUSSION')
  }
]);
