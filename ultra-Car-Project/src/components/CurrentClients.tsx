import React, { useState, useEffect } from 'react'
import IJobs from '../interfaces/Ijob';
import currentServices from '../mocks/currentServicesMock';

function CurrentClients() {
  const [currentJobsAdd, setCurrentJobsAdd] = useState<IJobs[]>([]);

  useEffect(() => {
    const jobsStorageData = localStorage.getItem('new_jobs');
    if (jobsStorageData) {
      const items = JSON.parse(jobsStorageData)
      const currentJobsStorage = items.jobs.length > 0 ? items.jobs : [];
      setCurrentJobsAdd(currentJobsStorage)
    }
  }, []);
  return (
    <div>
      <h5>Serviços em andamento:</h5>
      {currentServices.map((service, i) => (
<table className="table" key={i}>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Cliente</th>
            <th>Funcionário</th>
            <th>Box</th>
            <th>Data de inicio</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>
                  {service.name}
                </td>
                <td>
                  {service.price}
                </td>
                <td>
                  { service.description }
                </td>
                <td>
                  { service.clientName }
                </td>
                <td>
                  { service.employee }
                </td>
                <td>
                  { service.box }
                </td>
                <td>
                  { service.createAt }
                </td>
              </tr>
        </tbody>
      </table>
      ))}
      <div className='recent-services-container'>
      <h5>Serviços adicionados recentemente:</h5>
      { currentJobsAdd.length > 0 && currentJobsAdd.map((item, i) => (
        <div key={i}>
          <p>Cliente: {item.clientName}</p>
          <p>Funcionário: {item.employee}, pedido feito em {item.createAt}</p>
          <p>Status: Aguardando manobra e definição de box</p>
        </div>
      )) }
      </div>
    </div>
  )
}

export default CurrentClients