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
                <a
                  href="https://maps.app.goo.gl/fzdRUPuXyWp9gLk6A"
                  target="_blank"
                >
                  Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B
                </a>
              </li>
              <li>
                <span>Yordam</span>
                <a href="tel:+998917775411">+998 91 7775411</a>
              </li>
              <li>
                <span>Pochta</span>
                <a href="mailto:Info@farobiy.com">Info@farobiy.com</a>
              </li>
            </ul>
          </div>
          <div className="footerMiddle">
            <p>
              Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
              orqali qiymat sotamiz.
            </p>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footerBottom">
            <p>© 2024 by Neo13. Farobiy IT Academy</p>
          </div>
        </FooterWrapper>
      </div>
    </FooterStyled>
  );
};

export default Footer;
