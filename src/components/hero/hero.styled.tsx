import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 44px;
  background: #eaf4ff;
  overflow: hidden;
`;
export const DescriptionHero = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;
export const HeroContent = styled.div`
  padding: 56px;
`;
export const HeroMainText = styled.p`
  width: 456px;
  margin-bottom: 56px;
  color: #0b2441;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 42px */
  & span {
    position: relative;
    color: #2189ff;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  & span::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 244.903px;
    height: 11.923px;
    display: block;
    background-image: url("/line.svg");
  }
`;

export const HeroButton = styled.button`
  width: 198px;
  padding: 16px;
  border-radius: 20px;
  border: none;
  background: #2189ff;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
