import { HeaderControl, getLabel } from '../imports';

export const forListHeaders = () => {
    const headers = {};
    headers['add'] = new HeaderControl(getLabel('LABEL_ADD'), 'plus', 'subjectHeaderOnClick', 'add');
    headers['refresh'] = new HeaderControl(getLabel('LABEL_REFRESH'), 'refresh', 'subjectHeaderOnClick', 'refresh');
    return headers;
};