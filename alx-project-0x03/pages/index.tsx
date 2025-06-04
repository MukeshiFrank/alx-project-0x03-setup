// pages/index.tsx
import Head from 'next/head';
import { HomeProps } from '../interface';

const Home = ({ title }: HomeProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-purple-600">{title}</h1>
        <p className="text-lg mt-4 text-gray-700">Welcome to our homepage!</p>
      </main>
    </>
  );
};

export default Home;

// Optionally: If using getStaticProps
export const getStaticProps = async () => {
  return {
    props: {
      title: 'Welcome to My Next.js App!',
    },
  };
};
