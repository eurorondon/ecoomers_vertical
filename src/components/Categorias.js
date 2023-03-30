function Categorias() {
  const categorias = [
    { nombre: "Ropa", imagen: "https://via.placeholder.com/200x200" },
    { nombre: "Zapatos", imagen: "https://via.placeholder.com/200x200" },
    { nombre: "Accesorios", imagen: "https://via.placeholder.com/200x200" },
    { nombre: "Hogar", imagen: "https://via.placeholder.com/200x200" },
    { nombre: "Tecnología", imagen: "https://via.placeholder.com/200x200" },
    { nombre: "Juguetes", imagen: "https://via.placeholder.com/200x200" },
  ];

  return (
    <div className={window.innerWidth > 767 ? "mx-5" : ""}>
      <h2 className="">Categorias destacadas</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6   ">
        {categorias.map((categoria, index) => (
          <div className={window.innerWidth > 767 ? "p-3" : "p-1"} key={index}>
            <img
              src={categoria.imagen}
              className="card-img-top"
              alt={categoria.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{categoria.nombre}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
