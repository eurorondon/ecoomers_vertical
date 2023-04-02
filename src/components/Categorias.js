import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import { useHistory } from "react-router-dom";

const categorias = [
  {
    nombre: "Ollas",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_1_uioiaq.png",
  },
  {
    nombre: "Vasos",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_2_zlm1ha.png",
  },
  {
    nombre: "IPM",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232212/Cocina_3_p8srua.png",
  },
  {
    nombre: "Poncheras",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232208/Cocina_4_wltthp.png",
  },
  {
    nombre: "Adonis",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_1_uioiaq.png",
  },
  {
    nombre: "Aluminio",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680231851/Cocina_2_zlm1ha.png",
  },
];

function Categorias() {
  const [category, setCategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct("", "", category));
  }, [dispatch, category]);

  const seleccionarCategoria = (nombreCategoria) => {
    setCategory(nombreCategoria);
    history.push(`/category/${nombreCategoria}`);
  };

  return (
    <div className={window.innerWidth > 767 ? "mx-5 my-5" : "container my-5"}>
      <h2 className="">Categorias destacadas</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6">
        {categorias.map((categoria, index) => (
          <div
            className={window.innerWidth > 767 ? "p-3" : "p-1"}
            key={index}
            style={{ position: "relative" }}
          >
            <div
              onClick={() => seleccionarCategoria(categoria.nombre)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={categoria.imagen}
                className="card-img-top rounded"
                alt={categoria.nombre}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
