export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let endString = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) endString += `${element.slice(startString.length)}-`;
  });

  return endString.slice(0, endString.length - 1);
}
