import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Habit Tracker</h1>
      <Link href="/register" className="text-blue-500">Crear cuenta</Link>
      <Link href="/login" className="text-blue-500">Iniciar sesión</Link>
    </div>
  );
}
