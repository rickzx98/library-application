import { BARCODE, PAGE_NAME } from '../constants';
import { CatalogingBarcodeForm, CatalogingBarcodePageBody } from '../contents/';
import { GeneratedBarcode, PageHeaders, PageLinks, PageList, React, getLabel, LibraryLinks } from '../imports';

import { TableColumns } from '../api/';

export default (instance) => {
  const { forCreateView, forListView, hideAddButton } = new PageHeaders(PAGE_NAME);
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
    },
    componentDidUpdate: (prevProps) => {
      if (instance.props.routing.location.pathname !== prevProps.routing.location.pathname) {
        instance.refresh();
        instance.createHeaders();
      }
      if ((instance.props.ajax.started !== prevProps.ajax.started)) {
        instance.createHeaders();
      }
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
    onSelect: () => {
    },
    onFailed: () => {
    },
    prevPage: () => {
      instance.props.actions.prevPage(PAGE_NAME);
    },
    isActive: () => !instance.props.ajax.started,
    goToUrl: (url) => {
      instance.props.actions.goToUrl(url);
    },
    render: function Render() {
      let element;
      let links;

      instance.barcode(() => {
        links = new LibraryLinks().group('barcode', 'BC', [
          {
            group: 'BC',
            name: 'barcodes',
            icon: 'database',
            label: getLabel('LABEL_BARCODES'),
            url: '/barcodes',
            show: true
          }
        ]).getLinks();

        element = (<CatalogingBarcodeForm
          onSubmit={instance.onSubmit}
          onFailed={instance.onFailed}
          formValue={instance.props.pageForm}/>);
      });

      instance.barcodes(() => {
        links = new LibraryLinks().getLinks();
        element = (<PageList
          onSelect={instance.onSelect}
          columns={TableColumns}
          fieldKey={GeneratedBarcode.ID}
          name={BARCODE}
          data={instance.props.pageList}/>);
      });

      return (<CatalogingBarcodePageBody>
        {links && links.length > 0 && (<PageLinks
          links={links}
          goToUrl={instance.goToUrl}/>)}
        <div className={`${links && links.length > 0 ? 'col-md-9' : ''}`}>
          {element}
        </div>
      </CatalogingBarcodePageBody>);
    }
  };
};
