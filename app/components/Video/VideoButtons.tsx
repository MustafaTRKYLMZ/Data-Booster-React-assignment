import {
  HeartIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";

export const VideoButtons = () => {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-4">
      <button className="p-2 bg-black rounded-[8px] hover:bg-gray-700">
        <HeartIcon className="h-8 w-8 text-white" />
      </button>
      <button className="p-2 bg-black rounded-[8px] hover:bg-gray-700">
        <ClockIcon className="h-8 w-8 text-white" />
      </button>
      <button className="p-2 bg-black rounded-[8px] hover:bg-gray-700">
        <PaperAirplaneIcon className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};
