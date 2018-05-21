import { Title } from "./Title";

export const CollectionTitle = {
    ID: "_id",
    COLLECTION: "collection",
    TITLE: "title",
    AUTHOR: "author",
    ITEM_TITLE: "itemTitle",
    ISBN: "isbn",
    new: function (collection, title) {
        const newCollection = {};
        newCollection[this.COLLECTION] = collection;
        newCollection[this.TITLE] = title[Title.ID];
        newCollection[this.AUTHOR] = title[Title.AUTHOR];
        newCollection[this.ITEM_TITLE] = title[Title.TITLE];
        newCollection[this.ISBN] = title[Title.ISBN];
        return newCollection;
    }
};