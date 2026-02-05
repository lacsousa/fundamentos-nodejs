// ['search=Luciano', 'page=2'] => { search: 'Luciano', page: '2' }

export function extractQueryParams(query) {
  if (!query) {
    return {};
  }

  return Object.fromEntries(
    query
      .replace('?', '')
      .split('&')
      .map(param => {
        const [key, value] = param.split('=');
        return [key, value];
      })
  );
}
