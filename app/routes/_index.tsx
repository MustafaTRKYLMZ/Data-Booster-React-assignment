import { MetaFunction, useLoaderData } from "@remix-run/react";
import { Lesson } from "~/types/lesson";
import { useState } from "react";
import { BottomNav } from "~/components/BottomNav";
import { Exercise } from "~/components/Exercise";

export const meta: MetaFunction = () => {
  return [
    { title: "Data React Assignment" },
    { name: "description", content: "Lessons" },
  ];
};

export const loader = async () => {
  try {
    const response = await fetch(
      "https://file.notion.so/f/f/cd74cad4-cce3-4fdd-9a18-0627766a890c/2fdf025f-683f-4b46-8533-c68c5a0344c8/lessons.json?table=block&id=f9e38ad5-6051-4f38-8ec1-bb5f1fcd74e5&spaceId=cd74cad4-cce3-4fdd-9a18-0627766a890c&expirationTimestamp=1724608800000&signature=zt6jBD-tBKH0eggh1eZRyl0aO00EbXQZi_AHdrM-mcI&downloadName=lessons.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const lessons = data?.lessons;
    return { lessons };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};

export default function LessonRoute() {
  const { lessons, error } = useLoaderData<{
    lessons: Lesson[];
    error?: string;
  }>();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const exercises = lessons?.flatMap((lesson) => lesson.exercises);
  //get currentExercise exercise
  const currentExercise = exercises[currentExerciseIndex];
  //next exercise
  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    }
  };
  //previous exercise
  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-[#7000DF] min-h-screen flex flex-col items-center justify-center">
      {error && (
        <div className="text-red-500 p-4">
          <p>{error}</p>
        </div>
      )}
      <Exercise currentExercise={currentExercise} />
      {/* Bottom Navigation */}
      <BottomNav
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentExerciseIndex={currentExerciseIndex}
        exercisesLength={exercises.length}
      />
    </div>
  );
}
