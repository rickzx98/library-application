import { BARCODE, PAGE_NAME } from '../constants';
import { CatalogingBarcodeForm, CatalogingBarcodePageBody } from '../contents/';
import { GeneratedBarcode, PageHeaders, PageLinks, PageList, React, getLabel } from '../imports';

import { TableColumns } from '../api/';

export default (instance) => {
  const { forCreateView, forListView, hideAddButton } = new PageHeaders(PAGE_NAME);
  let links = [];
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
      instance.createLinks();
    },
    componentDidUpdate: (prevProps) => {
      if (instance.props.location.pathname !== prevProps.location.pathname) {
        instance.refresh();
        instance.createLinks();
        instance.createHeaders();
      }
      if ((instance.props.ajax.started !== prevProps.ajax.started)) {
        instance.createHeaders();
      }
    },
    createLinks: () => {
      instance.barcode(() => {
        links = [
          {
            name: 'barcode',
            icon: 'database',
            label: getLabel('LABEL_BARCODES'),
            url: '/barcodes'
          }
        ];
      });
      instance.barcodes(() => {
        links = [];
      });
    },
    refresh: () => {
      instance.barcode(() => {
        instance.props.actions.loadBarcode(PAGE_NAME);
      });
      instance.barcodes(() => {
        instance.props.actions.loadBarcodes();
      });
    },
    createHeaders: () => {
      instance.barcode(() => {
        instance.props.actions.createHeaders(forCreateView(instance.prevPage, instance.isActive));
      });
      instance.barcodes(() => {
        hideAddButton();
        instance.props.actions.createHeaders(forListView(instance.refresh, undefined, instance.props.actions.back, instance.isActive));
      });
    },
    onSubmit: (input) => {
      instance.props.actions.submit(PAGE_NAME, input);
    },
    onSelect: () => { },
    onFailed: () => { },
    prevPage: () => {
      instance.props.actions.prevPage(PAGE_NAME);
    },
    isActive: () => !instance.props.ajax.started,
    goToUrl: (url) => {
      instance.props.actions.goToUrl(url);
    },
    render: function Render() {
      let element;
      instance.barcode(() => {
        element = (<CatalogingBarcodeForm
          onSubmit={instance.onSubmit}
          onFailed={instance.onFailed}
          formValue={instance.props.pageForm} />);
      });

      instance.barcodes(() => {
        element = (<PageList
          onSelect={instance.onSelect}
          columns={TableColumns}
          fieldKey={GeneratedBarcode.ID}
          name={BARCODE}
          data={instance.props.pageList} />);
      });

      return (<CatalogingBarcodePageBody>
        {links && links.length > 0 && (<PageLinks
          links={links}
          goToUrl={instance.goToUrl} />)}
        <div className={`${links && links.length > 0 ? 'col-md-9' : ''}`}>
          {element}
        </div>
      </CatalogingBarcodePageBody>);
    }
  };
};
