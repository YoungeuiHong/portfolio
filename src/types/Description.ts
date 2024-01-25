export interface Description {
  title: string;
  type: "string" | "ReactNode";
  content: any;
}

export interface CareerDescription {
  date: string;
  content: string;
  techStack: string[];
}
