//   /users/:id/posts/:postId   => /users/123/posts/456
//   /users/123/posts/456   =>  { id: '123', postId: '456' }

export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  
  const pathWithParams = path.replace(
    routeParametersRegex,
    '(?<$1>[a-zA-Z0-9-_]+)'
  );
  
  return new RegExp(`^${pathWithParams}$`);
}
