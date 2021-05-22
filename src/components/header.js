import { useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '../utils/hooks';

const Header = () => {
  const { user, error, mutate } = useUser();

  useEffect(() => {
    if (!error && user === null) mutate();
  }, [user, error, mutate]);

  return (
    <header>
      <nav>
        <Link href="/">
          <a>Next Magic</a>
        </Link>

        <ul>
          {user ? (
            <>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <style jsx>{`
        header {
          color: #fff;
          background-color: #333;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
