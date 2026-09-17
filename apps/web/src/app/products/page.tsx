export default function ProductsPage() {
    return(
        <main className="flex flex-col lg:flex-row items-center justify-center">
            <header>
                <h1>Laptops</h1>
                <p>Explora nuestros productos tecnológicos</p>
            </header>
            <section className="flex flex-col lg:flex-row items-center justify-center">
                <aside className="flex flex-col items-center justify-center">
                    <h2>FILTROS</h2>
                    <ul>
                        <li>
                            <button>TODOS</button>
                        </li>
                        <li>
                            <button>Marca</button>
                        </li>
                        <li>
                            <button>Precio</button>
                        </li>
                        <li>
                            <button>Ram</button>
                        </li>
                    </ul>
                </aside>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <article>
                        <img src="https://via.placeholder.com/150" alt="Laptop 1" />
                        <h3>Laptop 1</h3>
                        <p>Precio: $1000</p>
                        <p>Ram: 8GB</p>
                        <p>Marca: Dell</p>
                    </article>
                    <article>
                        <img src="https://via.placeholder.com/150" alt="Laptop 2" />
                        <h3>Laptop 2</h3>
                        <p>Precio: $1500</p>
                        <p>Ram: 16GB</p>
                        <p>Marca: HP</p>
                    </article>
                </div>
            </section>
        </main>
    )
}