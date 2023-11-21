import { useLocation } from 'react-router-dom';

import HeaderLogin from './HeaderLogin';
import HeaderBase from './HeaderBase';
import HeaderCourse from './HeaderCourse';

const Header = () => {
  const location = useLocation();
  const getHeader = () => {
    if (location.pathname === '/' || location.pathname === '/cours') {
      return <HeaderBase/>
    } else if ( location.pathname === '/frontend' || location.pathname === '/backend') {
      return <HeaderCourse/>
    }  else  {
      return <HeaderLogin/>
    }
  }

  return getHeader();
};

export default Header;
