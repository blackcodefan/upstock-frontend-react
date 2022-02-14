export const getInitialsFromName = (name) => {
  const initials = name
    .replace(/[^\p{L}\s]|_|\d/gu, '')
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/g, '')
    .split(' ')
    .filter((word, index, arr) => index === 0 || index === arr.length - 1)
    .map((word) => word.substr(0, 1))
    .join('')
    .toUpperCase();

  if (initials.length === 0) {
    return '#';
  }
  return initials.substr(0, 2);
};
