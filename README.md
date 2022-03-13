# Front end Challenge

I am building a simpler version of GitHub search console website so that users can browse & explore. This website includes following 3 pages

Search Page /: User can type in username and show a list of users
Liked Page /liked: User can keep a list of liked users for future reference
User Detail Page /users/:username: User can know more about an individual user

https://huyluong-github-user-search.herokuapp.com/

## User story

### Basic
- [x] As a user, I can search users based on username and view a list of user cards with pagination
- [x] As a user, within the list, I can see username, avatar image, followers count and following count on each card (App will not show follower + following number while api rate limits)
- [x] As a user, I can like & unlike users while searching & browsing
- [x] As a user, I can view a list of liked users (preserve after refreshing the browsers)
- [x] As a user, I can view a specific user's information, including name, contact info, lists of repositories, list of followers & list of following users.

### Bonus
- [x] As a user, I can view & use this website via desktop as well as mobile
- [x] As a user, I can copy & paste current website url and it will always show the same contents under the same browser
- [x] As a user, I can search as I type without manually clicking a search button

## Design Materials

### Basic
- [x] Create the website following this design file on figma

### Bonus
- [x] A default or fallback image will be better.
- [x] Search Page will display pagination tab if needed (we will not enforce Liked Page)
- [x] Loading, error, and empty states are properly handled

## Technical Requirements

### Basic:
- [x] Consume GitHub API
- [x] This website must be built using React. React frameworks are welcome
- [x] Redux is used for state management
- [x] CSS-in-JS solutions is used
- [x] This website is production ready and deployed with a url: https://huyluong-github-user-search.herokuapp.com/

### Bonus:
- [x] Written in TypeScript (please explain if any is used)
  - `src/action/action.ts:118`: `any` was used since respone from Github API could change
  - `src/components/UserDetailsList.tsx:19`: `any` was used since `repoList`/`followerList`/`followingList`could exist or not
- [x] All pages are server-side rendered (can be static)
- [x] Pay attention to user experience (UX) when fetching data from API, navigating between pages & loading large contents.
- [x] Support dark mode

## Process for local development:
1. Set up project using `create-react-app`
2. Setup express server for server-side rendering
3. Handle webpack config
4. Setup styling with server-side rendering with `styled-component`
5. Support dark mode 
6. Setup redux with server-side rendering (using `redux-thunk` middleware) 
7. Setup redux-persist with server-side rendering save state and prevent loosing data when reload
8. Using `react-router-dom` to handle routing 
9. Create components and working on handling feature:
  - Using `styled-component` for styling
  - Using `react-tabs` to show tab in `UserDetailPage`
  - Handle URL so that we can copy url and paste to show the same content (using `querystring` to parse url)
  - Using `styled-icons` for icon such as github icon, like icon...
10. Fix bugs
11. Handle deploy to Heroku

## TODO:
- [ ] Pagination in `UserDetailPage`
- [ ] Add loading in `UserDetailPage` when load repo list / followers list / following list
- [ ] Caching search user result in Redux base on searchTerm and page as a key eg: Redux format: `users: { [searchTerm]: {[page1]: search result}}`
- [ ] Adjust size of UserCard with `max-height`
- [ ] Loading followers and following user's info in UserDetail Page
- [ ] Enable like user in follower and following user in UserDetail Page
- [ ] Allow unlike user in Liked page
- [ ] Remains old search result when coming back from UserDetailPage
