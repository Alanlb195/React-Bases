import { useCounter } from '../hooks/useCounter';


export const ContadorConHook = () => {

  const { valor, acomular } = useCounter(5);


  return (
    <>
        <h3>Contador con Hook: <small>{ valor }</small> </h3>


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
