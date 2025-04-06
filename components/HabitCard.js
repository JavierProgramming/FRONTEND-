import ProgressBar from './ProgressBar';
import axios from 'axios';

export default function HabitCard({ habit, token, refresh }) {
  const handleDone = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/habits/${habit._id}/done`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    refresh();
  };

  return (
    <div className="bg-white shadow p-4 rounded-2xl mb-4">
      <h3 className="text-xl font-semibold">{habit.name}</h3>
      <ProgressBar streak={habit.streak} />
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded" onClick={handleDone}>
        Done
      </button>
    </div>
  );
}
