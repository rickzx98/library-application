import { React, PageHeaders } from '../imports';
import { CatalogingBarcodeForm, CatalogingBarcodePageBody } from '../contents/';
import { PAGE_NAME } from '../constants';
export default (instance) => {
  const { forCreateView } = new PageHeaders(PAGE_NAME);
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
    },
    refresh: () => {
      instance.props.actions.loadBarcode(PAGE_NAME);
    },
    createHeaders: () => {
      instance.props.actions.createHeaders(forCreateView(instance.prevPage, instance.isActive));
    },
    onSubmit: (input) => {
      instance.props.actions.submit(PAGE_NAME, input);
    },
    onFailed: () => { },
    prevPage: () => {
      instance.props.actions.prevPage(PAGE_NAME);
    },
    isActive: () => !instance.props.ajax.started,
    render: function Render() {
      return (<CatalogingBarcodePageBody>
        <CatalogingBarcodeForm
          onSubmit={instance.onSubmit}
          onFailed={instance.onFailed}
          formValue={instance.props.pageForm} />
      </CatalogingBarcodePageBody>);
    }
  };
};
