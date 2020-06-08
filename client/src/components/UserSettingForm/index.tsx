import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { iRootState } from '~/lib/store';

import { StyledUserSettingForm } from '~/components/UserSettingForm/styled';
import { apiCall } from '~/utils';

enum UserInfoEnum {
  NAME = 'name',
  ID = 'id',
  PASSWORD = 'password',
  PASSWORDCONFIRM = 'passwordConfirm',
}

interface UserInfoTypes {
  name: string;
  id: string;
  password: string;
  passwordConfirm: string;
}

const UserSettingForm: FC = () => {
  const history = useHistory();
  const { userIdx } = useSelector((state: iRootState) => state.user);
  console.log('userIdx', userIdx);

  const [userInfo, setUserInfo] = useState<UserInfoTypes>({
    name: '',
    id: '',
    password: '',
    passwordConfirm: '',
  });

  useEffect(() => {
    console.log('abcd');
  }, []);

  const saveUserInfo = async (): Promise<void> => {
    const { name, password } = userInfo;
    return await apiCall.put(`/api/users/${userIdx}`, {
      name,
      password,
    });
  };

  const changeUserInfo = (event: React.ChangeEvent<HTMLInputElement>, type: UserInfoEnum) => {
    const { value } = event.target;

    console.log('type', type);

    setUserInfo({
      ...userInfo,
      [type]: value,
    });
  };

  const validateUserInfo = () => {};

  return (
    <StyledUserSettingForm>
      <div>Setting</div>
      <div>
        <div>
          <input type="text" placeholder="NAME" onChange={(e) => changeUserInfo(e, UserInfoEnum.NAME)} />
          <input type="text" placeholder="ID" onChange={(e) => changeUserInfo(e, UserInfoEnum.ID)} />
        </div>
        <div>
          <input type="text" placeholder="PASSWORD" onChange={(e) => changeUserInfo(e, UserInfoEnum.PASSWORD)} />
          <input
            type="text"
            placeholder="PASSWORD CONFIRMATION"
            onChange={(e) => changeUserInfo(e, UserInfoEnum.PASSWORDCONFIRM)}
          />
        </div>
      </div>
      <button onClick={saveUserInfo}>Save</button>
      <button onClick={() => history.goBack()}>Cancel</button>
    </StyledUserSettingForm>
  );
};

export default UserSettingForm;
