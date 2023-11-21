import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AppRoutes from '../Routes/Routes';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
