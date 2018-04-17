import {TitleLinks, OptionLinks } from './imports';
export class CallNumberLinks extends OptionLinks {
  constructor(omit) {
    super(new TitleLinks().getLinks().map(link => {
      if (link.group === 'TL') {
        link.show = false;
      } else if (link.group === 'callNumber') {
        link.show = true;
      }
      return link;
    }), omit);
  }
}
