import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const AboutUstitle = styled.h3`
  margin-bottom: 32px;
  color: #0b2441;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
`;

export const AboutUsInner = styled.div`
  display: flex;
  gap: 24px;
`;

export const AboutUsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const AboutUsRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
`;

export const AboutUsCardWrapper = styled.div<{
  $height: string;
  $width: string;
  $color: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: 32px;
  border-radius: 40px;
  background: ${(props) => props.$color};
  & p {
    color: #0b2441;
    font-family: Manrope;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;
