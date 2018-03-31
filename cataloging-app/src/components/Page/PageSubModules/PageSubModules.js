import { PageForm } from '../PageForm/PageForm';
import { PageModules } from './PageModules';
import PropTypes from 'prop-types';
import React from 'react';
export class PageSubModules extends React.Component {
  state = {
    hasModules: false
  };
  componentWillMount = () => {
    this.refresh();
  }
  refresh = () => {
    if (this.props.modules && this.props.modules.length > 0) {
      this.hasModules();
    }
  }
  hasModules = () => {
    this.setState({ hasModules: true });
  }
  render = () => (<div className="page-sub-modules clearfix">
    {this.state.hasModules && (<PageModules onClick={this.props.goToPage} formValue={this.props.formValue} modules={this.props.modules} />)}
    <div className={`page-form ${this.state.hasModules ? 'col-sm-9' : 'no-sub-modules-links'}`}>
      <PageForm {...this.props} />
    </div>
  </div>);
}

PageSubModules.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  formName: PropTypes.string.isRequired,
  formSpecs: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
  fieldComponent: PropTypes.func,
  viewValueTransformer: PropTypes.func,
  modelValueTransformer: PropTypes.func,
  modules: PropTypes.array,
  goToPage: PropTypes.func.isRequired
};
