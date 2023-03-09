import { useState } from "react";


export const useCounter = (inicial: number) => {
    const [valor, setValor] = useState<number>(inicial);
  
    const acomular = (num: number) => {
      setValor(valor + num);
    }

    return {
        valor,
        acomular
    }
}
