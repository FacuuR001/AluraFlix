import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { colorBlanco, NavLinkPanel } from '../UI/valiables';

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="search" placeholder="Que deseas buscar..?" />
      <SearchButton type="submit">
        <FaSearch />
      </SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 260px;
  padding: 10px;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (min-width: 768px) { 
      width: 600px;
      padding: 1rem;
  }

  @media (min-width: 1024px) { 
      width: 700px;
      padding: 1.5rem;
      font-size: 1.5rem
  }
`;

const SearchButton = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${NavLinkPanel};
  color: white;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (min-width: 768px) { 
      padding: 1rem;
  }

  @media (min-width: 1024px) { 
      font-size: 1.4rem;
      padding: 1.5rem;
  }
`;

export default SearchBar;