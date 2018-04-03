import { User } from '../../../types/';
import { getLabel } from '../../../utils/';

let formState = { data: {} };
export default ({
    state
}) => {
    formState = state;
    return [
        {
            field: User.ID,
            skipRender: true,
            primaryKey: true
        },
        {
            field: User.FULL_NAME,
            label: getLabel('LABEL_NAME'),
            data: {
                require: true
            }
        },
        {
            field: User.USERNAME,
            label: getLabel('LABEL_USERNAME'),
            data: {
                require: true
            }
        },
        {
            field: User.PASSWORD,
            label: getLabel('LABEL_PASSWORD'),
            isDisabled: (state) => !state.managed,
            data: {
                validate: (value) => new Promise((resolve, reject) => {
                    if (formState.managed && value && value.length > 0) {
                        resolve();
                    } else {
                        reject();
                    }
                })
            }
        },
        {
            field: User.CONFIRM_PASSWORD,
            label: getLabel('LABEL_CONFIRM_PASSWORD'),
            isVisible: (state) => {
                return !!state.data[User.PASSWORD];
            },
            data: {
                validate: (value) => new Promise((resolve, reject) => {
                    if (formState.managed) {
                        if (value) {
                            if (formState.data[User.PASSWORD] === value) {
                                resolve();
                            } else {
                                reject(new Error(getLabel('LABEL_PASSWORD_DID_NOT_MATCH')));
                            }
                        }
                    } else {
                        resolve();
                    }
                })
            }
        },
        {
            field: User.EMAIL,
            label: getLabel('LABEL_EMAIL'),
            data: {
                require: true
            }
        },
        {
            field: User.USER_GROUP,
            label: getLabel('LABEL_USER_GROUP'),
            data: {
                require: true
            }
        }
    ];
};