import { ArrowIcon } from "@/utils/icons";
import {
  CoursesCardButton,
  CoursesCardTitle,
  CoursesCardWrapper,
} from "./courses.styled";

interface CardType {
  width: "381px" | "482px" | "280px";
  heght: "273px" | "336px" | "210px";
  url: string;
  name: string;
}

const CoursesCard: React.FC<CardType> = ({ heght, name, url, width }) => {
  return (
    <CoursesCardWrapper $img={url} $heght={heght} $width={width}>
      <CoursesCardTitle>{name}</CoursesCardTitle>
      {name ? (
        <CoursesCardButton>
          <span>Batafsil</span>
          <ArrowIcon />
        </CoursesCardButton>
      ) : (
        ""
      )}
    </CoursesCardWrapper>
  );
};

export default CoursesCard;
