export interface UserRepo {
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: boolean,
  html_url: string;
  description: string,
  url: string,
}
