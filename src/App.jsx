import "./App.css";

export default function App() {
  return (
    <main className="page">
      <section className="card">
        <p className="kicker">React + Node tooling + HTML + CSS</p>
        <h1>Hello, World.</h1>
        <p className="sub">
          Edit <code>src/App.jsx</code> and save to see updates.
        </p>

        <div className="row">
          <a className="btn" href="https://react.dev" target="_blank" rel="noreferrer">
            React docs
          </a>
          <a className="btn secondary" href="https://vite.dev" target="_blank" rel="noreferrer">
            Vite docs
          </a>
        </div>
      </section>
    </main>
  );
}

