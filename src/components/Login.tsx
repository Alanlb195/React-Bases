import { useEffect, useReducer } from "react"

interface AuthState {
    validating: boolean;
    token: string | null;
    userName: string;
    name: string
}


const initialState: AuthState = {
    validating: true,
    token: null,
    userName: '',
    name: ''
}

type LoginPayload = {
    userName: string;
    name: string;
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {


    switch(action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                name: '',
                userName: ''
            }
        
        case 'login':
            const { name, userName } = action.payload
            return {
                validating: false,
                token: '123',
                name: name,
                userName: userName
            }

        default:
            return state;
    }

}



export const Login = () => {

  const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
        dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
      dispatch({
        type: 'login',
        payload: {
            name: 'Alan',
            userName: 'Cef'
        }
    })
  }
  const logout = () => {
    dispatch({
        type: 'logout'
    })
  }


  if(validating) {
    return (
        <>
            <div className="alert alert-info">
                Validando...
            </div>
        </>
    )
  }
  

  return (
    <>
        <h3>Login</h3>

        {
            (token)
            ? <div className="alert alert-success">Autenticado como { name }</div>
            : <div className="alert alert-danger">No autenticado</div>
        }

        {
            (token)
            ? (
            <button
                className="btn btn-primary"
                onClick={ logout }
            >
                Logout
            </button>
            )
            :
            (
            <button
                className="btn btn-primary"
                onClick = { login }
            >
                Login
            </button>
            )
        }


    </>
  )
}
