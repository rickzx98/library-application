export class OptionLinks {
  constructor(links, omit) {
    this.omit = omit instanceof Array ? omit : [omit];
    this.links = links;
  }

  group(name, groupName, children) {
    let index = 0;
    this.links.forEach((link, key) => {
      if (link.name === name) {
        this.links[key] = {...link, group: groupName, root: true, show: true};
        index = key;
      }
    });
    const newLinks = [...this.links];
    children.forEach((child) => {
      newLinks.splice(++index, 0, child);
    });
    this.links = newLinks;
    return this;
  }

  getLinks() {
    return this.links.map(link => {
      if (this.omit && this.omit.indexOf(link.name) > -1) {
        return {...link, active: true};
      }
      return link;
    });
  }
}
