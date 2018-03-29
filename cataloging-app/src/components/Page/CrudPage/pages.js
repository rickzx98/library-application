export default pageName => ({
  view: `/${pageName}/view/:id`,
  create: `/${pageName}/new`,
  list: `/${pageName}`
});
