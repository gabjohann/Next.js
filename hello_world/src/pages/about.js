import Link from 'next/link';
import Navbar from '../../componentes/Navbar';

export default function About() {
  return (
    <>
      <Navbar />

      <h1>Página de About</h1>

      <Link href='/' legacyBehavior>
        Voltar para Home
      </Link>
    </>
  );
}
