import styled from 'styled-components';
import colors from '../../GlobalColors';

export const NavbarStyle = styled.div`
  background: ${colors.cantaloupe};

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
    color: ${colors.armyUniform};

    img{
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`