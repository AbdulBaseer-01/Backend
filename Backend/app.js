require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

const obj = {
  "login": "AbdulBaseer-01",
  "id": 210578209,
  "node_id": "U_kgDODI0rIQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/210578209?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AbdulBaseer-01",
  "html_url": "https://github.com/AbdulBaseer-01",
  "followers_url": "https://api.github.com/users/AbdulBaseer-01/followers",
  "following_url": "https://api.github.com/users/AbdulBaseer-01/following{/other_user}",
  "gists_url": "https://api.github.com/users/AbdulBaseer-01/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AbdulBaseer-01/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AbdulBaseer-01/subscriptions",
  "organizations_url": "https://api.github.com/users/AbdulBaseer-01/orgs",
  "repos_url": "https://api.github.com/users/AbdulBaseer-01/repos",
  "events_url": "https://api.github.com/users/AbdulBaseer-01/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AbdulBaseer-01/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-05-06T16:52:06Z",
  "updated_at": "2025-09-12T14:17:28Z"
}

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/twitter', (req, res) => {
    res.send('Twitter page');
});

app.get('/github', (req, res) => {
    res.json(obj)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});