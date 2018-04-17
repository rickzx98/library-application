import { PAGE_NAME } from '../constants';

export default {
  tree: `/${PAGE_NAME}`,
  create: `/${PAGE_NAME}/new`,
  createWithParent: `/${PAGE_NAME}/new/:parent`,
  view: `/${PAGE_NAME}/view/:id`
};
