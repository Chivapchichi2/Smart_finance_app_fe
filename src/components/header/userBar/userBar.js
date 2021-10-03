import { useWindowWidth } from '@react-hook/window-size';

import { ReactComponent as LogOutBtn } from './logout.svg';
import { UserBarContainer } from './userBarStyles';
function UserBar() {
  const width = useWindowWidth();
  return (
    <UserBarContainer>
      <p>UserName</p>
      {width > 767 ? <div /> : ''}
      <button type="button">{width > 767 ? 'Выйти' : <LogOutBtn />}</button>
    </UserBarContainer>
  );
}

export default UserBar;
