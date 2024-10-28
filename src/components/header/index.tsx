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
      <div className="container">
        <HeaderWrappper>
          <HeaderLogoWrapper>
            <img src={logo} alt="" width={112} height={76} />
            <HeaderLogoButton href="#courses">
              <HeaderLogoButtonText>Kurslar</HeaderLogoButtonText>
              <BookIcon />
            </HeaderLogoButton>
          </HeaderLogoWrapper>
          <HeaderNav>
            <HeaderList>
              <HeaderListItem>
                <a href="#teachers">Bizning ustozlarimiz</a>
              </HeaderListItem>
              <HeaderListItem>
                <a href="#aboutUs">Biz haqimizda</a>
              </HeaderListItem>
            </HeaderList>
            <HeaderInner>
              <HeaderLangButton>
                <HeaderLangText>UZ</HeaderLangText>
                <ArrowDown />
              </HeaderLangButton>
              <HeaderPhoneButton href="tel:+998917775411">
                <PhoneIcon />
                <HeaderPhoneText>+998 91 7775411</HeaderPhoneText>
              </HeaderPhoneButton>
            </HeaderInner>
          </HeaderNav>
        </HeaderWrappper>
      </div>
    </HeaderStyled>
  );
};

export default Header;
