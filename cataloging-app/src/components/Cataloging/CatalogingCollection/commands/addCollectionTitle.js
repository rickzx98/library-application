import { PAGE_NAME_COLLECTION_TITLE } from "../constants";

export default ({ props: { actions }, params }) => {
    actions.create(PAGE_NAME_COLLECTION_TITLE, params.title());
};