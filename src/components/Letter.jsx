import { alphabet } from "../util/config";
import { textToSpeech, shake } from "../util/utils";
import gsap from "gsap";

const Letter = (props) => {
  const { letter } = props;

  return (
    <>
      <h2 onClick={() => shake(e)}>{alphabet[letter].title}</h2>

      <img
        onClick={() => textToSpeech(alphabet[letter].animal)}
        src={alphabet[letter].img}
        alt={letter}
      />
    </>
  );
};

export default Letter;

// Show image
// Show p
// sound bite?
