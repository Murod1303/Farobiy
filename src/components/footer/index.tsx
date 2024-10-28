import { FooterStyled, FooterWrapper } from "./footer.styled";
import logo from "/logo.png";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <FooterWrapper>
          <div className="footerTop">
            <img src={logo} alt="" width={112} height={76} />
            <ul>
              <li className="firsChildLi">
                <span>Manzil</span>
                <p>Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B</p>
              </li>
              <li>
                <span>Pochta</span>
                <p>+998 91 7775411</p>
              </li>
              <li>
                <span>Manzil</span>
                <p>Info@farobiy.com</p>
              </li>
            </ul>
          </div>
          <div className="footerMiddle">
            <p>
              Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
              orqali qiymat sotamiz.
            </p>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Instagram</li>
            </ul>
          </div>
          <hr />
          <div className="footerBottom">
            <p>© 2022 by Fido Studio. Farobiy IT Academy</p>
          </div>
        </FooterWrapper>
      </div>
    </FooterStyled>
  );
};

export default Footer;
