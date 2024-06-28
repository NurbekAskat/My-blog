export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface PostMutation {
  title: string;
  description: string;
  date: string;
}
