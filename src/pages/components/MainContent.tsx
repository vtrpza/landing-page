import React, { ChangeEvent, FormEvent, useState } from 'react'

const MainContent = () => {
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
  
    const validateEmail = (email: string): boolean => {
      const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      return re.test(String(email).toLowerCase());
    }
  
    const validatePhone = (phone: string): boolean => {
        const re = /\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/;
        return re.test(String(phone));
    };
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      setEmailError(!validateEmail(email));
      setPhoneError(!validatePhone(phone));
      if (validateEmail(email) && validatePhone(phone)) {
        alert('Enviado!');
      }
    }
  
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setEmail(event.target.value);
    }
  
    const formatPhoneNumber = (value: string): string => {
        const onlyNums = value.replace(/[^\d]/g, '');
        if (onlyNums.length < 2) return onlyNums;
        if (onlyNums.length < 7) return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2)}`;
        return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2, 6)}-${onlyNums.slice(6, 10)}`;
      };
    
    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setPhone(formatPhoneNumber(event.target.value));
    };
  return (
    <main className="bg-gradient-to-r from-blue-800 to-indigo-900 flex-grow flex flex-row p-4">
      <div className="w-1/2 text-white flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className='mb-12'>
            <h2 className="text-5xl font-bold">Desenvolvimento e gestão de<br/>serviços tecnológicos!</h2>
          </div>
          <ul className="text-light-grey">
            <li className="flex items-center text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Gestão técnica de Programas Setoriais da Qualidade
            </li>
            <li className="flex items-center text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Avaliação de produtos inovadores para construção civil
            </li>
            <li className="flex items-center text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Realização de ensaios de materiais de construção
            </li>
          </ul>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="w-full h-full bg-white shadow-md rounded-lg p-6 flex flex-col font-bold text-lg">
            <div className="m-2 p-3">
              <h2 className="text-blue-600 text-left">Informe seus dados <br /> para falar com um especialista:</h2>
            </div>
            <form className="flex flex-col justify-evenly flex-grow-0" onSubmit={handleSubmit}>
              <label className="text-blue-600 mb-2 flex justify-between items-center">
                <span>Nome:</span>
                <input type="text" required className="ml-2 p-2 border rounded" />
              </label>
              <label className="text-blue-600 mb-2 flex justify-between items-center">
                <span>E-mail:</span>
                <input type="email" required value={email} onChange={(e) => handleEmailChange(e)} className={`ml-2 p-2 border rounded ${emailError ? 'border-red-500' : ''}`} />
              </label>
              {emailError && <p className="text-red-500">E-mail inválido</p>}
              <label className="text-blue-600 mb-2 flex justify-between items-center">
                <span>Empresa:</span>
                <input type="text" required className="ml-2 p-2 border rounded" />
              </label>
              <label className="text-blue-600 mb-2 flex justify-between items-center">
                <span>Telefone:</span>
                <input  type="tel" required value={phone} onChange={(e) => handlePhoneChange(e)} className={`ml-2 p-2 border rounded ${phoneError ? 'border-red-500' : ''}`} />
              </label>
              {phoneError && <p className="text-red-500">Número inválido</p>}
              <div className='flex justify-center items-center'>
                <button className="bg-blue-200 hover:bg-blue-300 text-white py-2 px-4 rounded mt-4">FALE COM UM ESPECIALISTA</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent