function useListFilter(list, field, filterValue) {
  if (filterValue === 'Todos') return list;

  let fieldValue;

  switch (filterValue) {
    case 'Alunos':
      fieldValue = 'student';
      break;
    case 'Instrutores':
      fieldValue = 'instructor';
      break;
    case 'Administradores':
      fieldValue = 'admin';
      break;
    default:
      break;
  }

  const filtered = list.filter((el) => el.role === fieldValue);

  return filtered;
}

export default useListFilter;
