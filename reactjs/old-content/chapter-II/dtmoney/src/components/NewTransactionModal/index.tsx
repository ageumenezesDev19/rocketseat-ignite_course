import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from './styles';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button"
        className='react-modal-close'
      >
        <img
          src={closeImg}
          onClick={onRequestClose}
          alt="Fechar Modal"
        />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />

        <input
          placeholder="Valor"
          type="Number"
        />
        
        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}