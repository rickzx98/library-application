import { FontAwesome, Label, ResponsiveButton } from '../../common/';

import React from 'react';
import { getLabel } from '../../../utils/';

export const CancelDialog = (confirm, cancel) => ({
  title: getLabel('LABEL_CANCEL_CONFIRMATION_TITLE'),
  body: <Label label="LABEL_CANCEL_CONFIRMATION" />,
  footer: (<div className="btn-group btn-group-sm">
    <ResponsiveButton
      icon={<FontAwesome name="check" />}
      onClick={confirm} className="btn btn-primary" label={getLabel('LABEL_YES')} />
    <ResponsiveButton
      icon={<FontAwesome name="times" />}
      onClick={cancel} className="btn btn-danger" label={getLabel('LABEL_NO')} />
  </div>)
});
