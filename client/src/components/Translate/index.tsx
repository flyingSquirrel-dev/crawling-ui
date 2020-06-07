import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { tLang } from '~/lang/i18n';

import Earth from './icon/Earth';

import { Translate, TransBtn, LangWrap, Lang } from './styled';

const TranslateComponent = () => {
  const { i18n } = useTranslation();
  const [isMove, setMove] = useState(false);

  function onClick() {
    setMove((prevState) => !prevState);
  }

  function changeLanguage(lang: tLang) {
    i18n.changeLanguage(lang).finally(() => setMove(false));
  }

  return (
    <Translate>
      <TransBtn onClick={onClick}>
        <Earth />
        Choose Language
      </TransBtn>

      <LangWrap>
        {isMove ? (
          <>
            <li>
              <Lang onClick={() => changeLanguage('ko')}>•KOR</Lang>
            </li>
            <li>
              <Lang onClick={() => changeLanguage('en')}>•ENG</Lang>
            </li>
          </>
        ) : (
          <li>
            {/* TODO: UI 변경에 따라서 언어부분 어떻게 처리되는지 확인 필요 */}
            {/*<Lang>{i18n.language === 'ko' ? 'KOR' : 'ENG'}</Lang>*/}
          </li>
        )}
      </LangWrap>
    </Translate>
  );
};

export default TranslateComponent;
