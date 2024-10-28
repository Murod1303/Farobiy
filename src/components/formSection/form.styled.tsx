import styled from "styled-components";

export const FormSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px 81px 64px 56px;
  border-radius: 40px;
  background: #eaf4ff;
  background-image: url("assets/formImg.png");
  background-repeat: no-repeat;
  background-position: 8% 100%;
`;

export const FormSectionTextWrapper = styled.div`
  & h4 {
    margin-bottom: 16px;
    color: #0b2441;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
  }
  & p {
    width: 339px;
    color: #0b2441;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
  }
`;

export const FormSectionForm = styled.form`
  & .bigInput {
    width: 584px;
    margin-bottom: 24px;
    padding: 20px 24px;
    border-radius: 20px;
    border: 1px solid rgba(33, 137, 255, 0.4);
    background: #fff;
    color: #0b2441;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }

  & .wrapperSmallInputs {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 48px;
  }
  & .smallInput {
    width: 280px;
    padding: 20px 24px;
    border-radius: 20px;
    border: 1px solid rgba(33, 137, 255, 0.4);
    background: #fff;
    color: #0b2441;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }
  & button {
    width: 138px;
    padding: 16px;
    border-radius: 20px;
    border: none;
    opacity: 0.5;
    background: #2189ff;
    color: var(--Basic-White, #fff);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    transition: all 0.5s linear;
    &:hover {
      scale: calc(1.05);
    }
  }
`;
