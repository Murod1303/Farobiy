import {
  TeacherCardWrapper,
  TeacherNameProf,
  TeacherNameText,
} from "./teacher.styled";

interface TeacherCardType {
  name: string;
  jobName: string;
  picture: string;
  icon: () => JSX.Element;
}

const TeacherCard: React.FC<TeacherCardType> = ({
  name,
  jobName,
  icon,
  picture,
}) => {
  return (
    <TeacherCardWrapper>
      <img src={picture} alt="" width={240} height={240} />
      <TeacherNameText>{name}</TeacherNameText>
      <TeacherNameProf>
        {icon()} <span>{jobName}</span>
      </TeacherNameProf>
    </TeacherCardWrapper>
  );
};

export default TeacherCard;
