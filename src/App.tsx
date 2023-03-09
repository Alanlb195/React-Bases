import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from "./typescript/Funciones";
import { Contador } from "./components/contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Users } from "./components/Usuarios";
import { Forms } from "./components/Forms";


const App = () => {
  return (
    <div className='mt-2'>
        <h1>Hello world</h1>
        <hr />
        {/* <TiposBasicos /> */}
        {/* <ObjetosLiterales /> */}
        {/* <Funciones /> */}
        {/* <Contador /> */}
        {/* <ContadorConHook /> */}
        {/* <Login /> */}
        {/* <Users /> */}
        <Forms />
    </div>
  )
}

export default App;