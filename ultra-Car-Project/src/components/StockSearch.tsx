import React, { useState, useEffect } from 'react'
import Iparts from '../interfaces/IParts';
import partsMock from '../mocks/parts.mock';

function StockSearch() {
  const [parts, setParts] = useState(partsMock)
  const [partName, setPartName] = useState('')

  function searchParts(value: string) {
    const searchTerm = value.toLowerCase()
    return partsMock.filter((part) => part.name.includes(searchTerm)) as Iparts[]
  }

  async function handleChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLFormElement | HTMLSelectElement>) {
    const { value } = target;
    setPartName(value)
    const searchResult = searchParts(value)
    setParts(searchResult)
  }

  useEffect(() => {
    const result = searchParts(partName)
    setParts(result)
}, [partName]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="partName">
          Pesquisar Peças: 
            <input
              type="text"
              id="partName"
              name="partName"
              placeholder="Nome da peça"
              onChange={ handleChange }
            />
          </label>
          <span>{ partName.length > 0 && parts.length > 0 ? '' : 'Peça indisponível' }</span>
      </form>
      <section className="section-table">
      <table className="table">
        <thead>
          <tr>
            <th>Nome da Peça</th>
            <th>Quantidade em Estoque</th>
          </tr>
        </thead>
        <tbody>
      {parts.length > 0 && parts.map((part, i) => (
              <tr  key={i}>
                <td>
                  {part.name}
                </td>
                <td>
                  {part.quantity}
                </td>
              </tr>
          ))}
        </tbody>
      </table>
      </section>
    </div>
  )
}

export default StockSearch