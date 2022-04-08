import React, { FC, useEffect, useState } from "react";

export const HideShow: FC = () => {
  const [valor, setValor] = useState<number>(0);

  //Función que se ejecuta cada vez que se monta el componente
  useEffect(() => {
    console.log("Antes de montarse");
    setValor(20);
  }, []);

  //Función que se ejecuta cada vez que se actualiza valor
  useEffect(() => {
    if (valor === 0) return;

    console.log("Actualizando valor");

    //Función que se ejecuta al desmontarse y cada vez que se actualiza valor
    return () => {
      console.log("Otra función cuando se desmonta");
    };
  }, [valor]);

  //Función que solo se ejecuta al desmontarse
  useEffect(() => {
    return () => {
      console.log("Desmontando el componente");
    };
  }, []);

  const increment = () => {
    setValor(valor + 5);
  };

  console.log(valor);

  return (
    <div>
      <p>Este es el componente prueba {valor}</p>
      <button onClick={increment}>Sumar 5</button>
    </div>
  );
};
