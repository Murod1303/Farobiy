import { AboutUsCardWrapper } from "./aboutUs.styled";

interface AboutUsType {
  desc: string;
  icon: () => JSX.Element;
  width: "483px" | "685px";
  height: "255px" | "224px";
  color: string;
}

const AboutUsCard: React.FC<AboutUsType> = ({
  desc,
  icon,
  width,
  height,
  color,
}) => {
  return (
    <AboutUsCardWrapper $width={width} $height={height} $color={color}>
      {icon()}
      <p>{desc}</p>
    </AboutUsCardWrapper>
  );
};

export default AboutUsCard;
