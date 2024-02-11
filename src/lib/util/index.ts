/**A function that pauses execution. Can be used to delay api calls */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
