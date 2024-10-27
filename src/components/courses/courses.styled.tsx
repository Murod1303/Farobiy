import styled from "styled-components";

export const CoursesTitle = styled.h3`
  margin-bottom: 32px;
  color: #0b2441;
  /* text-align: center; */
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 157.143% */
`;

export const CoursesInner = styled.div`
  display: flex;
  gap: 25px;
  & .verticalLine {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
export const CoursesInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & .firstLineCourse {
    display: flex;
    gap: 25px;
  }
  & .secondLineCourse {
    display: flex;
    gap: 25px;
  }
`;

/* card style */
export const CoursesCardWrapper = styled.div<{
  $img: string;
  $heght: string;
  $width: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$heght};
  border-radius: 44px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 70.9%
    ),
    url(${(props) => props.$img});
`;
export const CoursesCardTitle = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
export const CoursesCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 137px;
  padding: 10px;
  border-radius: 12px;
  border: none;
  background: #2189ff;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: all 0.5s linear;
  & svg {
    transition: all 0.5s linear;
  }
  &:hover {
    transform: scale(1.1);
    svg {
      transform: translate(10px);
    }
  }
`;
/* card style */
