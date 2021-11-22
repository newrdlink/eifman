import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super()
    this.address = address
    this.headers = headers
  }

  getData() {
    return fetch(`${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1`, {
      method: 'GET',
      headers: this.headers
    })
      .then(handlerResponse)
  }
}

const api = new Api({
  address: 'https://apit.bileter.ru',
  headers: {
    "Content-Type": "application/json",
  }
})

export default api