import { teachers } from "@/utils/constans";
import { TeacherCardList, TeacherTitle } from "./teacher.styled";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <TeacherTitle>Bizning ustozlarimiz</TeacherTitle>
      <TeacherCardList>
        {teachers.map((item) => {
          return (
            <TeacherCard
              key={item.id}
              icon={item.icon}
              jobName={item.jobName}
              name={item.name}
              picture={item.picture}
            />
          );
        })}
      </TeacherCardList>
    </div>
  );
};

export default Teachers;
