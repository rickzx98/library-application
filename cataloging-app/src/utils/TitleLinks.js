import { LibraryLinks } from './LibraryLinks';
import { OptionLinks } from './OptionLinks';
import { getLabel } from './getLabel';

export class TitleLinks extends OptionLinks {
  constructor(omit) {
    super(new LibraryLinks().group('title', 'TL', [
      {
        name: 'indexcard',
        label: getLabel("LABEL_CARD_CATALOG"),
        url: '/indexcard',
        icon: 'address-card',
        group: 'TL',
        show: true
      },
      {
        name: 'currency',
        label: getLabel('LABEL_CURRENCY'),
        icon: 'money',
        url: '/currency',
        group: 'TL',
        show: true
      },
      {
        name: 'vendor',
        label: getLabel('LABEL_VENDOR'),
        icon: 'users',
        url: '/vendor',
        group: 'TL',
        show: true
      },
      {
        name: 'fund',
        label: getLabel('LABEL_FUND'),
        icon: 'university',
        url: '/fund',
        group: 'TL',
        show: true
      },
      {
        name: 'resourcetype',
        icon: 'globe',
        label: getLabel('LABEL_RESOURCE_TYPE'),
        url: '/resourcetype',
        group: 'TL',
        show: true
      },
      {
        name: 'call-number',
        label: getLabel('LABEL_CALL_NUMBER'),
        icon: 'phone',
        root: true,
        group: 'callNumber'
      },
      {
        name: 'prefix',
        label: getLabel('LABEL_PREFIX'),
        url: '/prefix',
        group: 'callNumber'
      },
      {
        name: 'cutter',
        label: getLabel('LABEL_CUTTER'),
        url: '/cutter',
        group: 'callNumber'
      }]).getLinks(), omit);
  }
}
