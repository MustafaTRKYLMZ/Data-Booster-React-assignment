import React from "react";
import { Answer } from "./Answer";
import { ExerciseProps } from "./Exercise/types";
import parse from "html-react-parser";

export const MultipleChoose: React.FC<ExerciseProps> = ({
  currentExercise,
}) => {
  if (!currentExercise) return null;
  //get fields from currentExercise
  const { title, description, answers } = currentExercise;

  return (
    <div className="flex flex-col items-start justify-start text-white gap-8 p-4 overflow-y-auto max-h-screen">
      <h1 className="text-[40px] font-bold">{title}</h1>
      <div className="text-[24px]">{parse(description)}</div>
      <div className="flex flex-col gap-3 p-2 w-full max-h-[500vh] pb-24">
        <p className="text-[20px] text-[#c699f2] ">Pick one option</p>
        {answers.map((answer) => {
          if (answer?.resourcetype === "MultipleChoiceExerciseAnswerText") {
            return <Answer key={answer.id} answer={answer} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};
