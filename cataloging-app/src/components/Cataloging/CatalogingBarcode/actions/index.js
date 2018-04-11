import { Barcode, PageActions } from '../imports';
const APP_KEY = process.env.APP_KEY;

export const loadBarcode = (pageName) => dispatch => {
  dispatch(PageActions.loadById(pageName, `${Barcode.ID}_f${APP_KEY}`));
};

export const submit = (pageName, input) => dispatch => {
  const raw = input.getRaw();
  if (!input.getPrimaryKey()) {
    dispatch(PageActions.create(pageName, raw));
  } else {
    dispatch(PageActions.update(pageName, `${Barcode.ID}_f${APP_KEY}`, raw));
  }
};


export const prevPage = (currentForm) => dispatch => {
  dispatch(PageActions.prevPage(currentForm));
};

export const createHeaders = (controls) => disptach => {
  disptach(PageActions.createHeaders(controls));
};
