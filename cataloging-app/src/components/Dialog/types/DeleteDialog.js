import { FontAwesome, ResponsiveButton } from '../../common/';

import React from 'react';
import { getLabel } from '../../../utils/';

export const DeleteDialog = (confirm, cancel, target) => ({
  title: getLabel('LABEL_DELETE_CONFIRMATION_TITLE'),
  body: (<p className="confirmation-message">{getLabel('LABEL_CONFIRM_DO_YOU_WANT_TO_DELETE')}{` ${target}?`}</p>),
  footer: (<div className="btn-group btn-group-sm">
    <ResponsiveButton
      icon={<FontAwesome name="check" />}
      onClick={confirm} className="btn btn-primary" label={getLabel('LABEL_YES')} />
    <ResponsiveButton
      icon={<FontAwesome name="times" />}
      onClick={cancel} className="btn btn-danger" label={getLabel('LABEL_NO')} />
  </div>)
});
