export const CallNumber = {
  PREFIX: 'prefix',
  MAIN: 'main',
  CUTTER: 'cutter',
  SUFFIX: 'suffix'
};
export const SubDivision = {
  FORM: 'form',
  GENERAL: 'general',
  CHRONOLOGICAL: 'chronological',
  GEOGRAPHIC: 'geographic'
};

export const SubjectEntry = {
  PERSONAL: 'personal',
  CORPORATE: 'corporate',
  MEETING: 'meeting',
  UNIFORM: 'uniform',
  NAMED_EVENT: 'namedEvent',
  CHRONOLOGICAL: 'chronological',
  TOPICAL: 'topical',
  GEOGRAPHIC: 'geographic'
};

export const ResourceType = {
  ID: '_id',
  VALUE: 'value'
};

export const Subject = {
  ID: '_id',
  PARENT: 'parent',
  NAME: 'name',
  ROOT: 'root'
};
export const Parameter = {
  ID: '_id',
  TYPE: 'type'
};
export const GeneratedBarcode = {
  ID: '_id',
  TYPE: 'type',
  NUMBER: 'barcodeNumber',
  RELATION_ID: 'relationId',
  DESCRIPTION: 'description',
  PRINTED: 'printed',
  PRINTED_DATA: 'printedDate',
  PRINTED_BY: 'printedBy'
};
export const Barcode = {
  ID: '_id',
  ITEM_LEFT_ALPHA_SYMBOL: 'itemLeftAlphaSymbol',
  ITEM_RIGHT_ALPHA_SYMBOL: 'itemRightAlphaSymbol',
  ITEM_BARCODE_LENGTH: 'itemBarcodeLength',
  PATRON_LEFT_ALPHA_SYMBOL: 'patronLeftAlphaSymbol',
  PATRON_RIGHT_ALPHA_SYMBOL: 'patronRightAlphaSymbol',
  PATRON_BARCODE_LENGTH: 'patronBarcodeLength',
  PATRON_BARCODE_TYPE: 'patronBarcodeType',
  new: function (barcode, id) {
    const newBarcode = {...barcode};
    newBarcode[this.ID] = id;
    newBarcode[Parameter.TYPE] = 'barcode';
    return newBarcode;
  }
};

export const Cutter = {
  ID: '_id',
  VALUE: 'value'
};

export const Suffix = {
  ID: '_id',
  VALUE: 'value'
};

export const Prefix = {
  ID: '_id',
  VALUE: 'value'
};

export const Fund = {
  ID: '_id',
  NAME: 'name',
  new: function (name) {
    const data = {};
    data[this.NAME] = name;
    return data;
  }
};
export const Vendor = {
  ID: '_id',
  NAME: 'name',
  new: function (name) {
    const vendor = {};
    vendor[this.NAME] = name;
    return vendor;
  }
};
export const Currency = {
  ID: '_id',
  NOTE: 'note',
  PREFIX: 'prefix',
  SYMBOL: 'symbol',
  new: function (note, prefix, symbol) {
    const newCurrency = {};
    newCurrency[this.NOTE] = note;
    newCurrency[this.PREFIX] = prefix;
    newCurrency[this.SYMBOL] = symbol;
    return newCurrency;
  }
};

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
  FORMAT: 'format',
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
  RATING: 'rating',
  ISSN: 'issn',
  PLACE_OF_PUBLICATION: 'placeOfPublication',
  PUBLIC_NOTE: 'publicNote',
  COPIES: 'copies',
  ACCESSIONS: 'accessions'
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
  library: '/library',
  newLibrary: '/library/new',
  viewLibrary: '/library/view/',
  librarian: '/librarian',
  newLibrarian: '/librarian/new',
  viewLibrarian: '/librarian/view/',
  user: '/user',
  newUser: '/user/new',
  viewUser: '/user/view/',
  title: '/title',
  newTitle: '/title/new',
  viewTitle: '/title/view/',
  currency: '/currency',
  newCurrency: '/currency/new',
  viewCurrency: '/currency/view/',
  vendor: '/vendor',
  newVendor: '/vendor/new',
  viewVendor: '/vendor/view/',
  fund: '/fund',
  newFund: '/fund/new',
  viewFund: '/fund/view/',
  barcode: '/barcode',
  newBarcode: '/barcode/new',
  viewBarcode: '/barcode/view/',
  prefix: '/prefix',
  newPrefix: '/prefix/new',
  viewPrefix: '/prefix/view/',
  suffix: '/suffix',
  newSuffix: '/suffix/new',
  viewSuffix: '/suffix/view/',
  cutter: '/cutter',
  newCutter: '/cutter/new',
  viewCutter: '/cutter/view/',
  loanType: '/loantype',
  newLoanType: '/loantype/new',
  viewLoanType: '/loantype/view/',
  subject: '/subject',
  newSubject: '/subject/new',
  viewSubject: '/subject/view/',
  resourceType: '/resourcetype',
  newResourceType: '/resourceType/new',
  viewResourceType: '/resourceType/view/'
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

