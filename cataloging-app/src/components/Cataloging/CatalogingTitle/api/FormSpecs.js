import { getLabel, Title } from "../imports";

export default () => [
  {
    field: Title.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Title.TITLE,
    label: getLabel("LABEL_TITLE"),
    data: { require: true },
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
  }
];
