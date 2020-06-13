function useSortList(list, sortProperty, order = 'ASC') {
  if (!sortProperty) {
    return list;
  }

  const sorted = [...list].sort((a, b) => {
    const x = a[sortProperty];
    const y = b[sortProperty];

    /* STRING - ASC */
    if (typeof x === 'string' && typeof y === 'string' && order === 'ASC') {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    }

    /* STRING - DES */
    if (typeof x === 'string' && typeof y === 'string' && order === 'DES') {
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    }

    /* NUMBER - ASC */
    if (typeof x === 'number' && typeof y === 'number' && order === 'ASC') {
      return x - y;
    }

    /* NUMBER - DES */
    if (typeof x === 'number' && typeof y === 'number' && order === 'DES') {
      return y - x;
    }

    return 0;
  });

  return sorted;
}

export default useSortList;
