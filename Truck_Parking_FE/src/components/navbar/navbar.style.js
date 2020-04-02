import styled from 'styled-components';

export const NavbarStyle = styled.div`
  background: #ccc;

  .navbar-list {
    display: flex;
    justify-content: space-between;
  }

  .navbar-list__item {
    padding: 0.5rem 0;
    margin: auto 0.5rem;
    display: inherit;
  }

  .navbar-list__link {
    margin: 0.5rem;
  }
`