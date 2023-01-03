import { MenuButton } from 'src/shared/components/MenuButton';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';
export const Transaction = () => {
  return (
    <Container>
      <header>
        <MenuButton/>
      </header>
      <main>
        <div>
          <img src={logoImg} alt="logo NG"/>
        </div>
        <div>
          filtros
        </div>
        <div>
          tabela
        </div>
      </main>
    </Container>
    
  )
}