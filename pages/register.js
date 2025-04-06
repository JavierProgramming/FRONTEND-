import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const register = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { email, password });
    router.push('/login');
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
      <input type="email" placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" className="input mt-2" onChange={e => setPassword(e.target.value)} />
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded" onClick={register}>Registrar</button>
    </div>
  );
}
