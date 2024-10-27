import { StarIcon } from "@/utils/icons";
import {
  DescriptionHero,
  HeroButton,
  HeroContent,
  HeroMainText,
  HeroWrapper,
} from "./hero.styled";
import hero from "/heroimg.png";

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <DescriptionHero>
          <p>Zamonaviy IT o'quv markazi</p>
          <StarIcon />
        </DescriptionHero>
        <HeroMainText>
          Biz sizga <span>zamonaviy kasbni</span> o'rganishga va ish
          boshlashingizga yordam beramiz
        </HeroMainText>
        <HeroButton>Kurslarni tanlash</HeroButton>
      </HeroContent>
      <img src={hero} alt="" />
    </HeroWrapper>
  );
};

export default HeroSection;
