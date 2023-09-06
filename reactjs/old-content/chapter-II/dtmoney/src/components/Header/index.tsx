import logoIMG from '../../assets/logo.svg';
import { Content, Container } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoIMG} alt="dt money" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
