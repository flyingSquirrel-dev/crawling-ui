import styled from '~/lib/styled';

export const StyledDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledBoardTitle = styled.div`
  display: flex;
  height: 40px;
  margin-top: 100px;
  div {
    width: 300px;
    padding: 11px 20px;
    line-height: 18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${({ theme }) => theme.crawlingSettingDashBoard.titleBackGroundColor};
    color: ${({ theme }) => theme.crawlingSettingDashBoard.titleColor};
    font-weight: bold;
    font-size: 14px;
    &:nth-child(1) {
      text-align: left;
    }
    &:nth-child(2) {
      text-align: right;
    }
    &:nth-child(3) {
      width: 200px;
      text-align: center;
      background-color: ${({ theme }) => theme.crawlingSettingDashBoard.modifyTabBackGroundColor};
      color: ${({ theme }) => theme.crawlingSettingDashBoard.modifyTabColor};
    }
  }
`;

export const StyledDefaultBoardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding: 27px 0;
  background-color: ${({ theme }) => theme.crawlingSettingDashBoard.defaultContentBackGroundColor};
  color: ${({ theme }) => theme.crawlingSettingDashBoard.defaultContentFontColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
