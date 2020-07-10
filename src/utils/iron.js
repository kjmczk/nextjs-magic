import Iron from '@hapi/iron';
import { getTokenCookie } from './auth-cookies';

export function encryptSession(session) {
  return Iron.seal(session, process.env.TOKEN_SECRET, Iron.defaults);
}

export function getSession(req) {
  const token = getTokenCookie(req);
  return token && Iron.unseal(token, process.env.TOKEN_SECRET, Iron.defaults);
}
