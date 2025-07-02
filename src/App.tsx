import Card, { type CardDetails } from './Card/Card'

const cardsData: CardDetails[] = [
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
  {
    title: "Dwergar",
    image: "https://aleplanszowki.pl/23403-medium_default/dwergar-edycja-polska.jpg",
    description: "Jeszcze nie graliśmy"
  },
  {
    title: "Cyberpunk: Gangi Night City",
    image: "https://files.rebel.pl/products/1065/5759/_2023475/cyberpunk-2077-gangi-night-city.jpg",
    description: "Jeszcze nie grałem ale uwielbiam Cyberpunka"
  },
  {
    title: "Królestwo w Dolinie",
    image: "https://aleplanszowki.pl/32511-medium_default/krolestwo-w-dolinie.jpg",
    description: "Jeszcze nie graliśmy"
  },
  {
    title: "Terraformacja Marsa",
    image: "https://files.rebel.pl/products/108/5438/_99856/box_3d_TerraformacjaMarsa_podstawka-1200x900-ffffff-jpg.webp",
    description: "Nawet fajne. Kilka dodatków mamy ale nie wszystkie"
  }
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
