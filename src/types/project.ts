type ProjectType = {
  image: string;
  title: string;
  mainLink: string;
  description?: string; // Optional field for project description
  githubLink?: string; // Optional field for GitHub link
  yearCreated: number; // Optional field for the year the project was created
  lastYearUpdated?: number; // Optional field for the last year the project was updated
};

export default ProjectType;
