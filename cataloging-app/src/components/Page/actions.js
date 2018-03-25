import { DialogActions } from '../Dialog/';
import { FluidForm } from 'fluid-commons';
import { NotificationActions } from '../Notification/';
import { getRequireMessage } from '../../utils/';
import { goBack } from 'react-router-redux';
export const onFailed = (stack, formName) => {
  return dispatch => {
    const { message, field } = getRequireMessage(stack.error.message);
    FluidForm.invalid(formName, field, message);
    dispatch(NotificationActions.alertDanger(message));
  };
};

export const prevPage = (currentForm) => {
  return (dispatch, state) => {
    const { fluidForm } = state();
    const form = fluidForm[currentForm];
    if (form.touched) {
      dispatch(DialogActions.openCancelConfirmation(() => {
        dispatch(goBack());
      }, () => {
        dispatch(DialogActions.closeDialog());
      }));
    } else {
      dispatch(goBack());
    }
  };
};
