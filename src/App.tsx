import Phone from "./Phone";
import SelectAllNone from "./SelectAllNone";

function App() {
  return (
    <div className="bg-gray-700 text-gray-50 flex flex-col min-h-screen">
      <header className="bg-gray-800 text-gray-50 py-2 px-4">
        bootstrap-app
      </header>
      <main className="py-2 px-4">
        <h1>Bootstrap App</h1>
        <Phone></Phone>
      </main>
    </div>
  );
}

export default App;
