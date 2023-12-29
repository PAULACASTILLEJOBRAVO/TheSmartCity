import React, { useState } from 'react';
import backgroundImage from '../imagenes/bici.png'; // Ruta a tu imagen de fondo
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginBottom: '20px',  // Agrega esto
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación con el servidor
    // Por ahora, simplemente mostramos los datos en la consola
    console.log(`Email: ${email}, Password: ${password}`);
    // También podrías llamar a una función para autenticar los datos
    navigate("/Home")
  };

  const loginStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    // Añade más estilos si es necesario
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semitransparente para el formulario
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    width: '500px', 
    height: '300px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // Añade más estilos si es necesario
  };
  const buttonStyle = {
    width: '200px',  // Ajusta esto según tus necesidades
    height: '50px',  // Ajusta esto según tus necesidades
    fontSize: '20px',
    marginTop: '20px',
  };
  const inputStyle = {
    width: '100%',  // Ajusta esto según tus necesidades
    height: '10px',  // Ajusta esto según tus necesidades
    fontSize: '20px',  // Ajusta esto según tus necesidades
    padding: '10px',
  };
  const labelStyle = {
    fontSize: '20px',  // Ajusta esto según tus necesidades
  };
  return (
    <div style={loginStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div style={inputContainerStyle}>
  <label style={labelStyle}>Username:</label>
  <input type="text" style={inputStyle} value={email} onChange={handleEmailChange} required/>
</div>

<div style={inputContainerStyle}>
  <label style={labelStyle}>Password:</label>
  <input type="password" style={inputStyle} value={password} onChange={handlePasswordChange} required/>
</div>
<input type="submit" value="Iniciar sesión" style={buttonStyle} />      </form>
    </div>
  );
};

export default Login;
