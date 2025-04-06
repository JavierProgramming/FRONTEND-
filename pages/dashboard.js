import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import HabitCard from '../components/HabitCard';

export default function Dashboard() {
  const token = useSelector(state => state.user.token);
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const loadHabits = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/habits`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setHabits(res.data);
  };

  useEffect(() => {
    if (token) loadHabits();
  }, [token]);

  const addHabit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/habits`, { name: newHabit }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setNewHabit('');
    loadHabits();
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Tus Hábitos</h2>
      <div className="flex gap-2 mb-4">
        <input value={newHabit} onChange={e => setNewHabit(e.target.value)} placeholder="Nuevo hábito" className="border p-2 flex-1 rounded" />
        <button onClick={addHabit} className="bg-green-600 text-white px-3 rounded">Agregar</button>
      </div>
      {habits.map(habit => (
        <HabitCard key={habit._id} habit={habit} token={token} refresh={loadHabits} />
      ))}
    </div>
  );
}
