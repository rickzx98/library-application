import { FluidFunc, Label, React, getLabel } from "../../imports";

import { SET_NUMBER_TO_PRINT } from "./fluid.info";

export class CardCatalogNumberOfPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
        this.onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        this._setValue(event.target.value);
    }
    _setValue(value) {
        if (value && value > -1) {
            this.setState({ value });
            FluidFunc.start(SET_NUMBER_TO_PRINT, {
                printQuantity: value
            });
        } else {
            this._setValue(this.state.value);
        }
    }
    render() {
        return (<div className="form-group">
            <Label label="LABEL_CARDS_TO_PRINT" />
            <input onChange={this.onChange}
                className="form-control"
                value={this.state.value}
                type="number" placeholder={getLabel("LABEL_CARDS")} />
        </div>);
    }
}