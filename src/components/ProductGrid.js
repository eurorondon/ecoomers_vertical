export default function Product(props) {
  const MAX_TITLE_LENGTH = 17; // El número máximo de caracteres permitidos en el título
  const MAX_DESCRIPTION_LENGTH = 40; // El número máximo de caracteres permitidos en la descripción\

  return (
    <div
      className="card my-1 text-start   "
      style={
        window.innerWidth > 767
          ? { marginBottom: "40px" }
          : { margin: " 0px 1px  60px 1px" }
      }
    >
      <img className="product--image" src={props.url} alt="product image" />
      <div
        className="p-2"
        style={{ backgroundColor: "#f2f2f2", height: "100%" }}
      >
        <h5 className="name" style={{ fontWeight: "bold" }}>
          {props.name.length > MAX_TITLE_LENGTH
            ? props.name.substring(0, MAX_TITLE_LENGTH) + "..."
            : props.name}
        </h5>
        <div
          className="my-2"
          style={
            window.innerWidth > 767 ? { height: "80px" } : { height: "55px" }
          }
        >
          {props.description ? (
            <p className="description">
              {props.description.length > MAX_DESCRIPTION_LENGTH
                ? props.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
                : props.description}
            </p>
          ) : (
            <p className="description"> Sin Descripcion</p>
          )}
        </div>

        <p
          className="price"
          style={{ fontWeight: "bold", position: "absolute", bottom: "5px" }}
        >
          {props.price} $
        </p>
        {/* <p>
          <button
            className="call-action"
            style={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
          >
            Add to Cart
          </button>
        </p> */}
      </div>
    </div>
  );
}

// EL  CODIGO DE ARRIBA SON LAS TARJETAS COMO LAS QUIERE RAQUELA COMPLETAS, EL DE ABAJO ES COMO ESTA , DEBES ELEJIR UNO DE DOS ,
// AL ELEJIR TAMBIEN SE DEBE CAMBIAR EL CSS DE TOPSELL.CSS

// import React from "react";

// export default function Product(props) {
//   return (
//     <div
//       className="mb-4 "
//       style={window.innerWidth > 767 ? {} : { margin: "0px 5px" }}
//     >
//       <div
//         style={
//           window.innerWidth > 767
//             ? { margin: "auto 1rem" }
//             : { margin: "0px 1px" }
//         }
//       >
//         <div className="">
//           <img className="product--image" src={props.url} alt="product image" />

//           <p className="price bg-dark px-2 rounded text-white m-1 ">
//             {props.price}
//           </p>
//         </div>
//         <h5 className="name mt-2">{props.name}</h5>
//         <p className="">{props.description}</p>
//         <p>
//           {/* <button
//           className="call-action"
//           style={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
//         >
//           Add to Cart
//         </button> */}
//         </p>
//       </div>
//     </div>
//   );
// }
