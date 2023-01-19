import Link from 'next/link'

export default function Hero () {
  return (
    <div>
      <h1> Wed </h1>
      <ul>
        <li>
          <Link href='/pezi1' legacyBehavior>
            <a>ページ１</a>
          </Link>
        </li>
        <li>
          <Link href='/pezi2' legacyBehavior>
            <a>ページ２</a>
          </Link>
        </li>
        <li>
          <Link href='/pezi3' legacyBehavior>
            <a>ページ３</a>
          </Link>
        </li>
        <li>
          <Link href='/pezi4' legacyBehavior>
            <a>ページ４</a>
          </Link>
        </li>
        <li>
          <Link href='/pezi5' legacyBehavior>
            <a>ページ５</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
