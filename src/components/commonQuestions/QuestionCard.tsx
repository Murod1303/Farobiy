import { PlusIcon } from "@/utils/icons";
import { QuestionCardWrapper } from "./questions.styled";

const QuestionCard = ({ question }: { question: string }) => {
  return (
    <QuestionCardWrapper>
      <p>{question}</p>
      <PlusIcon />
    </QuestionCardWrapper>
  );
};

export default QuestionCard;
