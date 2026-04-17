import '../styles/layout.css'

export default function Layout({ children }) {
  return (
    <main className="layout">
      <header className="header">
        <h1 className="title">🐱 댄싱 캣</h1>
        <p className="subtitle">고양이의 신나는 댄스 타임!</p>
      </header>
      <section className="content">
        {children}
      </section>
    </main>
  )
}
