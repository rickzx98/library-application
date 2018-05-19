export default ({ props: { pageName, actions, pageList }, params: { searchValue } }) => {
    if (searchValue()) {
       // do some kick ass search here
    } else {
        actions.load(pageName);
    }
};