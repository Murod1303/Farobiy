import {
  FormSectionForm,
  FormSectionTextWrapper,
  FormSectionWrapper,
} from "./form.styled";

const FormSection = () => {
  return (
    <FormSectionWrapper>
      <FormSectionTextWrapper>
        <h4>Tanlovda yordam beramiz!</h4>
        <p>
          Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
          raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
        </p>
      </FormSectionTextWrapper>
      <FormSectionForm>
        <input className="bigInput" type="text" placeholder="Ismingiz" />
        <div className="wrapperSmallInputs">
          <input
            className="smallInput"
            type="text"
            placeholder="Telefon nomeringiz"
          />
          <input className="smallInput" type="text" placeholder="Pochtangiz" />
        </div>
        <button type="button">Yuborish</button>
      </FormSectionForm>
    </FormSectionWrapper>
  );
};

export default FormSection;
