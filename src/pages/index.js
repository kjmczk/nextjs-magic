import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <h1 className="title">Welcome to Next Magic!</h1>

      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <style jsx>{`
        .title {
          margin: 0;
          font-size: 3rem;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
