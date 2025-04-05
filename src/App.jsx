import { CartProvider } from './context/CartContext';
import { Nav } from './components/Nav/Nav';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ProductContainer } from './containers/ProductContainer';
import './App.css'


function App() {

  return (
    <CartProvider>
      {/* HEADER */}
      <header className='header row'>
        <Nav />
      </header>

      {/* MAIN */}
      <main className="main row py-5" style={{marginTop: '67px'}}>
        {/* SEARCH BAR */}
        <section className="section col-10 mb-3 mx-auto bg-light p-0" style={{
          maxHeight: '90px',
          borderRadius: '6px'
        }}>
          <SearchBar />
        </section>

        {/* PRODUCT LIST */}
        <section className="product-section col-12">
          <ProductContainer />
        </section>
      </main>

    </CartProvider>
  )
}

export default App
