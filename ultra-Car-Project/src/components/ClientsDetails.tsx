import React from 'react'
import { allCustomersInfos } from '../mocks/customersInDb'

function ClientsDetails() {
  return (
    <div>
        <div>
          <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          { allCustomersInfos.map((customer, i) => (
              <tr key={i}>
                <td>
                  {customer.name}
                </td>
                <td>
                  { customer.model }
                </td>
                <td>
                  { customer.year }
                </td>
                <td>
                  { customer.plate }
                </td>
                <td>
                  { customer.color }
                </td>
              </tr>
                )) }
        </tbody>
      </table>
        </div>
    </div>
  )
}

export default ClientsDetails