export default function sortList(list, payload) {
  if (!payload) {
    throw new Error(
      'sortList must have a payload with title, property and order.'
    );
  }

  const { property, order } = payload;

  const sorted = [...list].sort((a, b) => {
    const x = a[property];
    const y = b[property];

    /* STRING */
    if (typeof x === 'string') {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    }

    /* NUMBER */
    if (typeof x === 'number') {
      return x - y;
    }

    return 0;
  });

  if (order === 'asc') {
    return sorted;
  }

  return sorted.reverse();
}
