import {IndexCard, getLabel} from '../imports';

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
    field: IndexCard.CARD_SIZE,
    label: getLabel("LABEL_CARD_SIZE"),
    data: {
      default: "large"
    }
  },
  {
    field: IndexCard.LAYOUT,
    label: getLabel("LABEL_LAYOUT")
  }
];
