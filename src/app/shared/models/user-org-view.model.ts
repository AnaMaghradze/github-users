import {UserOrg} from "./user-org.model";

export interface UserOrgView extends UserOrg{
  "name": string | null,
  "company": string | null;
  "blog": string | null,
  "location": string | null,
  "email": string | null,
  "twitter_username": string | null,
  "is_verified": boolean,
  "has_organization_projects": boolean,
  "has_repository_projects": boolean,
  "public_repos": number,
  "public_gists": number,
  "followers": number,
  "following": number,
  "html_url": string,
  "created_at": string,
  "updated_at": string,
  "type": string;
}
