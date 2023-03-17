import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello World Next.js</h1>

      <ul>
        <li>
          <Link href='/products' legacyBehavior>
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            <a>Sobre nós</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
