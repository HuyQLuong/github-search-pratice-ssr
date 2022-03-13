export const ROUTES = [
    {
      exact: true,
      path: '/',
      title: 'Search',
      element: 'SearchPage'
    },
    {
      exact: true,
      path: '/user',
      title: 'User',
      element: 'UserPage'
    },
    {
        exact: true,
        path: '/liked',
        title: 'Favorite',
        element: 'LikePage'
    }
];

export const MAP_ROUTE_TO_TITLE = {
  'search': 'Search',
  'searchEmpty': 'Search-Empty',
  'pageExceed': 'Page-Exceed',
  'liked': 'Favorite',
  'user':  'User',
}