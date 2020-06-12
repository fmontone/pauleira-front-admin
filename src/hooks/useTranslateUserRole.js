function useTranslateUserRole(payload) {
  function translateRole(role) {
    switch (role) {
      case 'administrator':
        return 'administrador';
      case 'student':
        return 'aluno';
      case 'instructor':
        return 'instrutor';
      default:
        return role;
    }
  }

  const translate = payload.map((item) => ({
    ...item,
    transRole: translateRole(item.role),
  }));

  return translate;
}

export default useTranslateUserRole;
