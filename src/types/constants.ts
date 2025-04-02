export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  tags: string[];
}