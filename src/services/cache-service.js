
export function saveState(state) {
  localStorage.setItem('state', JSON.stringify(state))
}

export function fetchState() {
  return JSON.parse(localStorage.getItem('state') || '{}')
}