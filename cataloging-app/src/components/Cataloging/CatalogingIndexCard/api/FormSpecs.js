import { IndexCard, getLabel } from '../imports';

export default () => [
  {
    field: IndexCard.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: IndexCard.TEMPLATE,
    label: getLabel("LABEL_TEMPLATE")
  },
  {
    field: IndexCard.LAYOUT,
    label: getLabel("LABEL_LAYOUT")
  }
];
