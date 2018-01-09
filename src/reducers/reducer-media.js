export default function (state = null, action) {
  switch (action.type) {
    case 'MEDIA_DATA_RECEIVED':
      return action.data.results;
    default:
  }
  return state;
}
