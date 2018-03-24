import { NotificationActions } from '../Notification/';
import { getRequireMessage } from '../../utils/';

export const onFailed = (stack) => {
  return dispatch => {
    const { message } = getRequireMessage(stack.error.message);
    dispatch(NotificationActions.alertDanger(message));
  };
};
