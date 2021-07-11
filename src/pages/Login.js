import { useState } from "react"
import { useLogin } from "../hooks"

const Login = ()=>{

    const [loggedin, login] = useLogin()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (<div className='columns mt-5'>
         <div className='column is-half is-offset-one-quarter'>
    <div className='card'>
        <div className='card-content'>
            <div className='field'>
                <label className='label has-text-left'>Username</label>
                <div className='control'>
                    <input className='input' type='text' onChange={e=>{setUsername(e.target.value)}} value={username} placeholder='Enter username'></input>
                </div>
            </div>
            <div className='field'>
                <label className='label has-text-left'>Password</label>
                <div className='control'>
                    <input className='input' type='password' placeholder='Enter password' onChange={e=>{setPassword(e.target.value)}} value={password}></input>
                </div>
            </div>
        </div>
        <div class="control has-text-left">
  <button class="button is-primary m-4" onClick={()=>{
      window.location = './'
      login()
  }}>Login</button>
</div>
    </div></div>
    </div>)
}

export default Login