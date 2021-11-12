import React from 'react';

const App = () => {
  return (
    <Page>
      <UserCard
        user={{
          name: 'Erin Lindford',
          email: 'erin.landford@acme.com',
          avatar: 'erin-lindford.jpg',
          phone: '(555) 765-4321',
          role: 'ADMIN'
        }}
      />
    </Page>
  );
};

const Page = (props) => {
  return (
    <div className="flex justify-start items-center flex-col w-full h-screen pt-20 bg-blue-gray-50">
      {props.children}
    </div>
  );
};

const UserCard = ({ user, user: { role } }) => {
  return (
    <>
      <article className="flex flex-row w-96 rounded-md mb-0 p-6 px-16 text-purple-700 bg-purple-50 border border-purple-300">
        <img src={user.avatar} className="w-16 h-16 rounded-full mr-0" alt="" />
        <div className="ml-3 text-sm text-center leading-5">
          <span className="inline-flex items-center space-x-1">
            <span>{user.name}</span>
            <span className="w-5 h-5 text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex items-center w-5 h-5 stroke-current stroke-2 text-purple-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </span>
          </span>

          <span className="block">{user.email}</span>
          <span className="block">{user.phone}</span>
        </div>
      </article>
    </>
  );
};

export default App;
