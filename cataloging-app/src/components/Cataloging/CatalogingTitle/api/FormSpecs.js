import { Title, getLabel } from '../imports';

export default () => ([{
  field: Title.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Title.TITLE, label: getLabel('LABEL_TITLE'),
  data: { require: true },
  group: getLabel('LABEL_TITLE')
}, {
  field: Title.SUB_TITLE, label: getLabel('LABEL_SUB_TITLE'),
  group: getLabel('LABEL_TITLE')
}, {
  field: Title.STATEMENT_OF_RESPONSIBILITY, label: getLabel('LABEL_STATEMENT_OF_RESP'),
  group: getLabel('LABEL_TITLE')
}, {
  field: Title.EDITION, label: getLabel('LABEL_EDITION'),
  group: getLabel('LABEL_TITLE')
}, {
  field: Title.SERIES_TITLE, label: getLabel('LABEL_SERIES_TITLE'),
  group: getLabel('LABEL_TITLE')
}, {
  field: Title.AUTHOR, label: getLabel('LABEL_AUTHOR'),
  group: getLabel('LABEL_AUTHOR'),
  data: {
    require: true
  }
}]);
