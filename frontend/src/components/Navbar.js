import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Button } from "@mui/material"

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">

          <h1></h1>
      
        </Link>
        <div class = "logo"><a href="https://fontmeme.com/fr/police-backwoods/"><img src="https://fontmeme.com/permalink/220811/fdb37c6b726033690cfcf4d48558b241.png" alt="police-backwoods" border="0"/></a>
        </div>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Déconnexion</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">
              <Button style={{borderColor:"black",color:"black",borderRadius:"20px"}} variant="outlined">Connexion</Button>
              </Link>
              <Link to="/signup">
              <Button style={{borderColor:"black",color:"black",borderRadius:"20px"}} variant="outlined">Inscription</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar