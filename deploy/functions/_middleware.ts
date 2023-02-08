// allow CORS requests
export const onRequest: PagesFunction = async ({ next }) => {
  const response = await next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Max-Age', '86400');
  console.log("Middleware: Setting CORS headers", response.headers);
  return response;
};
