import styles from "../styles/Home.module.css";

const RickAndMorty = ({ results }) => {
  return (
    <div className={styles.main}>
      <h1>Rick and Morty API</h1>
      <div className={styles.containerGrid}>
        {results &&
          results.map((result, index) => (
            <div key={result.name} className={styles.card}>
              <img src={result.image} alt={result.name} />
              <div className={styles.containerBody}>
                <h4>{result.name}</h4>
                <p>
                  <b>Estado</b>:{" "}
                  <span>
                    {result.status === "Alive" && "Vivo"}
                    {result.status === "Dead" && "Muerto"}
                    {result.status === "unknown" && "Desconocido"}
                  </span>
                </p>
                <p>
                  <b>Género</b>:{" "}
                  <span>
                    {result.gender === "Female" && "Femenino"}
                    {result.gender === "Male" && "Masculino"}
                    {result.gender === "Genderless" && "Sin género"}
                    {result.gender === "unknown" && "Desconocido"}
                  </span>
                </p>
                <p>
                  <b>Origen</b>: {result.origin.name}
                </p>
                <p>
                  <b>Ubicación</b>: {result.location.name}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    return {
      props: {
        results: data.results,
      },
    };
  } catch (error) {
    console.log("error", error);
  }
}

export default RickAndMorty;
