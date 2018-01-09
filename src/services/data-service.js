const dataService = () => next => (action) => {
  next(action);
  switch (action.type) {
    case 'SEARCH_MEDIA':
      fetch(`https://itunes.apple.com/search?term=${action.terms}`)
        .then(results => results && results.json())
        .then(data => next({
          type: 'MEDIA_DATA_RECEIVED',
          data,
        }))
        .catch(() => {
          // ignore error
        });
      break;

    default:
  }
};

export default dataService;
