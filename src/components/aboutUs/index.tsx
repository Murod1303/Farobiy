import { LikeIcon, MedalIcon } from "@/utils/icons";
import {
  AboutUsInner,
  AboutUsLeft,
  AboutUsRight,
  AboutUstitle,
  AboutUsWrapper,
} from "./aboutUs.styled";
import AboutUsCard from "./AboutUsCard";

import firstEl from "/assets/firstEl.png";
import secondEl from "/assets/secondEl.png";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <AboutUstitle>Biz haqimizda</AboutUstitle>
      <AboutUsInner>
        <AboutUsLeft>
          <AboutUsCard
            desc="Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati odamlar hayotida o'sish."
            height="224px"
            width="483px"
            icon={LikeIcon}
            color="#F1E2C1"
          />
          <img src={firstEl} alt="" width={480} height={459} />
        </AboutUsLeft>
        <AboutUsRight>
          <AboutUsCard
            desc="Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya, video, freelancing va boshqa mavzularda ijodiy va qiziquvchan."
            height="255px"
            width="685px"
            icon={MedalIcon}
            color="#D8DBFB"
          />
          <img src={secondEl} alt="" width={685} height={428} />
        </AboutUsRight>
      </AboutUsInner>
    </AboutUsWrapper>
  );
};

export default AboutUs;
