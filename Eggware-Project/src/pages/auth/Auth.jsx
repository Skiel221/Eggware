import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Sesión iniciada");
      } else {
        // Registro
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Usuario registrado");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Correo electrónico" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Contraseña" 
      />
      <button type="submit">{isLogin ? "Iniciar sesión" : "Registrarse"}</button>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        Cambiar a {isLogin ? "Registro" : "Inicio de sesión"}
      </button>
    </form>
  );
}