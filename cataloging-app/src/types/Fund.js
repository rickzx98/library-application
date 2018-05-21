export const Fund = {
    ID: "_id",
    NAME: "name",
    new: function (name) {
        const data = {};
        data[this.NAME] = name;
        return data;
    }
};