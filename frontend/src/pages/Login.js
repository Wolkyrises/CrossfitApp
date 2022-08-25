import { useState } from "react"
import { useLogin } from "../hooks/useLogin"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 style={{textAlign: 'center'}}>Connexion</h3>
      
      <label>Email</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Mot de passe</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button style={{display:"block", margin: "auto"}} disabled={isLoading}>Se connecter</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login
