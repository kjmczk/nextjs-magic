import { magic } from '../../utils/magic';
import { encryptSession } from '../../utils/iron';
import { setTokenCookie } from '../../utils/auth-cookies';

export default async function login(req, res) {
  try {
    const didToken = req.headers.authorization.substring(7);
    const metadata = await magic.users.getMetadataByToken(didToken);
    const session = { ...metadata };
    // The token is a string with the encrypted session
    const token = await encryptSession(session);
    setTokenCookie(res, token);
    res.status(200).send({ done: true });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
