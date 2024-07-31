import React from 'react';

function Logout() {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <h2 className='text-center text-2xl font-bold leading-tight'>You have been logged out</h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Thank you for visiting. We hope to see you again soon!
        </p>
      </div>
    </div>
  );
}

export default Logout;