export const formatNumber = (n, decimals) => n.toFixed(decimals).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const setItemLocalStorage = (key, val) => {
  localStorage.setItem(key, val);
};

export const removeItemLocalStorage = (key) => {
  localStorage.removeItem(key);
};
