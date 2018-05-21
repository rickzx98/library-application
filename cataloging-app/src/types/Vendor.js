
export const Vendor = {
    ID: "_id",
    NAME: "name",
    new: function (name) {
      const vendor = {};
      vendor[this.NAME] = name;
      return vendor;
    }
  };