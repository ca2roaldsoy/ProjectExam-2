import Bryggen from "../../../images/bergen/bryggen.jpg";
import Fløibanen from "../../../images/bergen/fløibanen_v2.jpg";
import Trolltunga from "../../../images/bergen/trolltunga_v2.jpg";
import Ulriken from "../../../images/bergen/ulriken_v2.jpg";

const places = [
  "Norway",
  "Bergen",
  "Bryggen",
  "Fløibanen",
  "Trolltunga",
  "Ulriken",
];

export const BergenImg = [
  {
    src: Bryggen,
    imgTitle: `${places[2]}`,
    alt: `${places[2]} from ${places[1]}, ${places[0]}`,
    text: `${places[2]} in ${places[1]} is one of the main attractions in ${places[0]}. It was buiilt after the great fire in 1702. It is now listed in UNESCOS's World Heritage List.`,
  },
  {
    src: Fløibanen,
    imgTitle: `${places[3]}`,
    alt: `${places[3]} from ${places[1]}, ${places[0]}`,
    text: `${places[3]} funicular is one of ${places[0]}'s most popular attractions, and the only Railway of its kind in the country. Take a trip on Fløibanen to enjoy this spectacular view over ${places[1]}`,
  },
  {
    src: Trolltunga,
    imgTitle: `${places[4]}`,
    alt: `${places[4]} from ${places[1]}, ${places[0]}`,
    text: `Experience one of the most spectacular places in ${places[1]}. With 1100 meters above sea level, you can enjoy this incredible view over Ringedalsvannet.`,
  },
  {
    src: Ulriken,
    imgTitle: `${places[5]}`,
    alt: `${places[5]} from ${places[1]}, ${places[0]}`,
    text: `Take the cable car up Mount Ulriken, and explore the highest of ${places[1]}'s seven mountains, 643 meters above sea level.`,
  },
];
