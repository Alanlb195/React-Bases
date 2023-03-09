import { useState } from 'react';


export const Contador = () => {

  const [valor, setValor] = useState<number>(0);
  
  const acomular = (num: number) => {
    setValor(valor + num);
  }


  return (
    <>
        <h3>Contador: <small>{ valor }</small> </h3>


        <button
            className="btn btn-primary"
            onClick={ () => acomular(1) }
        >
            +1
        </button>
        &nbsp;
        <button
            className="btn btn-primary"
            onClick={ () => acomular(-1) }
        >
            -1
        </button>

    </>
  )
}
