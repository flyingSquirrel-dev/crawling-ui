import React from 'react';
import { StyledUserSettingForm } from '~/components/UserSettingForm/styled';

const UserSettingForm = () => (
  <StyledUserSettingForm>
    <div>Setting</div>
    <div>
      <div>
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="ID" />
      </div>
      <div>
        <input type="text" placeholder="PASSWORD" />
        <input type="text" placeholder="PASSWORD CONFIRMATION" />
      </div>
    </div>
  </StyledUserSettingForm>
);

export default UserSettingForm;
