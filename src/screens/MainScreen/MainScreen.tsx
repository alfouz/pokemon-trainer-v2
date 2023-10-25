import useCatchPokemon from "../../hooks/useCatchPokemon";
import useCurrentPokemon from "../../state/useCurrentPokemon";

function MainScreen() {
  useCatchPokemon();
  const { removePokemon } = useCurrentPokemon((s) => s);

  return (
    <>
      <button onClick={removePokemon}>Give Me more</button>
      <div>TEST</div>
    </>
  );
}

export default MainScreen;
