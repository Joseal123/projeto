import { Form, Button, Table } from 'react-bootstrap'

import { createRef, Component } from 'react'

export default class AddInventory extends Component {
  constructor() {
    super()
    this.state = {
      produtos: []
    }
    this.formData = createRef()
  }
  add = event => {
    event.preventDefault()

    const novoProduto = {
      nome_produto: this.formData.current.nome_produto.value,
      preco: this.formData.current.preco.value,
      qtd: Number(this.formData.current.qtd.value)
    }

    this.state.produtos.push(novoProduto)
    this.setState({
      produtos: this.state.produtos
    })
  }
  add = event => {
    event.preventDefault()

    const novoProduto = {
      nome_produto: this.formData.current.nome_produto.value,
      preco: this.formData.current.preco.value,
      qtd: Number(this.formData.current.qtd.value)
    }

    // console.log(novoProduto)
    // adiciona um novo produto no array
    this.state.produtos.push(novoProduto)
    this.setState({
      produtos: this.state.produtos
    })
    // console.log(produtos)
  }
  increQtd = event => {
    // console.log(event.target.value)
    const indexOfArray = event.target.value
    this.state.produtos[indexOfArray].qtd =
      this.state.produtos[indexOfArray].qtd + 1
    this.setState({
      produtos: this.state.produtos
    })
  }
  decreQtd = event => {
    const indexOfArray = event.target.value
    this.state.produtos[indexOfArray].qtd =
      this.state.produtos[indexOfArray].qtd - 1
    this.setState({
      produtos: this.state.produtos
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.add} ref={this.formData}>
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
            Submit
          </Button>
        </Form>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Index</th>
              <th>Nome do Produto</th>
              <th>Preco</th>
              <th>Quantidade</th>
              <th>Opcoes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.produtos.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.nome_produto}</td>
                  <td>{item.preco}</td>
                  <td>{item.qtd}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={event => this.increQtd(event)}
                      value={index}
                    >
                      +
                    </Button>{' '}
                    <Button
                      variant="danger"
                      onClick={event => this.decreQtd(event)}
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
}
