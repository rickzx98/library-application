import '../../images/subject-header.jpg';

import * as actions from './actions/CatalogingCollectionActions';

import { createHeadersForCreateForm, createHeadersForTable, createHeadersForUpdateForm } from './content/CatalogingCollectionHeaders';

import { CatalogingCollectionForm } from './content/CatalogingCollectionForm';
import { CatalogingCollectionList } from './content/CatalogingCollectionList';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CatalogingCollectionPage extends React.Component {

  constructor(props) {
    super(props);
    this.thisRefresh = this.refresh.bind(this);
    this.thisIsActive = this.isActive.bind(this);
    this.thisAdd = this.add.bind(this);
    this.thisOnSubmit = this.onSubmit.bind(this);
    this.thisOnFailed = this.onFailed.bind(this);
    this.thisOnSelect = this.onSelect.bind(this);
    this.thisOnCancel = this.onCancel.bind(this);
    this.thisOnDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    this.refresh();
    this.createHeaders();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ajax.started !== nextProps.ajax.started) {
      this.createHeaders();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.createHeaders();
      this.refresh();
    }
  }
  createHeaders() {
    this.router(() => {
      this.props.actions.createHeaders(createHeadersForUpdateForm(this.thisRefresh, this.thisIsActive, this.thisOnCancel, this.thisOnDelete));
    },
      () => { this.props.actions.createHeaders(createHeadersForCreateForm(this.thisIsActive)); },
      () => { this.props.actions.createHeaders(createHeadersForTable(this.thisAdd, this.thisRefresh, this.thisIsActive)); });
  }

  isActive() {
    return !this.props.ajax.started;
  }

  refresh() {
    this.router(({ params }) => {
      this.props.actions.loadCollection(params.id);
    }, () => { }, () => { this.props.actions.loadCollections(); });
  }

  add() {
    this.props.actions.goToNewCollection();
  }

  onFailed(stack) {
    this.props.actions.onFailed(stack);
  }

  onSubmit(collection) {
    this.router(({ params }) => {
      this.props.actions.updateCollection(params.id, collection);
    }, () => { this.props.actions.createCollection(collection); },
      () => { });
  }

  onSelect(collection) {
    this.props.actions.openCollection(collection);
  }

  onCancel() {
    this.router(() => {
      this.props.actions.confirmCancel();
    });
  }

  onDelete() {
    this.router(() => {
      this.props.actions.confirmDelete();
    });
  }

  router(updateView, createView, listView) {
    const { pathname } = this.props.location;
    const { params } = this.props.match;
    switch (pathname) {
      case Pages.viewCollection + (params ? params.id : ''):
        updateView({ params, pathname });
        break;
      case Pages.newCollection:
        createView({ params, pathname });
        break;
      default:
        listView({ params, pathname });
        break;
    }
  }
  render() {
    let viewElement;
    this.router(() => {
      viewElement = (<CatalogingCollectionForm
        onSubmit={this.thisOnSubmit}
        onFailed={this.thisOnFailed}
        ajax={this.props.ajax}
        data={this.props.collectionForm.data} />);
    }, () => {
      viewElement = (<CatalogingCollectionForm
        onSubmit={this.thisOnSubmit}
        onFailed={this.thisOnFailed}
        ajax={this.props.ajax}
        data={this.props.collectionForm.data} />);
    }, () => {
      viewElement = (<CatalogingCollectionList
        onSelect={this.thisOnSelect}
        collections={this.props.collections} />);
    });
    return viewElement;
  }
}
const mapStateToProps = ({ collections, ajaxStatus, routing, fluidForm: { collectionForm } }) => ({
  collections,
  ajax: ajaxStatus,
  location: routing.location,
  collectionForm: collectionForm || { data: {} }
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
CatalogingCollectionPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  collections: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired,
  collectionForm: PropTypes.object.isRequired
};
export const ConnectedCatalogingCollectionPage = connect(mapStateToProps, mapDispatchToProps)(CatalogingCollectionPage);
