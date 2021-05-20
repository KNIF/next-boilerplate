import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

const Index = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Next-Boilerplate</title>
      </Head>
      <main>
        <div className='min-h-screen lg:flex text-lg'>
          {/* left side */}
          <div className='lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left'>
            <h2 className='inter text-4xl mb-3 font-bold text-gray-800'>
              Next-Boilerplate
              <span className='block text-blue-500 text-2xl font-normal'>
                by{' '}
                <a
                  href='https://github.com/KNIF'
                  target='_blank'
                  rel='noreferrer'
                  className='underline'
                >
                  KNIF
                </a>
              </span>
            </h2>

            <p className='text-gray-700 mb-6'>
              Next.js, Typescript, Tailwind, Next-Auth, FaunaDB, Meilisearch,
              Google Analytics, Sentry, Cypress, SWR, Axios
            </p>

            <div className='sm:flex'>
              <button
                onClick={() => signIn()}
                className='block py-2 px-5 rounded shadow bg-blue-500 text-blue-100 sm:mr-2 mb-2 sm:mb-0'
              >
                Login
              </button>
              <button
                onClick={() => signOut()}
                className='block py-2 px-5 rounded shadow bg-gray-500 text-gray-100 sm:mr-2 mb-2 sm:mb-0'
              >
                Logout
              </button>
              <p className='block py-2 px-5 rounded shadow'>
                User:{' '}
                {!loading
                  ? session?.user.name || 'not logged in'
                  : 'loading...'}
              </p>
            </div>
          </div>

          {/* right side */}
          <div className='lg:w-1/2 relative'>
            <svg
              className='hidden lg:block text-white fill-current absolute h-full transform -translate-x-1/2 w-48 z-10'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon points='50,0 100,0 50,100 0,100'></polygon>
            </svg>

            <img
              src='/background.jpg'
              alt='Ocean Image'
              className='lg:absolute object-cover lg:inset-y-0 lg:right-0 lg:h-full lg:w-full'
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
