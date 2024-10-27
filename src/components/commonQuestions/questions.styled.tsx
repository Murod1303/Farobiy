import styled from "styled-components";

export const CommonTitle = styled.h3`
  margin-bottom: 32px;
  color: #0b2441;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 157.143% */
`;

export const QuestionCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* Card */
export const QuestionCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  border-radius: 40px;
  border: none;
  background: #f4f4f4;
  & p {
    color: #0b2441;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }
`;
/* Card */
