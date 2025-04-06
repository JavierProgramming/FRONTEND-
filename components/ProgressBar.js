export default function ProgressBar({ streak }) {
  const percent = Math.min((streak / 66) * 100, 100);
  const color = percent < 33 ? 'bg-red-500' : percent < 66 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className={`h-4 ${color} rounded-full`} style={{ width: `${percent}%` }} />
    </div>
  );
}
