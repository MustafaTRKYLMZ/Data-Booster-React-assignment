import React from "react";
import { AnswerProps } from "./types";

export const Answer: React.FC<AnswerProps> = ({ answer }) => {
  const { id, answer: answerText } = answer;
  return (
    <div className="flex items-center w-full h-22 gap-6 rounded-[12px] bg-[#9548F5] p-8">
      <input
        type="radio"
        id={id}
        name="answer"
        value={id}
        className="appearance-none h-6 w-6 flex-shrink-0 border-[2px] border-[#af76f7] bg-blue rounded-full"
      />
      <label htmlFor={id} className="text-white text-base">
        {answerText}
      </label>
    </div>
  );
};
