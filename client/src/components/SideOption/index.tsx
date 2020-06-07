import React from 'react';
import { useHistory } from 'react-router-dom';

import { Theme, ToggleTheme } from '~/hooks/useDarkMode';

import Translate from '~/components/Translate';

import Day from './icon/Day';
import Night from './icon/Night';
import UserSetting from './icon/UserSetting';

import { SideOption, ThemeBtn } from './styled';

export type HeaderProps = {
  theme: Theme;
  toggleTheme: ToggleTheme;
};

const SideOptionComponent = ({ theme, toggleTheme }: HeaderProps) => {
  const history = useHistory();

  return (
    <SideOption>
      <Translate />
      <ThemeBtn onClick={toggleTheme}>{theme === 'dark' ? <Night /> : <Day />}</ThemeBtn>
      <ThemeBtn onClick={() => history.push('/user/settings')}>
        <UserSetting />
      </ThemeBtn>
    </SideOption>
  );
};

export default SideOptionComponent;
