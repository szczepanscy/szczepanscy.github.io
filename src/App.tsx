import './App.css'
import Card from './Card/Card'

const cardsData = [
  {
    title: "Tawantinsuyu",
    image:
      "https://sklep.portalgames.pl/userdata/public/gfx/5194/Tawantinsuyu_box_sklep.jpg",
    description:
      "Jeszcze w to nie graliśmy",
  },
  {
    title: "Robin z Locksley",
    image:
      "https://aleplanszowki.pl/22678-medium_default/robin-z-locksley.jpg",
    description:
      "Jeszcze nie graliśmy",
  },
  {
    title: "Dixit",
    image:
      "https://aleplanszowki.pl/26351-medium_default/dixit.jpg",
    description:
      "Mamy juz wszystkie cześći Dixita. Więc nie chcemy też żadnych dodatków do tego.",
  },
];

function App() {
  return (
    <>
      <h1>Te planszówki już mamy więc jeśli chcecie nas obdarować jakąś to poprosimy INNĄ niż te tutaj :-)</h1>
      <Card
        cardsData={cardsData}
      />
    </>
  )
}

export default App
