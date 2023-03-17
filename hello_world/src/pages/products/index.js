import Link from 'next/link';
import Navbar from '../../../componentes/Navbar';

export default function Products() {
  return (
    <>
      <Navbar />

      <h1>Página de Produtos</h1>

      <Link href='/' legacyBehavior>
        Voltar para Home
      </Link>
    </>
  );
}
