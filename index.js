/**
   * Builds a url with query parameters
   *
   * @param url
   * @param params
   *
   * @return string
   */
export const urlWithQueryParams = (url, params) => {
  if (!params) return url;

  /* Loop through parameter objects and
   * build a query string.
   */
  const query = Object.entries(params).reduce((acc, current) => {
    const [key, value] = current;

    // If value is empty, don't add to query
    if (!value) return acc;

    // Build query
    return `${acc}&${key}=${value}`;
  }, "");

  return `${url}${query.replace("&", "?")}`;
};