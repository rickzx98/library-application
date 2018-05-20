import { COMMAND_ADD_TITLE, PAGE_NAME, PAGE_NAME_TITLE } from "../../constants";
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

import { ResultTitles } from "./ResultTitles";

class _AddTitles extends React.Component {
    constructor(props) {
        super(props);
        this.onSelect = this._onSelect.bind(this);
    }
    _onSelect(data) {
        FluidFunc.start(triggerCommands(PAGE_NAME), {
            command: COMMAND_ADD_TITLE,
            title: data.getRaw()
        });
    }
    render() {
        return (<div className="add-titles adapt-link-theme">
            <LinkSearch
                fetchAll={false}
                label={`${getLabel("LABEL_ADD")} ${getLabel("LABEL_TITLE")}`}
                name={Title.TITLE}
                fluidLink={triggerCommands(PAGE_NAME)}
                pageName={PAGE_NAME_TITLE} />
            {this.props.pageList.length > 0 && <ResultTitles onSelect={this.onSelect} pageList={this.props.pageList} />}
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