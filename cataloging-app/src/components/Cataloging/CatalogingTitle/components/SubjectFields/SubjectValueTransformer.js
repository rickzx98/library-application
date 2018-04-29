import {SubDivision, SubjectEntry, getLabel} from "../../imports";

export const subdivisionValueTransformer = (value) => {
  if (value) {
    switch (value) {
      case SubDivision.GENERAL:
        return getLabel("LABEL_GENERAL");
      case SubDivision.CHRONOLOGICAL:
        return getLabel("LABEL_CHRONOLOGICAL");
      case SubDivision.FORM:
        return getLabel("LABEL_FORM");
      case SubDivision.GEOGRAPHIC:
        return getLabel("LABEL_GEOGRAPHIC");
    }
  }
};

export const entryTypeValueTransformer = (value) => {
  if (value) {
    switch (value) {
      case SubjectEntry.TOPICAL:
        return getLabel("LABEL_TOPICAL");
      case SubjectEntry.CHRONOLOGICAL:
        return getLabel("LABEL_CHRONOLOGICAL");
      case SubjectEntry.CORPORATE:
        return getLabel("LABEL_CORPORATE");
      case SubjectEntry.GEOGRAPHIC:
        return getLabel("LABEL_GEOGRAPHIC");
      case SubjectEntry.MEETING:
        return getLabel("LABEL_MEETING");
      case SubjectEntry.NAMED_EVENT:
        return getLabel("LABEL_NAMED_EVENT");
      case SubjectEntry.PERSONAL:
        return getLabel("LABEL_PERSONAL");
      case SubjectEntry.UNIFORM:
        return getLabel("LABEL_UNIFORM");
    }
  }
};
