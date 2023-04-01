function Categorias() {
  const categorias = [
    {
      nombre: "Ropa",
      imagen:
        "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_1_uioiaq.png",
    },
    {
      nombre: "Zapatos",
      imagen:
        "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_2_zlm1ha.png",
    },
    {
      nombre: "Accesorios",
      imagen:
        "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232212/Cocina_3_p8srua.png",
    },
    {
      nombre: "Hogar",
      imagen:
        "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232208/Cocina_4_wltthp.png",
    },
    {
      nombre: "Tecnología",
      imagen:
        "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_1_uioiaq.png",
    },
    {
      nombre: "Juguetes",
      imagen:
        "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_2_zlm1ha.png",
    },
  ];

  return (
    <div className={window.innerWidth > 767 ? "mx-5 my-5" : "container my-5"}>
      <h2 className="">Categorias destacadas</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6   ">
        {categorias.map((categoria, index) => (
          <div
            className={window.innerWidth > 767 ? "p-3 " : "p-1 "}
            key={index}
            style={{ position: "relative" }}
          >
            <img
              src={categoria.imagen}
              className="card-img-top rounded"
              alt={categoria.nombre}
            />
            <div
              className=""
              style={{
                position: "absolute",
                top: "50%",
                textAlign: "center",

                margin: "0 auto",
              }}
            >
              {/* <h5 className="card-title">{categoria.nombre}</h5> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
