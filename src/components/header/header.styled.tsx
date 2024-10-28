import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 24px 0;
  margin-bottom: 13px;
`;

export const HeaderWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;
`;
export const HeaderLogoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 121px;
  margin-top: 4px;
  padding: 16px;
  border-radius: 16px;
  background: #eaf4ff;
  border: none;
`;
export const HeaderLogoButtonText = styled.span`
  color: #2189ff;
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

/* header navbar */
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 46px;
`;
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const HeaderListItem = styled.li`
  a {
    display: inline-block;
    color: #0b2441;
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    scale: calc(1);
    transition: all 0.5s linear;
    &:hover {
      scale: calc(1.03);
      color: #2189ff;
    }
  }
`;

export const HeaderLangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 74px;
  height: 48px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #eaf4ff;
  background-color: transparent;
`;
export const HeaderLangText = styled.span`
  width: 22px;
  color: #2189ff;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderPhoneButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  padding: 16px;
  gap: 8px;
  border-radius: 16px;
  border: none;
  background: #eaf4ff;
  transform: skew(0px, 0px);
  transition: all 0.5s linear;
  &:hover {
    transform: skew(-2deg, -3deg);
    box-shadow: rgba(43, 41, 42, 0.4) 5px 5px, rgba(17, 16, 17, 0.3) 10px 10px,
      hsla(0, 0%, 4.705882352941177%, 0.2) 15px 15px,
      rgba(27, 26, 27, 0.1) 20px 20px;
  }
`;
export const HeaderPhoneText = styled.span`
  color: #2189ff;
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
/* header navbar */
