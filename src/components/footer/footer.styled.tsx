import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: #eaf4ff;
`;
export const FooterWrapper = styled.div`
  padding: 32px 0 52px 0;
  & .footerTop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    & ul {
      display: flex;
      gap: 64px;
      margin-right: 185px;
      .firsChildLi {
        width: 238px;
      }
      li a {
        display: inline-block;
        color: #0b2441;
        font-family: Manrope;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
        letter-spacing: 0.24px;
      }
      li span {
        display: block;
        margin-bottom: 12px;
        color: #0b2441;
        font-family: Manrope;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px; /* 133.333% */
        letter-spacing: 0.24px;
        opacity: 0.4;
      }
    }
  }
  & .footerMiddle {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    p {
      width: 263px;
      color: #0b2441;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 18px */
      letter-spacing: 0.24px;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 24px;
      li a {
        color: #0b2441;
        font-family: Manrope;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 133.333% */
        letter-spacing: 0.24px;
      }
    }
  }
  & .footerBottom {
    padding-top: 36px;
    p {
      color: #0b2441;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 18px */
      letter-spacing: 0.24px;
    }
  }
`;
