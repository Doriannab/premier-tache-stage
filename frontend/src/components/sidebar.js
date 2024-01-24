// Sidebar.js
import React from 'react';
import UserMenu from './UserMenu';
import SidebarMenu from './SidebarMenu';

function Sidebar() {
  return (
    <div className="fixed flex flex-col justify-between w-1/5 h-full mt-4 text-white lg:mt-0 max-md:flex-row max-md:h-fit inscrire">
      <SidebarMenu className="" />
      <UserMenu className="max-md:hidden" />
    </div>
  );
}

export default Sidebar;