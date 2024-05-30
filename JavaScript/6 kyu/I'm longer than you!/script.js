const longer = (s) =>
  s
    .split(" ")
    .sort((a, b) => {
      if (a.length > b.length) return 1;
      if (a.length < b.length) return -1;
      if (a.length === b.length) {
        if (a > b) return 1;
        if (a < b) return -1;
      }
    })
    .join(" ");
