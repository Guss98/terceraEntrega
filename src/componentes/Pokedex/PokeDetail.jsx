import React from "react";
import { useSelector } from "react-redux";

const PokeDetail = () => {
  const buscador = useSelector((state) => state.buscador);

  return (
    <div className="wrapper">
      <article className="cardPoke">
        <img
          src="https://previews.123rf.com/images/kebox/kebox1712/kebox171200205/92445493-zig-zag-pattern-background-blue-and-white.jpg"
          alt="imagen header card"
          className="card-header"
        />
        {buscador.loading && <div>Buscando...</div>}
        <div className="cardBody">
          {buscador.pokemon.length >= 1 && (
            <>
              <img
                src={buscador.pokemon[0].sprites.front_default}
                alt=""
                className="card-body-img"
              />
              <h1 className="card-body-name">{buscador.pokemon[0].name}</h1>
              <p className="card-body-text">Stats</p>
              <div className="card-footer">
                <div className="card-footer-social">
                  <p className="parrafoPoke">
                    {buscador.pokemon[0].stats[0].stat.name}{" "}
                  </p>
                  <h3>{buscador.pokemon[0].stats[0].base_stat}</h3>
                </div>
                <div className="card-footer-social">
                  <p className="parrafoPoke">
                    {buscador.pokemon[0].stats[1].stat.name}{" "}
                  </p>
                  <h3>{buscador.pokemon[0].stats[1].base_stat}</h3>
                </div>
                <div className="card-footer-social">
                  <p className="parrafoPoke">
                    {buscador.pokemon[0].stats[2].stat.name}{" "}
                  </p>
                  <h3>{buscador.pokemon[0].stats[2].base_stat}</h3>
                </div>
              </div>
            </>
          )}
        </div>
        {buscador.error !== "" && (
          <span className="errorPoke">{buscador.error}</span>
        )}
      </article>
    </div>
  );
};

export default PokeDetail;
