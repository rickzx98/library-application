import { getLabel, requireMessage } from '../../../utils/';

import { Library } from '../../../types/';

export default () => ([
  {
    field: Library.NAME,
    label: getLabel('LABEL_LIBRARY_NAME'),
    data: {
      require: true,
      requireMessage: requireMessage(Library.NAME, getLabel('LABEL_VALIDATION_LIBRARY_NAME_REQUIRED'))
    }
  },
  {
    field: Library.ADDRESS,
    label: getLabel('LABEL_ADDRESS')
  },
  {
    field: Library.EMAIL,
    label: getLabel('LABEL_EMAIL')
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
    field: Library.LIBRARIAN,
    label: getLabel('LABEL_LIBRARIAN'),
    data: {
      require: true,
      requireMessage: requireMessage(Library.LIBRARIAN, getLabel('LABEL_VALIDATION_LIBRARIAN_REQUIRED'))
    }
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
