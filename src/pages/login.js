import Layout from '../components/layout';
import LoginForm from '../components/login-form';
import { useUser } from '../utils/hooks';

const Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  return (
    <Layout>
      <div className="login">
        <LoginForm />
      </div>

      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #fafafa;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
