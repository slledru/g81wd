function loadLocalStorage() {
  const storage = JSON.parse(localStorage.getItem('keys'));
  return storage;
}
