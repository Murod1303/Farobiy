import { questions } from "@/utils/questions";
import QuestionCard from "./QuestionCard";
import { CommonTitle, QuestionCardList } from "./questions.styled";

const CommonQuestions = () => {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <CommonTitle>Ko'p so'raladigan savollar</CommonTitle>
      <QuestionCardList>
        {questions?.map((item) => {
          return <QuestionCard key={item.id} question={item.question} />;
        })}
      </QuestionCardList>
    </div>
  );
};

export default CommonQuestions;
