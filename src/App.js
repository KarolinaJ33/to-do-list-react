function App() {
  return (
    <body className="body">

    <header>
        <h1 className="header">Lista zadań</h1>
    </header>

    <section className="section">
        <div className="section__header">
            <h2 className="section__title">Dodaj nowe zadanie</h2>
        </div>
        <form className="form js-form">
            <input className="form__newTask js-newTask" placeholder="Co jest do zrobienia?" autofocus />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    </section>

    <section className="section">
        <div className="section__header">
            <h2 className="section__title">Lista zadań</h2>
            <div className="section__buttons js-buttons"></div>
        </div>
        <ul className="section__tasks js-tasks"></ul>
    </section>

</body>
  );
}

export default App;
