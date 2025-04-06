import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const login = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
    dispatch(setToken(res.data.token));
    router.push('/dashboard');
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
      <input type="email" placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" className="input mt-2" onChange={e => setPassword(e.target.value)} />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={login}>Ingresar</button>
    </div>
  );
}
