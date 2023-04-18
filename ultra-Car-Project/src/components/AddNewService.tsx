import React, { useState, useEffect, useContext, ReactNode } from 'react'
import allEmployeesMock from '../mocks/employees.mock';
import allServicesMock from '../mocks/services.mocks';
import IJobs from '../interfaces/Ijob';
import allCustomers from '../mocks/customersInDb';

function AddNewService() {
  const EMPTY_FORM = {
    clientName: 'João',
    employee: 'Núbia',
    service: 'Inspeção',
  };
  const allCustomersInDb: string[] = allCustomers;
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentJobs, setCurrentJobs] = useState<IJobs[]>([]);
  const [form, setForm] = useState(EMPTY_FORM)

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLFormElement | HTMLSelectElement>) {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }
  function findService() {
    const result = allServicesMock.find(({name}) => name === form.service)
    if (result) return result as IJobs;
  }

  useEffect(() => {
    const MIN_CLIENT_NAME = 4;
    const { clientName, service, employee } = form;
    if (
      clientName.length >= MIN_CLIENT_NAME
      && service.length > 0
      && employee.length > 0
    ) {
      setIsDisabled(false);
    }
  }, [form]);

  useEffect(() => {
    const jobsStorageData = localStorage.getItem('new_jobs');
    if (jobsStorageData) {
      const items = JSON.parse(jobsStorageData)
      const currentJobsStorage = items.jobs.length > 0 ? items.jobs : [];
      setCurrentJobs(currentJobsStorage)
    }
  }, []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDate = new Date();
    const jobToAdd = findService();
    if (jobToAdd) {
    jobToAdd.createAt = newDate.toLocaleDateString('pt-BR');
    jobToAdd.clientName = form.clientName;
    jobToAdd.employee = form.employee;
    setCurrentJobs((prev) => {
      return [...prev, jobToAdd]})
    }
    setForm(EMPTY_FORM);
    setIsDisabled(true)
  };

  useEffect(() => {
    if (currentJobs.length > 0) {
      localStorage.setItem('new_jobs', JSON.stringify({ jobs: currentJobs }));
    }
}, [currentJobs]);


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h3>Cadastrar Nova Venda</h3>
          <label htmlFor="clientName">
            <select
            name="clientName"
            id="clientName"
            value={ form.clientName }
            onChange={ handleChange }
          >
            { allCustomersInDb.map((person) => (
              <option key={person} value={person}>{person}</option>
            )) }
            </select>
          </label>
          <label htmlFor="service">
          <select
            name="service"
            id="service"
            value={ form.service }
            onChange={ handleChange }
          >
            { allServicesMock.map((service) => (
              <option key={service.name} value={service.name}>{service.name}</option>
            )) }
          </select>
        </label>
        <label htmlFor="employee">
          <select
            name="employee"
            id="employee"
            value={ form.employee }
            onChange={ handleChange }
          >
            { allEmployeesMock.map((person) => (
              <option key={person} value={person}>{person}</option>
            )) }
          </select>
        </label>
          <button
            type="submit"
            disabled={ isDisabled }
          >
            Adicionar Serviço
          </button>
        </form>
        <div>
          {currentJobs.length > 0 && currentJobs.map((job, i) => (
      <section key={i} className="section-table">
      <table className="table">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Cliente</th>
            <th>Funcionário</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>
                  {job.name}
                </td>
                <td>
                  {job.price}
                </td>
                <td>
                  { job.description }
                </td>
                <td>
                  { job.clientName }
                </td>
                <td>
                  { job.employee }
                </td>
                <td>
                  { job.createAt as ReactNode }
                </td>
              </tr>
        </tbody>
      </table>
      </section>
          ))}
        </div>
        <p>Mais Informações na aba Serviços.</p>
      </div>
  )
}

export default AddNewService