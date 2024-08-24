// app/components/LessonPage.tsx
import React from "react";
import { ExerciseProps } from "./types";
import { Video } from "../Video";
import { MultipleChoose } from "../MultipleChoose";

export const Exercise: React.FC<ExerciseProps> = ({ currentExercise }) => {
  //check if currentExercise is empty
  if (!currentExercise) return <div>Exercise not found</div>;
  return (
    <>
      {currentExercise?.resourcetype === "VideoExercise" ? (
        <Video currentExercise={currentExercise} />
      ) : (
        <MultipleChoose currentExercise={currentExercise} />
      )}
    </>
  );
};
