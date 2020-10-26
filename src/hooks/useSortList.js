export default function useSortUsersAdmin(list, payload, order) {
  const { property } = payload;

  if (!payload) {
    return list;
  }

  if (order) {
    return list.sort((a, b) => a[property] - b[property]);
  }
  return list.sort((a, b) => a[property] - b[property]).reverse();
}
