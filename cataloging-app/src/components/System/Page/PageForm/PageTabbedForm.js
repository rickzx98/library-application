import {
  FluidForm,
  FormGroup,
  HiddenButton,
  ModelValueTransformer,
  PropTypes,
  React,
  Tab,
  Tabs,
  readOnlyWrapper
} from '../imports';

import { FormInput } from './FormInput';
import { FormView } from './FormView';

export class PageTabbedForm extends React.Component {
  renderTab(groups) {
    const { formValue,
      readOnly,
      viewValueTransformer,
      fieldClass = () => '',
      fieldComponent,
      viewComponent, formName } = this.props;
    const tabs = [];
    let eventKey = 1;
    for (let field in groups) {
      if (groups.hasOwnProperty(field)) {
        tabs.push((<Tab key={field} title={field} eventKey={eventKey}>
          <div className="page-form-tab-content clearfix">
            <div className={`${this.props.extraContent ? 'col-sm-6' : ''}`}>
              {groups[field].map((field, index) =>
                (<FormGroup
                  invalid={field.isInvalid}
                  required={field.require}
                  key={field.name} label={field.label}
                  name={field.name}
                  className={fieldClass(field.name, index)}>
                  {readOnlyWrapper(<FormView
                    field={field}
                    formValue={formValue}
                    viewValueTransformer={viewValueTransformer}
                    viewComponent={viewComponent} />,
                    (<FormInput
                      formName={formName}
                      FieldComponent={fieldComponent}
                      field={field}
                      formValue={formValue} />), readOnly)}
                </FormGroup>))}
            </div>
            {this.props.extraContent && <div className="col-sm-6 extra-content">{this.props.extraContent(field)}</div>}
          </div>
        </Tab>));
      }
      eventKey++;
    }
    return tabs;
  }
  render() {
    const { formName,
      formSpecs,
      onSubmit, onFailed, onSelectTab,
      modelValueTransformer } = this.props;
    return (<FluidForm name={formName} specs={formSpecs}
      onSubmit={(formValue) => ModelValueTransformer(formValue, modelValueTransformer, onSubmit)} onFailed={onFailed} fieldNodeGroup={(groups) =>
        (<Tabs onSelect={onSelectTab} className="page-tabbed-form" id={this.props.formName + '_tab'} defaultActiveKey={1}>
          {this.renderTab(groups)}
        </Tabs>)}>
      <HiddenButton />
    </FluidForm>);
  }
}

PageTabbedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  formName: PropTypes.string.isRequired,
  formSpecs: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
  fieldComponent: PropTypes.func,
  viewComponent: PropTypes.func,
  viewValueTransformer: PropTypes.func,
  modelValueTransformer: PropTypes.func,
  extraContent: PropTypes.func,
  onSelectTab: PropTypes.func
};
