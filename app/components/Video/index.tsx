import React from "react";
import { ExerciseProps } from "../Exercise/types";
import { VideoButtons } from "./VideoButtons";

export const Video: React.FC<ExerciseProps> = ({ currentExercise }) => {
  if (!currentExercise) return null;
  //get fields from currentExercise
  const { url, title } = currentExercise;

  return (
    <div className="flex flex-col items-center justify-center w-full  p-8 gap-4 ">
      <div className="w-full max-w-[1184px]">
        <h4 className="text-[40px] font-bold leading-[46px] text-white mb-4 text-left">
          {title}
        </h4>
      </div>
      {/* Video frame*/}
      <div className="relative w-full max-w-[1184px] h-[671px]">
        <iframe
          src={url}
          className="w-full h-full rounded-lg shadow-lg"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
        {/* Video Buttons */}
        <VideoButtons />
      </div>
    </div>
  );
};
