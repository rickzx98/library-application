import { COMMAND_ADD_TITLE, COMMAND_GET_COLLECTION_TITLES, COMMAND_REMOVE_COLLECITON_TITLE, PAGE_NAME, PAGE_NAME_COLLECTION_TITLE, PAGE_NAME_TITLE } from "../../constants";
import {
    Collection,
    CollectionTitle,
    FluidForm,
    FluidFunc,
    FluidTable,
    LinkSearch,
    PropTypes,
    React,
    connect,
    triggerCommands
} from "../../imports";

import { ADD_TITLE } from "../fluid.info";
import CollectionTitleColumns from "./CollectionTitleColumns";

class _CollectionTitles extends React.Component {
    constructor(props) {
        super(props);
        this.addTitle = this._addTitle.bind(this);
        this.onSelect = this._onSelect.bind(this);
        this.state = { loaded: false };
        FluidFunc.create(ADD_TITLE).onStart(this.addTitle).spec("title", { require: true });
    }
    componentWillMount() {
        this._unload();
        this._refresh();
    }
    _loaded() {
        this.setState({ loaded: true });
    }
    _unload() {
        this.setState({ loaded: false });
    }
    _onSelect(collectionTitle) {
        if (!this.props.readOnly) {
            const id = collectionTitle.getPrimaryKey();
            const primaryField = collectionTitle.getPrimaryField();
            FluidFunc.start(triggerCommands(PAGE_NAME), {
                command: COMMAND_REMOVE_COLLECITON_TITLE,
                id,
                primaryField
            }).then(() => {
                this._refresh();
            });
        }
    }
    _addTitle({ title }) {
        const collectionTitle = CollectionTitle.new(FluidForm.getValue(this.props.formValue, Collection.ID), title());
        FluidFunc.start(triggerCommands(PAGE_NAME), {
            command: COMMAND_ADD_TITLE,
            collectionTitle
        }).then(() => {
            this._refresh();
            LinkSearch.clearSearch(PAGE_NAME_TITLE);
        });
    }
    _refresh() {
        FluidFunc.start(triggerCommands(PAGE_NAME), {
            command: COMMAND_GET_COLLECTION_TITLES,
            parent: {
                field: CollectionTitle.COLLECTION,
                value: FluidForm.getValue(this.props.formValue, Collection.ID)
            }
        }).then(() => {
            this._loaded();
        });
    }
    render() {
        const { pageList } = this.props;
        return (<div className="collection-titles">
            {this.state.loaded && pageList.length > 0 && (<FluidTable fieldKey={CollectionTitle.ID}
                onSelect={this.onSelect}
                name={PAGE_NAME_COLLECTION_TITLE}
                className={`table table-condensed table-hover ${this.props.readOnly ? "read-only" : ""}`}
                columns={CollectionTitleColumns}
                value={pageList} />)}
        </div>);
    }
}

_CollectionTitles.propTypes = {
    formValue: PropTypes.object.isRequired,
    getValue: PropTypes.func.isRequired,
    field: PropTypes.object.isRequired,
    pageList: PropTypes.array.isRequired,
    readOnly: PropTypes.bool
};

export const CollectionTitles = connect(({ pageListData, ajaxStatus }) => ({
    pageList: pageListData[PAGE_NAME_COLLECTION_TITLE] || [],
    ajax: ajaxStatus
}))(_CollectionTitles);
