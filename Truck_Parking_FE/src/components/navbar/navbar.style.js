import styled from 'styled-components';

export const NavbarStyle = styled.div`
  background: #ccc;

  .navbar-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .navbar-list__item {
    padding: 0.5rem 0;
    margin: auto 0.5rem;
  }

  .navbar-list__link {
    margin: 0.5rem;
    text-decoration: none;
  }
`