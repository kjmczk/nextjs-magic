import { magic } from '../../utils/magic';
import { getSession } from '../../utils/iron';
import { removeTokenCookie } from '../../utils/auth-cookies';

export default async function logout(req, res) {
  const session = await getSession(req);
  await magic.users.logoutByIssuer(session.issuer);
  removeTokenCookie(res);
  res.writeHead(302, { Location: '/' });
  res.end();
}
