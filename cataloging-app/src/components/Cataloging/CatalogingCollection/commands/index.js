import { COMMAND_ADD_TITLE } from "../constants";
import addCollectionTitle from "./addCollectionTitle";

export default (command, instance) => {
    switch (command) {
        case COMMAND_ADD_TITLE:
            addCollectionTitle(instance);
            break;
    }
}; 