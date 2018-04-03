import { LoanType } from '../../../types/';
import { getLabel } from '../../../utils/';

export default () => ([
  {
    field: LoanType.NAME,
    lable: getLabel('LABEL_NAME'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.LOAN_PERIOD,
    lable: getLabel('LABEL_LOAN_PERIOD'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.GRACE_PERIOD,
    lable: getLabel('LABEL_LOAN_GRACE_PERIOD'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.FINE_CYCLE,
    lable: getLabel('LABEL_FINE_CYCLE'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.MAX_LOAN_AMOUNT,
    lable: getLabel('LABEL_MAX_LOAN_AMOUNT'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.FINE_AMOUNT,
    lable: getLabel('LABEL_MAX_LOAN_AMOUNT'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.FEE_AMOUNT,
    lable: getLabel('LABEL_FEE_AMOUNT'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.CAN_LEAVE,
    lable: getLabel('LABEL_CAN_LEAVE')
  },
  {
    field: LoanType.PER_HOUR,
    lable: getLabel('LABEL_PER_HOUR')
  }
]);
