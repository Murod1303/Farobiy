import styled from "styled-components";

export const TeacherTitle = styled.h3`
  margin-bottom: 32px;
  color: #0b2441;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 157.143% */
`;

export const TeacherCardList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 52px;
  column-gap: 24px;
`;

export const TeacherCardWrapper = styled.div`
  width: 280px;
  padding: 15px 20px 5px 20px;
  border-radius: 5px;
  & img {
    display: inline-block;
    margin-bottom: 36px;
    border-radius: 50%;
    overflow: hidden;
  }
  transition: all 0.3s linear;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
export const TeacherNameText = styled.p`
  text-align: center;
  margin-bottom: 16px;
  color: #0b2441;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;
export const TeacherNameProf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #0b2441;
  text-align: center;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
`;
