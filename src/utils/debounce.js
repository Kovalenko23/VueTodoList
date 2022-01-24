const debounce = (fn, ms) => {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
      fn.apply(this, arguments);
    }, ms)
  }
};

export default debounce;
