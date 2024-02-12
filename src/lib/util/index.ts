import { notFound } from "next/navigation";

/**A function that pauses execution. Can be used to delay api calls */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**this redirects to a 404 error page when a response has a status of 404 */
export const handleResponseError = (res: Response) => {
  const { status, ok } = res;
  if (!ok) {
    if (status === 404) notFound();
    throw new Error(res?.status.toString() ?? "Unknown error");
  }
};
