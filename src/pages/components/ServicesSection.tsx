import React from 'react'

const ServicesSection = () => (
  <section className="bg-light-blue p-4 mt-9 relative">
    <h2 className="text-4xl font-bold text-center mb-4 text-blue-600 absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">SERVIÇOS</h2>    
    <div className="flex flex-col md:flex-row justify-around flex-wrap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {[
              'Prover suporte para a avaliação de novos produtos e tecnologias',
              'Reduzir riscos na utilização de novos produtos e tecnologias',
              'Estimular o processo de inovação tecnológica',
              'Orientar o mercado na escolha de novos produtos e tecnologias',
              'Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica',
          ].map((service, i) => (
              <div key={i} className="relative bg-white text-black p-6 m-6 rounded-lg w-full md:w-72">
                  <div style={{height: "5rem", width:"5rem"}} className="absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-6 m-2 rounded-full text-center text-2xl">{i + 1}</div>
                  <p className="text-lg mt-10">{service}</p>
              </div>
          ))}
      </div>
    </div>
    <div className="flex justify-center mt-10 relative">
      <button style={{height: '3rem', width: '20rem'}} className="md:w-2/12 bg-yellow-400 font-bold font-lg text-blue-800 hover:bg-yellow-600 py-2 px-4 rounded absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">Fale com um especialista</button>
    </div>
  </section>
)

export default ServicesSection