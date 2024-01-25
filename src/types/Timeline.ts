import { CareerDescription } from "@/types/Description";

export interface TimelineInfo {
  time: string;
  name: string;
  content?: string;
  icon?: string;
  main?: boolean;
  mainDescription?: CareerDescription;
}
