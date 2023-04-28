// pages/api/auth/logout.ts
// COGNITO_AUTH_URL=https://<id>.auth.<region>.amazoncognito.com
// Using https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html
//not sure if this endpoint is utilized in the flow - doubt it is being used but it was supposed to clear session cookies

const clearCookieOptions = `Max-Age=-1; Path=/; Secure; HttpOnly;`;

export default async function handler(req, res) {
  const url = new URL("/logout", process.env.COGNITO_AUTH_URL);
  url.searchParams.set("client_id", process.env.COGNITO_CLIENT_ID);
  url.searchParams.set("logout_uri", process.env.NEXTAUTH_URL);

  const cookies = Object.keys(req.cookies ?? {}).map(
    (cookie) => `${cookie}=; ${clearCookieOptions}`
  );

  if (cookies.length) {
    res.setHeader("Set-Cookie", cookies);
  }

  res.redirect(url.href);
}
