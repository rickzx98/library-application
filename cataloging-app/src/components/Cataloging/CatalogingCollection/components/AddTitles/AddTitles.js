import {
    FluidFunc,
    LinkSearch,
    PropTypes,
    React,
    Title,
    connect,
    getLabel,
    triggerCommands
} from "../../imports";
import { PAGE_NAME, PAGE_NAME_TITLE } from "../../constants";

import { ADD_TITLE } from "../fluid.info";
import { ResultTitles } from "./ResultTitles";

class _AddTitles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.onChange = this._onChange.bind(this);
        this.onSelect = this._onSelect.bind(this);
    }
    componentWillMount() {
        this._unload();
        LinkSearch.clearSearch(PAGE_NAME_TITLE);
    }
    componentWillUnmount() {
        this._unload();
    }
    _loaded() {
        this.setState({ loaded: true });
    }
    _unload() {
        this.setState({ loaded: false });
    }
    _onSelect(data) {
        FluidFunc.start(ADD_TITLE, {
            title: data.getRaw()
        });
    }
    _onChange() {
        if (!this.state.loaded) {
            this._loaded();
        }
    }
    render() {
        return (<div className="add-titles adapt-link-theme">
            <LinkSearch
                onChange={this.onChange}
                fetchAll={false}
                label={`${getLabel("LABEL_ADD")} ${getLabel("LABEL_TITLE")}`}
                name={Title.TITLE}
                fluidLink={triggerCommands(PAGE_NAME)}
                pageName={PAGE_NAME_TITLE} />
            {this.state.loaded && this.props.pageList.length > 0 && <ResultTitles onSelect={this.onSelect} pageList={this.props.pageList} />}
        </div>);
    }
}
_AddTitles.propTypes = {
    pageList: PropTypes.array.isRequired
};
export const AddTitles = connect(({ pageListData, ajaxStatus }) => ({
    pageList: pageListData[PAGE_NAME_TITLE] || [],
    ajax: ajaxStatus
}))(_AddTitles);