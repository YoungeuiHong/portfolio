import type { NextApiRequest, NextApiResponse } from "next";
import { Project, PROJECTS } from "@/data/project";

type ResponseData = {
  project?: Project;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { id } = req.query;

  if (typeof id !== "string") {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  const found = PROJECTS.find((project) => project.id === id);

  if (found) {
    res.status(200).json({ project: found });
  } else {
    res.status(404).json({ error: "Project not found" });
  }
}
