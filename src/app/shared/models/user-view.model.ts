import {UserRepo} from "./user-repo.model";
import {UserOrg} from "./user-org.model";
import {User} from "./user.model";

export interface UserView extends User {
  "name": string | null,
  "company": string | null,
  "blog": string | null,
  "location": string | null,
  "email": string | null,
  "hireable": boolean,
  "bio": string | null,
  "twitter_username": string | null,
  "public_repos": number,
  "public_gists": number,
  "followers": number,
  "following": number,
  "created_at": string | null,
  "updated_at": string | null,
  "private_gists": number,
  "total_private_repos": number,
  "owned_private_repos": number,
  "disk_usage": number,
  "collaborators": number,
  "two_factor_authentication": boolean,
  "plan": {
    "name": string | null,
    "space": number,
    "private_repos": number,
    "collaborators": number
  } | null,
  "repos"?: UserRepo[];
  "orgs"?: UserOrg[];

}
