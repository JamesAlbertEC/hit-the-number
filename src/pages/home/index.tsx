import { FormEvent, useState } from "react";
import ReactModal from "react-modal";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Display } from "../../components/Display";
import { Restart } from "../../components/Restart";
import { Table } from "../../components/Table";
import { Modal } from "../../components/Modal";

import { Container, FormModal } from "./styles";

import { useTransactions } from "../../hooks/useTransactions";


ReactModal.setAppElement('#root');

export function Home() {
  const { createTransaction } = useTransactions();
  const [register, setRegister] = useState(false);
  const [nick, setNick] = useState('');
  const [record, setRecord] = useState(0);

  function handleOpenRegister() {
    setRegister(true);
  }

  function handleCloseRegister() {
    setRegister(false);
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      nick,
      record,
    })

    setNick('');
    setRecord(0);
    handleCloseRegister();
  }

  return (
    <Container>
      <Header onOpenRegister={handleOpenRegister} />
      <Display number={5} />
      <Restart />
      <Form />
      <Table />
      <Modal
        isOpen={register}
        onRequestClose={handleCloseRegister}
      >
        <FormModal onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Record</h2>
          <label>Nick</label>
          <input
            type="text"
            placeholder='Digite seu nick'
            value={nick}
            onChange={event => setNick(event.target.value)}
          />
          <label>Quantas tentativas até acertar?</label>
          <input
            type="number"
            placeholder="Acertou com quantas tentativas"
            value={record}
            onChange={event => setRecord(Number(event.target.value))}
          />
          <button
            type='submit'
          >
            Cadastrar
          </button>
        </FormModal>
      </Modal>
    </Container>
  );
}
