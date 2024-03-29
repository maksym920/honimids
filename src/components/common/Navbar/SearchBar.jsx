import React from 'react';

// import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';

const SearchBar = (props) => {
  return (
    <React.Fragment>
      <div className={props.classes['searchbar-area']}>
        <div className={props.classes['searchbar-border']}>
          <input
            type="text"
            placeholder="Search NFTs"
            className="relative z-10 h-8 w-full rounded-full border-none bg-transparent pl-[39px] pr-[19px] align-top text-[16px] text-[#93989C] outline-none"
          />
          <button className={props.classes['searchbar-btn']}>
            <BsSearch />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
