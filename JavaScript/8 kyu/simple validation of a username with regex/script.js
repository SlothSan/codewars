function validateUsr(username) {
  res = /^([a-z0-9_]){4,12}$/.test(username);
  return res;
}
