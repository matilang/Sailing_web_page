import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading spinner or button disable
  const navigate = useNavigate();
  const { login } = useAuth(); // Auth context login function

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    setError(''); // Clear any previous error message
    setLoading(true); // Start loading

    try {
      // Use the login function from the Auth context
      const result = await login(username, password);

      // On success, redirect to the homepage and set user info
      if (result.message === 'Login successful') {
        localStorage.setItem('islogged', 'true');
        localStorage.setItem('role', result.user.role);
        navigate('/'); // Redirect to the homepage
      }
    } catch (err) {
      // Handle login failure
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <div className="log-background">
        <div className="log-box">
          <h2>Logowanie</h2>
          {error && <div className="error-message">{error}</div>} {/* Error message display */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">
                <strong>Nazwa Użytkownika</strong>
              </label>
              <input
                type="text"
                placeholder="Wpisz nazwę użytkownika"
                autoComplete="off"
                name="username"
                className="inputbox"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading} // Disable input during loading
              />
            </div>
            <div>
              <label htmlFor="password">
                <strong>Hasło</strong>
              </label>
              <input
                type="password"
                placeholder="Wpisz hasło"
                autoComplete="off"
                name="password"
                className="inputbox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading} // Disable input during loading
              />
            </div>
            <button className="btn-login" type="submit" disabled={loading}>
              {loading ? 'Logowanie...' : 'Zaloguj'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
