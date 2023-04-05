import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import { useHistory } from "react-router-dom";

const categorias = [
  {
    nombre: "Cocina",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/1_rtfcmb.png",
  },
  {
    nombre: "Limpieza",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/2_eqi0xl.png",
  },
  {
    nombre: "Aluminio",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/4_wanod2.png",
  },
  {
    nombre: "Combos",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/5_rkp6cz.png",
  },
  {
    nombre: "Belleza hombre y mujer",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/6_jez0au.png",
  },
  {
    nombre: "Contenedores",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-04-04T145558.460_lunpzm.png",
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
    <div
      className={window.innerWidth > 1000 ? "mx-5 my-5" : "container mt-5 mb-2"}
    >
      <h2 className="">Categorias destacadas</h2>
      <div className="row row-cols-3 row-cols-md-3 row-cols-lg-6 row-cols-xl-6">
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
            <div className="text-center my-2">
              <h3 className="categoria-name">{categoria.nombre}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
