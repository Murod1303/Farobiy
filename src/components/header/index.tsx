import { ArrowDown, BookIcon, PhoneIcon } from "@/utils/icons";
import {
  HeaderInner,
  HeaderLangButton,
  HeaderLangText,
  HeaderList,
  HeaderListItem,
  HeaderLogoButton,
  HeaderLogoButtonText,
  HeaderLogoWrapper,
  HeaderNav,
  HeaderPhoneButton,
  HeaderPhoneText,
  HeaderStyled,
  HeaderWrappper,
} from "./header.styled";
import logo from "/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrappper>
        <HeaderLogoWrapper>
          <img src={logo} alt="" width={112} height={76} />
          <HeaderLogoButton>
            <HeaderLogoButtonText>Kurslar</HeaderLogoButtonText>
            <BookIcon />
          </HeaderLogoButton>
        </HeaderLogoWrapper>
        <HeaderNav>
          <HeaderList>
            <HeaderListItem>Bizning ustozlarimiz</HeaderListItem>
            <HeaderListItem>Biz haqimizda</HeaderListItem>
          </HeaderList>
          <HeaderInner>
            <HeaderLangButton>
              <HeaderLangText>UZ</HeaderLangText>
              <ArrowDown />
            </HeaderLangButton>
            <HeaderPhoneButton>
              <PhoneIcon />
              <HeaderPhoneText>+998 91 7775411</HeaderPhoneText>
            </HeaderPhoneButton>
          </HeaderInner>
        </HeaderNav>
      </HeaderWrappper>
    </HeaderStyled>
  );
};

export default Header;
