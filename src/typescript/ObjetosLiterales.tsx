

interface Persona {
    name: string;
    age: number;
    direction: Direction
}

interface Direction {
    country: string;
    HouseNumber: number;
}



export const ObjetosLiterales = () => {

    const persona: Persona = {
        name: 'Alan',
        age: 24,
        direction: {
            country: 'México',
            HouseNumber: 515
        }
    }

  return (
    <>
        <h1>ObjetosLiterales</h1>
        <code>
            <pre>
                { JSON.stringify(persona, null, 3) }
            </pre>
        </code>
    </>
  )
}
