import Link from 'next/link';

export default function Products() {
  return (
    <>
      <h1>Página de Produtos</h1>

      <Link href='/' legacyBehavior>
        Voltar para Home
      </Link>
    </>
  );
}
