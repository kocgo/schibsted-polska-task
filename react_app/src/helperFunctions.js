// Returns debounced (closured) function
export const debounce = (fn, time) => {
  // Closure Variable!!!
  let setTimeoutId;

  // Returns the debounced function
  return function () {
    // args here

    // if setTimeoutId created before, delete!!!
    if (setTimeoutId) clearTimeout(setTimeoutId);

    setTimeoutId = setTimeout(() => {
      // Call the function with arguments
      fn.apply(this, arguments);
    }, time);
  };
};
