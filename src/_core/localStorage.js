export const loadState = () => {
  const state = localStorage.getItem('state');
  try {
    if (state === null) return {};
    return JSON.parse(state);
  } catch (err) {
    return { err };
  }
};

export const saveState = value => {
  try {
    const state = JSON.stringify(value);
    localStorage.setItem('state', state);
  } catch (err) {
    return { err };
  }
};
