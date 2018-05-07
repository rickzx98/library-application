import {getLabel, Title} from "../imports";

export default () => [
  {
    field: Title.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Title.TITLE,
    label: getLabel("LABEL_TITLE"),
    data: {require: true},
    group: getLabel("LABEL_TITLE")
  },
  {
    field: Title.SUB_TITLE,
    label: getLabel("LABEL_SUB_TITLE"),
    group: getLabel("LABEL_TITLE")
  },
  {
    field: Title.STATEMENT_OF_RESPONSIBILITY,
    label: getLabel("LABEL_STATEMENT_OF_RESP"),
    group: getLabel("LABEL_TITLE")
  },
  {
    field: Title.EDITION,
    label: getLabel("LABEL_EDITION"),
    group: getLabel("LABEL_TITLE")
  },
  {
    field: Title.SERIES_TITLE,
    label: getLabel("LABEL_SERIES_TITLE"),
    group: getLabel("LABEL_TITLE")
  },
  {
    field: Title.AUTHOR,
    label: getLabel("LABEL_AUTHOR"),
    group: getLabel("LABEL_AUTHOR"),
    public: true,
    data: {
      require: true
    }
  },
  {
    field: Title.ISBN,
    label: getLabel("LABEL_ISBN"),
    group: getLabel("LABEL_ISBN"),
    data: {
      require: true
    }
  },
  {
    field: Title.LCCN,
    label: getLabel("LABEL_LCCN"),
    group: getLabel("LABEL_ISBN")
  },
  {
    field: Title.ISSN,
    label: getLabel("LABEL_ISSN"),
    group: getLabel("LABEL_ISBN")
  },
  {
    field: Title.PLACE_OF_PUBLICATION,
    label: getLabel("LABEL_PLACE_OF_PUBLICATION"),
    group: getLabel("LABEL_PUBLISHER")
  },
  {
    field: Title.PUBLISHER,
    label: getLabel("LABEL_PUBLISHER"),
    group: getLabel("LABEL_PUBLISHER")
  },
  {
    field: Title.PUBLISHED_DATE,
    label: getLabel("LABEL_PUBLISHED_DATE"),
    group: getLabel("LABEL_PUBLISHER")
  },
  {
    field: Title.NUMBER_OF_PAGES,
    label: getLabel("LABEL_NUMBER_OF_PAGES"),
    group: getLabel("LABEL_PUBLISHER")
  },
  {
    field: Title.SUBJECTS,
    label: getLabel("LABEL_SUBJECT"),
    group: getLabel("LABEL_SUBJECT"),
    public: true
  },
  {
    field: Title.SUMMARY,
    label: getLabel("LABEL_SUMMARY"),
    group: getLabel("LABEL_NOTES_OTHER"),
    public: true
  },
  {
    field: Title.GENERAL_NOTE,
    label: getLabel("LABEL_GENERAL_NOTE"),
    group: getLabel("LABEL_NOTES_OTHER"),
    public: true
  },
  {
    field: Title.STUDY_PROGRAM,
    label: getLabel("LABEL_STUDY_PROGRAM"),
    group: getLabel("LABEL_NOTES_OTHER")
  },
  {
    field: Title.READING_LEVEL,
    label: getLabel("LABEL_READING_LEVEL"),
    group: getLabel("LABEL_NOTES_OTHER")
  },
  {
    field: Title.TITLE_POINTS,
    label: getLabel("LABEL_TITLE_POINTS"),
    group: getLabel("LABEL_NOTES_OTHER")
  },
  {
    field: Title.INTERNET_RESOURCE,
    label: getLabel("LABEL_INTERNET_RESOURCE"),
    group: getLabel("LABEL_NOTES_OTHER")
  }, {
    field: Title.RESOURCE_TYPE,
    label: getLabel("LABEL_RESOURCE_TYPE"),
    group: getLabel("LABEL_NOTES_OTHER")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.CALL_NUMBER,
    label: getLabel("LABEL_CALL_NUMBER"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.IMAGE_ID,
    label: getLabel("LABEL_UPLOAD_COVER"),
    group: getLabel("LABEL_COPIES"),
    data: {
      transform: (value) => new Promise((resolve) => {
        if (value.preview) {
          resolve(value.preview);
        } else {
          resolve({
            preview: value
          });
        }
      })
    }
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.LOCATION,
    label: getLabel("LABEL_LOCATION"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.FORMAT,
    label: getLabel("LABEL_FORMAT"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.COST,
    label: getLabel("LABEL_COST"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.CURRENCY,
    label: getLabel("LABEL_CURRENCY"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.VENDOR,
    label: getLabel("LABEL_VENDOR"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.FUND,
    label: getLabel("LABEL_FUND"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.DATE,
    label: getLabel("LABEL_DATE"),
    group: getLabel("LABEL_COPIES"),
    public: true
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.PUBLIC_NOTE,
    label: getLabel("LABEL_PUBLIC_NOTE"),
    group: getLabel("LABEL_COPIES")
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.ACCESSIONS,
    label: getLabel("LABEL_ACCESSIONS"),
    group: getLabel("LABEL_COPIES"),
    public: true
  }, {
    isVisible: (state) => state && state.managed,
    field: Title.COPIES,
    label: getLabel("LABEL_NUMBER_OF_COPIES"),
    group: getLabel("LABEL_COPIES"),
    public: true,
    data: {
      default: 1
    }
  },
  {
    isVisible: (state) => state && state.data && state.data[Title.BARCODE] && state.data[Title.BARCODE].length > 0,
    field: Title.BARCODE,
    label: getLabel("LABEL_BARCODE"),
    group: getLabel("LABEL_BARCODE"),
    public: true,
  }
];
