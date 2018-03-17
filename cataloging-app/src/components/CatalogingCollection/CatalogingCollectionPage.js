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
    const { pathname } = this.props.location;
    const { params } = this.props.match;
    switch (pathname) {
      case Pages.viewCollection + (params ? params.id : ''):
        this.props.actions.createHeaders(createHeadersForUpdateForm(this.thisRefresh, this.thisIsActive, this.thisOnCancel));
        break;
      case Pages.newCollection:
        this.props.actions.createHeaders(createHeadersForCreateForm(this.thisIsActive));
        break;
      default:
        this.props.actions.createHeaders(createHeadersForTable(this.thisAdd, this.thisRefresh, this.thisIsActive));
        break;
    }
  }

  isActive() {
    return !this.props.ajax.started;
  }

  refresh() {
    const { pathname } = this.props.location;
    const { params } = this.props.match;
    switch (pathname) {
      case Pages.viewCollection + (params ? params.id : ''):
        this.props.actions.loadCollection(params.id);
        break;
      case Pages.newCollection:
        break;
      default:
        this.props.actions.loadCollections();
        break;
    }
  }

  add() {
    this.props.actions.goToNewCollection();
  }

  onFailed(stack) {
    this.props.actions.onFailed(stack);
  }

  onSubmit(collection) {
    const { pathname } = this.props.location;
    const { params } = this.props.match;
    switch (pathname) {
      case Pages.viewCollection + (params ? params.id : ''):
        this.props.actions.updateCollection(collection);
        break;
      case Pages.newCollection:
        this.props.actions.createCollection(collection);
        break;
    }
  }

  onSelect(collection) {
    this.props.actions.openCollection(collection);
  }
  onCancel() {

  }
  render() {
    let viewElement;
    const { params } = this.props.match;
    const { pathname } = this.props.location;
    switch (pathname) {
      case Pages.newCollection:
        viewElement = (<CatalogingCollectionForm
          onSubmit={this.thisOnSubmit}
          onFailed={this.thisOnFailed}
          ajax={this.props.ajax}
          data={this.props.collectionForm.data} />);
        break;
      case Pages.viewCollection + (params ? params.id : ''):
        viewElement = (<CatalogingCollectionForm
          onSubmit={this.thisOnSubmit}
          onFailed={this.thisOnFailed}
          ajax={this.props.ajax}
          data={this.props.collectionForm.data} />);
        break;
      default:
        viewElement = (<CatalogingCollectionList
          onSelect={this.thisOnSelect}
          collections={this.props.collections} />);
        break;
    }
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
