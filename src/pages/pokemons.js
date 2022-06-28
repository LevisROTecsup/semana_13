import styles from "../styles/Home.module.css";

const Pokemons = ({ results }) => {
  return (
    <div className={styles.main}>
      <h1>Pokemons</h1>
      <div className={styles.container}>
        {results &&
          results.map((result, index) => (
            <div key={result.name}>
              <img
                width={300}
                height={400}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  index + 1
                }.svg`}
                alt={result.name}
              />
              <h4>{result.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
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

export default Pokemons;
