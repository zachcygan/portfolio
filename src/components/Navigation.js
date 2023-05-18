import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Zach Cygan</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'Home' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            About
          </button>
          <button
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'About' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            Portfolio
          </button>
          <button
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Blog' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            Resume
          </button>
          <button
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
