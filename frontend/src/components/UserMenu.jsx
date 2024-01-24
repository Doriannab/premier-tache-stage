// UserProfile.js
import React from 'react';

function UserMenu() {
  return (
    <div className="flex flex-col mb-24 max-md:hidden" >
      <div className="text-gray-100 border-t-2 border-white" id="bord" ></div>
      <div className='flex gap-2 p-4 '>
        <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
        <div className='flex flex-col'>
          <h2 className="text-lg font-semibold">Anna Dior</h2>
          <p className="text-xs hover:underline dark:text-gray-400">en ligne</p>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;