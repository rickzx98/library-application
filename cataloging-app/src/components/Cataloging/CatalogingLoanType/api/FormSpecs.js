import {getLabel, LoanType} from '../imports';

export default () => ([
  {
    field: LoanType.ID,
    skipRender: true,
    primaryKey: true
  },
  {
    field: LoanType.NAME,
    label: getLabel('LABEL_NAME'),
    data: {
      require: true
    }
  },
  {
    field: LoanType.LOAN_PERIOD,
    label: getLabel('LABEL_LOAN_PERIOD'),
    data: {
      default: 15,
      require: true
    }
  },
  {
    field: LoanType.GRACE_PERIOD,
    label: getLabel('LABEL_LOAN_GRACE_PERIOD'),
    data: {
      default: 1,
      require: true
    }
  },
  {
    field: LoanType.FINE_CYCLE,
    label: getLabel('LABEL_FINE_CYCLE'),
    data: {
      default: 1,
      require: true
    }
  },
  {
    field: LoanType.MAX_LOAN_AMOUNT,
    label: getLabel('LABEL_MAX_LOAN_AMOUNT'),
    data: {
      default: 5,
      require: true
    }
  },
  {
    field: LoanType.FINE_AMOUNT,
    label: getLabel('LABEL_FINE_AMOUNT'),
    data: {
      default: '0.00',
      require: true
    }
  },
  {
    field: LoanType.FEE_AMOUNT,
    label: getLabel('LABEL_FEE_AMOUNT'),
    data: {
      default: '0.00',
      require: true
    }
  },
  {
    field: LoanType.CAN_LEAVE,
    label: getLabel('LABEL_CAN_LEAVE')
  },
  {
    field: LoanType.PER_HOUR,
    label: getLabel('LABEL_PER_HOUR')
  }
]);
