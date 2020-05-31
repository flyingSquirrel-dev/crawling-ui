import React, { FC } from 'react';
import { PageWrap } from '~/pages/styled';
import CrawlingSettingBoardContent from '~/components/CrawlingSetting/CrawlingSettingBoardContent';

const CrawlingSettings: FC = () => (
  <PageWrap>
    <CrawlingSettingBoardContent />
  </PageWrap>
);

export default CrawlingSettings;
