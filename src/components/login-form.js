import { useState } from 'react';
import Router from 'next/router';
import { Magic } from 'magic-sdk';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage('');

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
      const didToken = await magic.auth.loginWithMagicLink({
        email: formData.email,
      });
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        Router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setErrorMessage(error.message);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="hello@example.com"
          ref={register({ required: 'Email is required' })}
        />
        {errors.email && (
          <div role="alert" className="error">
            {errors.email.message}
          </div>
        )}
        {errorMessage && (
          <div role="alert" className="error">
            {errorMessage}
          </div>
        )}
      </div>

      <div className="submit">
        <button type="submit">Sign up / Log in</button>
      </div>

      <style jsx>{`
        label {
          font-weight: 600;
        }
        input {
          width: 100%;
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit > button {
          width: 100%;
          color: #fff;
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: #3f51b5;
          border: none;
          border-radius: 4px;
        }
        .submit > button:hover {
          background: #5c6bc0;
        }
        .error {
          color: brown;
          margin-bottom: 1rem;
        }
      `}</style>
    </form>
  );
};

export default LoginForm;
