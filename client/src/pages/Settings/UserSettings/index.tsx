import React, { FC } from 'react';
import { PageWrap } from '~/pages/styled';
import UserSettingForm from '~/components/UserSettingForm';

const UserSettings: FC = () => (
  <PageWrap>
    <UserSettingForm />
  </PageWrap>
);

export default UserSettings;
