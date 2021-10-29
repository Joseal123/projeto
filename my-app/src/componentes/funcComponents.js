import { Form, Button, Table } from 'react-bootstrap'
import { useState, createRef } from 'react'
import './style.css'
export default function AddProduct(props) {
  let initialValue = []
  const [produtos, setProduto] = useState(initialValue)
  const formData = createRef()
  // const incIndex = createRef()
  // function removerElemento(elementoClicado) {
  //   elementoClicado.closest('novoProduto').remove()
  // }
  const add = event => {
    event.preventDefault()

    // }

    const novoProduto = {
      nome_produto: formData.current.nome_produto.value,
      preco: formData.current.preco.value,
      qtd: Number(formData.current.qtd.value)
    }

    // console.log(novoProduto)
    // adiciona um novo produto no array
    setProduto([...produtos, novoProduto])
    // console.log(produtos)
  }

  const increQtd = event => {
    // console.log(event.target.value)
    const indexOfArray = event.target.value
    produtos[indexOfArray].qtd = produtos[indexOfArray].qtd + 1
    setProduto([...produtos])
  }
  const decreQtd = event => {
    const indexOfArray = event.target.value
    produtos[indexOfArray].qtd = produtos[indexOfArray].qtd - 1
    setProduto([...produtos])
  }
  //NAO ESQUECEEEERRRRRRR
  // console.log(props.location.query.Telefone)

  return (
    <div>
      <div-2>
        <input id="date" type="date" />
      </div-2>
      <div-2>
        <div>Nome: {props.location.query.nome_cliente}</div>
      </div-2>
      <div-2>
        <div>CPF: {props.location.query.CPF}</div>
      </div-2>
      <div-2>
        <div>Telefone: {props.location.query.Telefone}</div>
      </div-2>
      <Form onSubmit={add} ref={formData}>
        <Form.Group controlId="formBasicProductName">
          <Form.Label>Produto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do Produto"
            name="nome_produto"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPreco">
          <Form.Label>Preco</Form.Label>
          <Form.Control
            type="number"
            placeholder="Preco em Real"
            name="preco"
          />
        </Form.Group>

        <Form.Group controlId="formBasicQtd">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="number" placeholder="Quantidade" name="qtd" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Preco</th>
            <th>Quantidade</th>
            <th>Opcoes</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.nome_produto}</td>
                <td>{item.preco}</td>
                <td>{item.qtd}</td>
                <td nowrap>
                  <Button
                    variant="success"
                    onClick={event => increQtd(event)}
                    value={index}
                  >
                    +
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={event => decreQtd(event)}
                    value={index}
                  >
                    -
                  </Button>{' '}
                  {/* <Button
                    variant="danger"
                    class="apagar"
                    onclick="removerElemento(event.target)"
                  >
                    Apagar
                  </Button> */}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
