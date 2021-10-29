import { Form, Button, Table } from 'react-bootstrap'

import { useState, createRef } from 'react'
import { Link } from 'react-router-dom'

export default function AddCliente() {
  let initialValue = []
  const [cliente, setCliente] = useState(initialValue)
  const formData = createRef()
  const [data, setData] = useState({})
  const add = event => {
    event.preventDefault()

    const novoCliente = {
      nome_cliente: formData.current.nome_cliente.value,
      CPF: formData.current.CPF.value,
      Telefone: Number(formData.current.Telefone.value)
    }
    setData(novoCliente)
    setCliente([...cliente, novoCliente])
  }

  const increTelefone = event => {
    // console.log(event.target.value)
    const indexOfArray = event.target.value
    cliente[indexOfArray].Telefone = cliente[indexOfArray].Telefone + 1
    setCliente({
      cliente: cliente
    })
  }
  const decreTelefone = event => {
    const indexOfArray = event.target.value
    cliente[indexOfArray].Telefone = cliente[indexOfArray].Telefone - 1
    setCliente({
      cliente: cliente
    })
  }

  return (
    <div>
      <Form onSubmit={add} ref={formData}>
        <Form.Group controlId="formBasicProductName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="João da Silva"
            name="nome_cliente"
          />
        </Form.Group>

        <Form.Group controlId="formBasicCPF">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="number" placeholder="123.456.789-00" name="CPF" />
        </Form.Group>

        <Form.Group controlId="formBasicTelefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="number"
            placeholder="99999-9999"
            name="Telefone"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Avançar
        </Button>
        <Link
          to={{
            pathname: '/produtos',
            query: {
              nome_cliente: data.nome_cliente,
              CPF: data.CPF,
              Telefone: data.Telefone
            }
          }}
        >
          <Button variant="primary" type="submit">
            Avançar
          </Button>
        </Link>
      </Form>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Index</th>
            <th>Nome do cliente</th>
            <th>CPF</th>
            <th>Quantidade</th>
            <th>Opcoes</th>
          </tr>
        </thead>
        <tbody>
          {cliente.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.nome_cliente}</td>
                <td>{item.CPF}</td>
                <td>{item.Telefone}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={event => increTelefone(event)}
                    value={index}
                  >
                    +
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={event => decreTelefone(event)}
                    value={index}
                  >
                    -
                  </Button>{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
