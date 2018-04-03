
export const UserGroup = {
  ADMIN: 'admin',
  PATRON: 'patron',
  LIBRARIAN: 'librarian'
};

export const User = {
  ID: '_id',
  USERNAME: 'username',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  EMAIL: 'email',
  FULL_NAME: 'fullName',
  USER_GROUP: 'userGroup'
};
export const LoanType = {
  ID: '_id',
  NAME: 'name',
  LOAN_PERIOD: 'loadPeriod',
  GRACE_PERIOD: 'gracePeriod',
  FINE_CYCLE: 'fineCycle',
  MAX_LOAN_AMOUNT: 'maxLoanAmount',
  FINE_AMOUNT: 'fineAmount',
  FEE_AMOUNT: 'feeAmount',
  RENEWAL: 'renewal',
  CAN_LEAVE: 'canLeave',
  PER_HOUR: 'perHour'
};
export const Title = {
  ID: '_id',
  SOURCE_ID: 'sourceId',
  TITLE: 'title',
  AUTHOR: 'author',
  SUB_TITLE: 'subTitle',
  IMAGE_URL: 'imageURL',
  IMAGE_ID: 'imageId',
  ISBN: 'isbn',
  ISBN13: 'isbn13',
  ISBN10: 'isbn10',
  PUBLISHER: 'publisher',
  SERIES_TITLE: 'seriesTitle',
  EDITION: 'edition',
  LCCN: 'lccn',
  SUBJECTS: 'subjects',
  STATEMENT_OF_RESPONSIBILITY: 'statementOfResponsibility',
  NUMBER_OF_PAGES: 'numberOfPages',
  PUBLISHED_DATE: 'publishedDate',
  SUMMARY: 'summary',
  STUDY_PROGRAM: 'studyProgram',
  TITLE_POINTS: 'titlePoints',
  INTERNET_RESOURCE: 'internetResource',
  GENERAL_NOTE: 'generalNote',
  READING_LEVEL: 'readingLevel',
  RESOURCE_TYPE: 'resourceType',
  BARCODE: 'barcode',
  LOCATION: 'location',
  VENDOR: 'vendor',
  DATE: 'date',
  CALL_NUMBER: 'callNumber',
  CURRENCY: 'currency',
  FUND: 'fund',
  COST: 'cost',
  LIBRARY: 'library',
  RATING: 'rating'
};
export const Librarian = {
  ID: '_id',
  NAME: 'name',
  EMAIL: 'email',
  TITLE: 'title',
  ACTIVE: 'active'
};

export const Library = {
  ID: '_id',
  NAME: 'name',
  ADDRESS: 'address',
  CITY: 'city',
  ZIPCODE: 'zipcode',
  PHONE: 'phone',
  FAX: 'fax',
  MODEM: 'modem',
  EMAIL: 'email',
  LIBRARIAN: 'librarian',
  LIBRARIAN_TITLE: 'librarianTitle',
  CONTACT_PERSON: 'contactPerson',
  ALERT_INFO: 'alertInfo',
  DISCUSSION: 'discussion'
};
export const MPUser = {
  USER_ID: 'userId',
  USERNAME: 'username',
  DEPARTMENT_ID: 'departmentId'
};

export const Pages = {
  home: '/',
  collection: '/collection',
  newCollection: '/collection/new',
  viewCollection: '/collection/view/',
  titles: '/titles',
  library: '/library',
  newLibrary: '/library/new',
  viewLibrary: '/library/view/',
  librarian: '/librarian',
  newLibrarian: '/librarian/new',
  viewLibrarian: '/librarian/view/',
  user: '/user',
  newUser: '/user/new',
  viewUser: '/user/view/'
};

export const Record = {
  BLOCK_NO: 'blockNo',
  OWNER: 'owner',
  COMPANY: 'company',
  RECORD_TYPE: 'recordType',
  ITEM_TYPE: 'itemType',
  DESCRIPTION: 'description',
  ITEM: 'item',
  DATE_CREATED: 'dateCreated'
};


export const Collection = {
  ID: '_id',
  NAME: 'name'
};

