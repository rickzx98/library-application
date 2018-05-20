import { COMMAND_ADD_TITLE, COMMAND_GET_COLLECTION_TITLES, COMMAND_REMOVE_COLLECITON_TITLE } from "../constants";

import addCollectionTitle from "./addCollectionTitle";
import getCollectionTitles from "./getCollectionTitles";
import removeCollectionTitle from "./removeCollectionTitle";

export default (command, instance) => {
    switch (command) {
        case COMMAND_ADD_TITLE:
            return addCollectionTitle(instance);
        case COMMAND_REMOVE_COLLECITON_TITLE:
            return removeCollectionTitle(instance);
        case COMMAND_GET_COLLECTION_TITLES:
            return getCollectionTitles(instance);
    }
}; 