export type Answer = {
  id: string;
  answer: string;
  resourcetype: string;
};

export type Exercise = {
  id: string;
  title: string;
  course_id: string;
  next_exercise_id?: string | null;
  previous_exercise_id?: string | null;
  is_completed: boolean;
  answers: Answer[];
  description: string;
  hint: string;
  order: number;
  lesson: string;
  resourcetype: string;
  url?: string;
};

export type Lesson = {
  id: string;
  title: string;
  exercises: Exercise[];
  order: number;
  chapter: string;
};
