import {OptionLinks} from './OptionLinks';
import {getLabel} from './getLabel';

export  class LibraryLinks extends OptionLinks {
  constructor(omit) {
    super([
      {
        label: getLabel('LABEL_COLLECTION'),
        name: 'collection',
        icon: 'tags',
        url: '/collection'
      },
      {
        label: getLabel('LABEL_TITLE'),
        name: 'title',
        icon: 'book',
        url: '/title'
      },
      {
        label: getLabel('LABEL_LOAN_TYPE'),
        name: 'loantype',
        icon: 'bolt',
        url: '/loantype'
      },
      {
        label: getLabel('LABEL_BARCODE'),
        name: 'barcode',
        icon: 'barcode',
        url: '/barcode'
      },
      {
        label: getLabel('LABEL_SUBJECTS'),
        name: 'subject',
        icon: 'leanpub',
        url: '/subject'
      }], omit);
  }
}
