import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setActivePage } from '~/store/modules/activePage/actions';

export default function useActivePageSetter() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathActive = pathname.split('/')[1];
    let pathString;

    console.log(pathActive);

    switch (pathActive) {
      case 'dashboard':
        pathString = 'Dashboard';
        break;
      case 'users':
        pathString = 'Usuários';
        break;
      case 'galleries':
        pathString = 'Galerias';
        break;
      case 'courses':
        pathString = 'Cursos';
        break;
      case 'settings':
        pathString = 'Configurações';
        break;
      default:
        pathString = '';
        break;
    }

    dispatch(setActivePage(pathString));
  }, [dispatch, pathname]);
}
