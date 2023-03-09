

export const TiposBasicos = () => {

  const name: string | number = 'Alan';
  const age: number = 25;
  const isActivated: boolean = true;
  const powers = ['Speed', 'Fly', 'Breathe in water'];
  return (
    <>
        <h3>TiposBasicos</h3>
        { name }, { age }, { (isActivated) ? 'Activated' : 'Not Activated' }, { powers.join(', ') }
    </>
  )
}
