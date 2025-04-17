export interface BlogPost {
  id: number;
  createdAt: string;
  preview: string;
  title: string;
  // image: string;
  description: string;
}

export type BlogPosts = BlogPost[];
