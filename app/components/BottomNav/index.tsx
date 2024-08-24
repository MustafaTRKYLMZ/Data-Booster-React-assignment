import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { BottomNavProps } from "./types";

export const BottomNav: React.FC<BottomNavProps> = ({
  handleNext,
  handlePrevious,
  currentExerciseIndex,
  exercisesLength,
}) => {
  return (
    <div className="flex items-center fixed bottom-0 left-0 right-0 p-4 bg-[#7000DF] justify-between">
      {/* Previous Button */}
      {currentExerciseIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="flex items-center text-white hover:bg-[#9440e7] px-4 py-2 rounded-[8px] mr-auto"
        >
          <ArrowLeftIcon className="h-12 w-12 mr-2" />
        </button>
      )}
      {/* Next Button */}
      {currentExerciseIndex < exercisesLength - 1 && (
        <button
          onClick={handleNext}
          className="flex items-center text-white hover:bg-[#9440e7] px-4 py-2 rounded-[8px] ml-auto"
        >
          <ArrowRightIcon className="h-12 w-12 ml-2" />
        </button>
      )}
    </div>
  );
};
