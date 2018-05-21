
export const transformActiveField = (value) => {
  switch (value) {
    case true:
    case 'true':
      return 'yes';
    default:
      return 'no';
  }
};

