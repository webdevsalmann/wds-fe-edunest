import { chapter } from "./schemas/chapter";
import { courses } from "./schemas/courses";
import { instructor } from "./schemas/instructor";

export const schema = {
  types: [courses, chapter, instructor],
}
