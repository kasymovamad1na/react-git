import "./Practise.css";

function App() {
  return (
    <div className="container">
      <form className="form">
        <label htmlFor="login" className="input-wrapper">
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Login"
            className="input"
          />
        </label>

        <label htmlFor="password" className="input-wrapper">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="input"
          />
        </label>

        <button type="submit" className="button">
          Create
        </button>
      </form>
    </div>
  );
}

export default App;