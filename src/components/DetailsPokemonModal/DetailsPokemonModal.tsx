import usePlayerState from "../../state/usePlayerState";
import { ConcretePokemon } from "../../types/ownTypes";
import DetailsPokemonCard from "../DetailsPokemonCard/DetailsPokemonCard";
import Modal from "../Modal/Modal";
import PokeButton from "../PokeButton/PokeButton";
import { ButtonContainer, Container } from "./DetailsPokemonModal.styles";

type Props = {
  pokemon?: ConcretePokemon;
  onClose: () => void;
};

function DetailsPokemonModal({ pokemon, onClose }: Props) {
  const {
    removePokemon,
    addPokemonToTeam,
    removePokemonFromTeam,
    currentTeam,
  } = usePlayerState((s) => s);

  const isOnTeam = !!currentTeam.find((p) => pokemon && pokemon.id === p.id);

  const handleRemovePokemon = () => {
    if (pokemon) {
      removePokemon(pokemon.id);
      removePokemonFromTeam(pokemon.id);
      onClose();
    }
  };

  const handleAddPokemon = () => {
    pokemon && addPokemonToTeam(pokemon);
  };

  const handleRemovePokemonFromTeam = () => {
    if (isOnTeam) {
      pokemon && removePokemonFromTeam(pokemon.id);
    }
  };

  return (
    pokemon && (
      <Modal onClose={onClose}>
        <Container>
          <DetailsPokemonCard pokemon={pokemon} />
          <ButtonContainer>
            {!isOnTeam ? (
              <PokeButton onClick={handleAddPokemon}>Add to team</PokeButton>
            ) : (
              <PokeButton onClick={handleRemovePokemonFromTeam}>
                Remove from team
              </PokeButton>
            )}
            <PokeButton onClick={handleRemovePokemon}>Release</PokeButton>
          </ButtonContainer>
        </Container>
      </Modal>
    )
  );
}

export default DetailsPokemonModal;
