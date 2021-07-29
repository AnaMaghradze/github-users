import {TestBed} from '@angular/core/testing';

import {GhUserService} from './gh-user.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {User} from "../models/user.interface";
import {HttpClient} from "@angular/common/http";
import {UserOrg} from "../models/user-org.interface";
import {UserRepo} from "../models/user-repo.interface";

describe('GhUserService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: GhUserService;
  const expectedUsers = [
    {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "defunkt",
      "id": 2,
      "node_id": "MDQ6VXNlcjI=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/defunkt",
      "html_url": "https://github.com/defunkt",
      "followers_url": "https://api.github.com/users/defunkt/followers",
      "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
      "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
      "organizations_url": "https://api.github.com/users/defunkt/orgs",
      "repos_url": "https://api.github.com/users/defunkt/repos",
      "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
      "received_events_url": "https://api.github.com/users/defunkt/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "pjhyett",
      "id": 3,
      "node_id": "MDQ6VXNlcjM=",
      "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pjhyett",
      "html_url": "https://github.com/pjhyett",
      "followers_url": "https://api.github.com/users/pjhyett/followers",
      "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
      "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
      "organizations_url": "https://api.github.com/users/pjhyett/orgs",
      "repos_url": "https://api.github.com/users/pjhyett/repos",
      "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pjhyett/received_events",
      "type": "User",
      "site_admin": false
    }
  ] as User[];
  const testUser = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tom Preston-Werner",
    "company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
    "blog": "http://tom.preston-werner.com",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "mojombo",
    "public_repos": 62,
    "public_gists": 62,
    "followers": 22611,
    "following": 11,
    "created_at": "2007-10-20T05:24:19Z",
    "updated_at": "2021-07-27T17:01:20Z",
    "repos": [
      {
        "id": 26899533,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
        "name": "30daysoflaptops.github.io",
        "full_name": "mojombo/30daysoflaptops.github.io",
        "private": false,
        "owner": {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/mojombo/30daysoflaptops.github.io",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io",
        "forks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/forks",
        "keys_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/teams",
        "hooks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/hooks",
        "issue_events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/events{/number}",
        "events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/events",
        "assignees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/assignees{/user}",
        "branches_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/branches{/branch}",
        "tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/tags",
        "blobs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/languages",
        "stargazers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/stargazers",
        "contributors_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contributors",
        "subscribers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscribers",
        "subscription_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscription",
        "commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contents/{+path}",
        "compare_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/merges",
        "archive_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/downloads",
        "issues_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues{/number}",
        "pulls_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/labels{/name}",
        "releases_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/releases{/id}",
        "deployments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/deployments",
        "created_at": "2014-11-20T06:42:06Z",
        "updated_at": "2021-04-03T10:15:42Z",
        "pushed_at": "2014-11-20T06:42:47Z",
        "git_url": "git://github.com/mojombo/30daysoflaptops.github.io.git",
        "ssh_url": "git@github.com:mojombo/30daysoflaptops.github.io.git",
        "clone_url": "https://github.com/mojombo/30daysoflaptops.github.io.git",
        "svn_url": "https://github.com/mojombo/30daysoflaptops.github.io",
        "homepage": null,
        "size": 1197,
        "stargazers_count": 7,
        "watchers_count": 7,
        "language": "CSS",
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 2,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 2,
        "open_issues": 0,
        "watchers": 7,
        "default_branch": "gh-pages"
      },
      {
        "id": 17358646,
        "node_id": "MDEwOlJlcG9zaXRvcnkxNzM1ODY0Ng==",
        "name": "asteroids",
        "full_name": "mojombo/asteroids",
        "private": false,
        "owner": {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/mojombo/asteroids",
        "description": "Destroy your Atom editor, Asteroids style!",
        "fork": false,
        "url": "https://api.github.com/repos/mojombo/asteroids",
        "forks_url": "https://api.github.com/repos/mojombo/asteroids/forks",
        "keys_url": "https://api.github.com/repos/mojombo/asteroids/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/mojombo/asteroids/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/mojombo/asteroids/teams",
        "hooks_url": "https://api.github.com/repos/mojombo/asteroids/hooks",
        "issue_events_url": "https://api.github.com/repos/mojombo/asteroids/issues/events{/number}",
        "events_url": "https://api.github.com/repos/mojombo/asteroids/events",
        "assignees_url": "https://api.github.com/repos/mojombo/asteroids/assignees{/user}",
        "branches_url": "https://api.github.com/repos/mojombo/asteroids/branches{/branch}",
        "tags_url": "https://api.github.com/repos/mojombo/asteroids/tags",
        "blobs_url": "https://api.github.com/repos/mojombo/asteroids/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/mojombo/asteroids/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/mojombo/asteroids/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/mojombo/asteroids/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/mojombo/asteroids/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/mojombo/asteroids/languages",
        "stargazers_url": "https://api.github.com/repos/mojombo/asteroids/stargazers",
        "contributors_url": "https://api.github.com/repos/mojombo/asteroids/contributors",
        "subscribers_url": "https://api.github.com/repos/mojombo/asteroids/subscribers",
        "subscription_url": "https://api.github.com/repos/mojombo/asteroids/subscription",
        "commits_url": "https://api.github.com/repos/mojombo/asteroids/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/mojombo/asteroids/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/mojombo/asteroids/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/mojombo/asteroids/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/mojombo/asteroids/contents/{+path}",
        "compare_url": "https://api.github.com/repos/mojombo/asteroids/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/mojombo/asteroids/merges",
        "archive_url": "https://api.github.com/repos/mojombo/asteroids/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/mojombo/asteroids/downloads",
        "issues_url": "https://api.github.com/repos/mojombo/asteroids/issues{/number}",
        "pulls_url": "https://api.github.com/repos/mojombo/asteroids/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/mojombo/asteroids/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/mojombo/asteroids/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/mojombo/asteroids/labels{/name}",
        "releases_url": "https://api.github.com/repos/mojombo/asteroids/releases{/id}",
        "deployments_url": "https://api.github.com/repos/mojombo/asteroids/deployments",
        "created_at": "2014-03-03T07:40:00Z",
        "updated_at": "2021-04-17T13:08:46Z",
        "pushed_at": "2015-03-10T18:18:16Z",
        "git_url": "git://github.com/mojombo/asteroids.git",
        "ssh_url": "git@github.com:mojombo/asteroids.git",
        "clone_url": "https://github.com/mojombo/asteroids.git",
        "svn_url": "https://github.com/mojombo/asteroids",
        "homepage": null,
        "size": 185,
        "stargazers_count": 93,
        "watchers_count": 93,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 13,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 3,
        "license": {
          "key": "other",
          "name": "Other",
          "spdx_id": "NOASSERTION",
          "url": null,
          "node_id": "MDc6TGljZW5zZTA="
        },
        "forks": 13,
        "open_issues": 3,
        "watchers": 93,
        "default_branch": "master"
      },
      {
        "id": 29941343,
        "node_id": "MDEwOlJlcG9zaXRvcnkyOTk0MTM0Mw==",
        "name": "benbalter.github.com",
        "full_name": "mojombo/benbalter.github.com",
        "private": false,
        "owner": {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/mojombo/benbalter.github.com",
        "description": "The personal website of Ben Balter. Built using Jekyll and GitHub Pages. See humans.txt for more infos.",
        "fork": true,
        "url": "https://api.github.com/repos/mojombo/benbalter.github.com",
        "forks_url": "https://api.github.com/repos/mojombo/benbalter.github.com/forks",
        "keys_url": "https://api.github.com/repos/mojombo/benbalter.github.com/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/mojombo/benbalter.github.com/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/mojombo/benbalter.github.com/teams",
        "hooks_url": "https://api.github.com/repos/mojombo/benbalter.github.com/hooks",
        "issue_events_url": "https://api.github.com/repos/mojombo/benbalter.github.com/issues/events{/number}",
        "events_url": "https://api.github.com/repos/mojombo/benbalter.github.com/events",
        "assignees_url": "https://api.github.com/repos/mojombo/benbalter.github.com/assignees{/user}",
        "branches_url": "https://api.github.com/repos/mojombo/benbalter.github.com/branches{/branch}",
        "tags_url": "https://api.github.com/repos/mojombo/benbalter.github.com/tags",
        "blobs_url": "https://api.github.com/repos/mojombo/benbalter.github.com/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/mojombo/benbalter.github.com/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/mojombo/benbalter.github.com/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/mojombo/benbalter.github.com/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/mojombo/benbalter.github.com/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/mojombo/benbalter.github.com/languages",
        "stargazers_url": "https://api.github.com/repos/mojombo/benbalter.github.com/stargazers",
        "contributors_url": "https://api.github.com/repos/mojombo/benbalter.github.com/contributors",
        "subscribers_url": "https://api.github.com/repos/mojombo/benbalter.github.com/subscribers",
        "subscription_url": "https://api.github.com/repos/mojombo/benbalter.github.com/subscription",
        "commits_url": "https://api.github.com/repos/mojombo/benbalter.github.com/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/mojombo/benbalter.github.com/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/mojombo/benbalter.github.com/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/mojombo/benbalter.github.com/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/mojombo/benbalter.github.com/contents/{+path}",
        "compare_url": "https://api.github.com/repos/mojombo/benbalter.github.com/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/mojombo/benbalter.github.com/merges",
        "archive_url": "https://api.github.com/repos/mojombo/benbalter.github.com/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/mojombo/benbalter.github.com/downloads",
        "issues_url": "https://api.github.com/repos/mojombo/benbalter.github.com/issues{/number}",
        "pulls_url": "https://api.github.com/repos/mojombo/benbalter.github.com/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/mojombo/benbalter.github.com/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/mojombo/benbalter.github.com/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/mojombo/benbalter.github.com/labels{/name}",
        "releases_url": "https://api.github.com/repos/mojombo/benbalter.github.com/releases{/id}",
        "deployments_url": "https://api.github.com/repos/mojombo/benbalter.github.com/deployments",
        "created_at": "2015-01-27T23:54:05Z",
        "updated_at": "2021-01-13T19:44:45Z",
        "pushed_at": "2015-01-27T23:54:33Z",
        "git_url": "git://github.com/mojombo/benbalter.github.com.git",
        "ssh_url": "git@github.com:mojombo/benbalter.github.com.git",
        "clone_url": "https://github.com/mojombo/benbalter.github.com.git",
        "svn_url": "https://github.com/mojombo/benbalter.github.com",
        "homepage": "http://ben.balter.com",
        "size": 20836,
        "stargazers_count": 5,
        "watchers_count": 5,
        "language": "CSS",
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": false,
        "forks_count": 7,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 7,
        "open_issues": 0,
        "watchers": 5,
        "default_branch": "master"
      }
    ],
    "orgs": [
      {
        "login": "toml-lang",
        "id": 7966854,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjc5NjY4NTQ=",
        "url": "https://api.github.com/orgs/toml-lang",
        "repos_url": "https://api.github.com/orgs/toml-lang/repos",
        "events_url": "https://api.github.com/orgs/toml-lang/events",
        "hooks_url": "https://api.github.com/orgs/toml-lang/hooks",
        "issues_url": "https://api.github.com/orgs/toml-lang/issues",
        "members_url": "https://api.github.com/orgs/toml-lang/members{/member}",
        "public_members_url": "https://api.github.com/orgs/toml-lang/public_members{/member}",
        "avatar_url": "https://avatars.githubusercontent.com/u/7966854?v=4",
        "description": "Tom's Obvious, Minimal Language (and friends)"
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [GhUserService]});
    userService = TestBed.inject(GhUserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  // test getUsers()
  describe("getUsers", () => {

    beforeEach(() => {
      userService = TestBed.inject(GhUserService);
    });

    it('should return expected users', () => {
      userService.getUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'should return expected users')
      );
      // userService should make one request to GET users from URL
      const req = httpTestingController.expectOne(`${userService.url}users?per_page=10`);
      expect(req.request.method).toEqual('GET');
      // Respond with the mock users
      req.flush(expectedUsers);
    });

    it('should be ok when returning no users', () => {
      userService.getUsers().subscribe(
        users => expect(users.length).toEqual(0, 'should have empty users array')
      );
      const req = httpTestingController.expectOne(`${userService.url}users?per_page=10`);
      req.flush([]);
    });

    it('should return expected users (multiple times)', () => {
      userService.getUsers().subscribe();
      userService.getUsers().subscribe();
      userService.getUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'could not return expected users'),
        fail
      );

      const requests = httpTestingController.match(`${userService.url}users?per_page=10`);
      expect(requests.length).toEqual(3, 'should call getUsers()');

      requests[0].flush([]);
      requests[1].flush([{
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
      },]);
      requests[2].flush(expectedUsers);
    });
  });

  // ************  test getUser() ************
  describe('getUser', () => {
    const url = (username: string) => `${userService.url}users/${username}`;

    it('should return expected users with repos and orgs', () => {
      userService.getUser(testUser.login).subscribe(
        user => expect(user).toEqual(user, 'should return expected user')
      );
      // userService should make one request to GET user from URL
      const req = httpTestingController.expectOne(url(testUser.login));
      expect(req.request.method).toEqual('GET');
      // Respond with the mock user
      req.flush(testUser);
    });
  });

  // ************  test getUserOrgs() ************
  describe('getUserOrgs', () => {
    const url = (username: string) => `${userService.url}users/${username}/orgs`;
    const testOrgs: UserOrg[] = [
      {
        "login": "toml-lang",
        "id": 7966854,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjc5NjY4NTQ=",
        "url": "https://api.github.com/orgs/toml-lang",
        "repos_url": "https://api.github.com/orgs/toml-lang/repos",
        "events_url": "https://api.github.com/orgs/toml-lang/events",
        "hooks_url": "https://api.github.com/orgs/toml-lang/hooks",
        "issues_url": "https://api.github.com/orgs/toml-lang/issues",
        "members_url": "https://api.github.com/orgs/toml-lang/members{/member}",
        "public_members_url": "https://api.github.com/orgs/toml-lang/public_members{/member}",
        "avatar_url": "https://avatars.githubusercontent.com/u/7966854?v=4",
        "description": "Tom's Obvious, Minimal Language (and friends)"
      }
    ];

    it('should return expected organizations for specific user', () => {
      userService.getUserOrgs(testUser.login).subscribe(
        orgs => expect(orgs).toEqual(testOrgs, 'should return expected organizations for specific user')
      );
      // userService should make one request to GET user orgs from URL
      const req = httpTestingController.expectOne(url(testUser.login));
      expect(req.request.method).toEqual('GET');
      // Respond with the mock userOrgs
      req.flush(testOrgs);
    });

    it('should be ok when returning no orgs', () => {
      userService.getUserOrgs(testUser.login).subscribe(
        orgs => expect(orgs.length).toEqual(0, 'should have empty orgs array')
      );
      const req = httpTestingController.expectOne(url(testUser.login));
      req.flush([]);
    });
  });

  // ************  test getUserOrgDetails() ************
  describe('getUserOrgDetails', () => {
    const url = (orgName: string) => `${userService.url}orgs/${orgName}`;
    const testOrg: UserOrg = {
      "login": "toml-lang",
      "id": 7966854,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjc5NjY4NTQ=",
      "url": "https://api.github.com/orgs/toml-lang",
      "repos_url": "https://api.github.com/orgs/toml-lang/repos",
      "events_url": "https://api.github.com/orgs/toml-lang/events",
      "hooks_url": "https://api.github.com/orgs/toml-lang/hooks",
      "issues_url": "https://api.github.com/orgs/toml-lang/issues",
      "members_url": "https://api.github.com/orgs/toml-lang/members{/member}",
      "public_members_url": "https://api.github.com/orgs/toml-lang/public_members{/member}",
      "avatar_url": "https://avatars.githubusercontent.com/u/7966854?v=4",
      "description": "Tom's Obvious, Minimal Language (and friends)",
      "name": "TOML",
      "company": null,
      "blog": null,
      "location": null,
      "email": null,
      "twitter_username": null,
      "is_verified": false,
      "has_organization_projects": true,
      "has_repository_projects": true,
      "public_repos": 3,
      "public_gists": 0,
      "followers": 0,
      "following": 0,
      "html_url": "https://github.com/toml-lang",
      "created_at": "2014-06-23T16:26:20Z",
      "updated_at": "2020-05-28T15:58:07Z",
      "type": "Organization"
    };

    it('should return expected organization', () => {
      userService.getUserOrgDetails(testOrg.login).subscribe(
        org => expect(org).toEqual(testOrg, 'should return expected organization')
      );
      // userService should make one request to GET org from URL
      const req = httpTestingController.expectOne(url(testOrg.login));
      expect(req.request.method).toEqual('GET');
      // Respond with the mock org
      req.flush(testOrg);
    });
  });

  // ************  test getUserRepos() ************
  describe('getUserRepos', () => {
    const url = (username: string) => `${userService.url}users/${username}/repos`;
    const testRepos: UserRepo[] = [
      {
        "id": 26899533,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
        "name": "30daysoflaptops.github.io",
        "full_name": "mojombo/30daysoflaptops.github.io",
        "private": false,
        "owner": {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/mojombo/30daysoflaptops.github.io",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io",
        "forks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/forks",
        "keys_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/teams",
        "hooks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/hooks",
        "issue_events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/events{/number}",
        "events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/events",
        "assignees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/assignees{/user}",
        "branches_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/branches{/branch}",
        "tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/tags",
        "blobs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/languages",
        "stargazers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/stargazers",
        "contributors_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contributors",
        "subscribers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscribers",
        "subscription_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscription",
        "commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contents/{+path}",
        "compare_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/merges",
        "archive_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/downloads",
        "issues_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues{/number}",
        "pulls_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/labels{/name}",
        "releases_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/releases{/id}",
        "deployments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/deployments",
        "created_at": "2014-11-20T06:42:06Z",
        "updated_at": "2021-04-03T10:15:42Z",
        "pushed_at": "2014-11-20T06:42:47Z",
        "git_url": "git://github.com/mojombo/30daysoflaptops.github.io.git",
        "ssh_url": "git@github.com:mojombo/30daysoflaptops.github.io.git",
        "clone_url": "https://github.com/mojombo/30daysoflaptops.github.io.git",
        "svn_url": "https://github.com/mojombo/30daysoflaptops.github.io",
        "homepage": null,
        "size": 1197,
        "stargazers_count": 7,
        "watchers_count": 7,
        "language": "CSS",
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 2,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 2,
        "open_issues": 0,
        "watchers": 7,
        "default_branch": "gh-pages"
      },
      {
        "id": 17358646,
        "node_id": "MDEwOlJlcG9zaXRvcnkxNzM1ODY0Ng==",
        "name": "asteroids",
        "full_name": "mojombo/asteroids",
        "private": false,
        "owner": {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/mojombo/asteroids",
        "description": "Destroy your Atom editor, Asteroids style!",
        "fork": false,
        "url": "https://api.github.com/repos/mojombo/asteroids",
        "forks_url": "https://api.github.com/repos/mojombo/asteroids/forks",
        "keys_url": "https://api.github.com/repos/mojombo/asteroids/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/mojombo/asteroids/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/mojombo/asteroids/teams",
        "hooks_url": "https://api.github.com/repos/mojombo/asteroids/hooks",
        "issue_events_url": "https://api.github.com/repos/mojombo/asteroids/issues/events{/number}",
        "events_url": "https://api.github.com/repos/mojombo/asteroids/events",
        "assignees_url": "https://api.github.com/repos/mojombo/asteroids/assignees{/user}",
        "branches_url": "https://api.github.com/repos/mojombo/asteroids/branches{/branch}",
        "tags_url": "https://api.github.com/repos/mojombo/asteroids/tags",
        "blobs_url": "https://api.github.com/repos/mojombo/asteroids/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/mojombo/asteroids/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/mojombo/asteroids/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/mojombo/asteroids/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/mojombo/asteroids/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/mojombo/asteroids/languages",
        "stargazers_url": "https://api.github.com/repos/mojombo/asteroids/stargazers",
        "contributors_url": "https://api.github.com/repos/mojombo/asteroids/contributors",
        "subscribers_url": "https://api.github.com/repos/mojombo/asteroids/subscribers",
        "subscription_url": "https://api.github.com/repos/mojombo/asteroids/subscription",
        "commits_url": "https://api.github.com/repos/mojombo/asteroids/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/mojombo/asteroids/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/mojombo/asteroids/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/mojombo/asteroids/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/mojombo/asteroids/contents/{+path}",
        "compare_url": "https://api.github.com/repos/mojombo/asteroids/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/mojombo/asteroids/merges",
        "archive_url": "https://api.github.com/repos/mojombo/asteroids/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/mojombo/asteroids/downloads",
        "issues_url": "https://api.github.com/repos/mojombo/asteroids/issues{/number}",
        "pulls_url": "https://api.github.com/repos/mojombo/asteroids/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/mojombo/asteroids/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/mojombo/asteroids/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/mojombo/asteroids/labels{/name}",
        "releases_url": "https://api.github.com/repos/mojombo/asteroids/releases{/id}",
        "deployments_url": "https://api.github.com/repos/mojombo/asteroids/deployments",
        "created_at": "2014-03-03T07:40:00Z",
        "updated_at": "2021-04-17T13:08:46Z",
        "pushed_at": "2015-03-10T18:18:16Z",
        "git_url": "git://github.com/mojombo/asteroids.git",
        "ssh_url": "git@github.com:mojombo/asteroids.git",
        "clone_url": "https://github.com/mojombo/asteroids.git",
        "svn_url": "https://github.com/mojombo/asteroids",
        "homepage": null,
        "size": 185,
        "stargazers_count": 93,
        "watchers_count": 93,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 13,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 3,
        "license": {
          "key": "other",
          "name": "Other",
          "spdx_id": "NOASSERTION",
          "url": null,
          "node_id": "MDc6TGljZW5zZTA="
        },
        "forks": 13,
        "open_issues": 3,
        "watchers": 93,
        "default_branch": "master"
      }
    ];

    it('should return expected repos for specific user', () => {
      userService.getUserRepos(testUser.login).subscribe(
        repos => expect(repos).toEqual(testRepos, 'should return expected repos for specific user')
      );
      // userService should make one request to GET user repos from URL
      const req = httpTestingController.expectOne(url(testUser.login));
      expect(req.request.method).toEqual('GET');
      // Respond with the mock userRepos
      req.flush(testRepos);
    });

    it('should be ok when returning no repos', () => {
      userService.getUserRepos(testUser.login).subscribe(
        repos => expect(repos.length).toEqual(0, 'should have empty repos array')
      );
      const req = httpTestingController.expectOne(url(testUser.login));
      req.flush([]);
    });
  });
});
