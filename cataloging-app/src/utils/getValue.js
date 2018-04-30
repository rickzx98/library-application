export const getValue = (data, field, transformer) => {
  return transformer ? transformer(data[field]) : (data[field] || '');
};
