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
  },
  {
    title: "Terraformacja Marsa - Niepokoje",
    image: "https://aleplanszowki.pl/17793-medium_default/terraformacja-marsa-niepokoje-.jpg",
    description: "Ten dodatek już mamy",
  },
  {
    title: "Terraformacja Marsa - Preludium",
    image: "https://aleplanszowki.pl/14624-medium_default/terraformacja-marsa-preludium.jpg",
    description: "Ten dodatek już mamy",
  },
  {
    title: "Monopoly",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/poznan-gra-planszowa-b-iext188313812.jpg",
    description: "Mamy edycje Poznań i nam ta jedna wystarczy",
  },
  {
    title: "Blok Ekipa: Szacun na rejonie",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/blok-ekipa-szacun-na-rejonie-mdr-b-iext177179413.jpg",
    description: "Nawet przyjemnie sie gra",
  },
  {
    title: "Harry Potter: Hogwart's Battle",
    image: "https://files.rebel.pl/products/100/606/_110248/rebel_gra-przygodowa_harry-potter-hogwarts-battle_box3d-1200x900-ffffff-png.webp",
    description: "Ta konkretna nam nie siadła",
  },
  {
    title: "Bloodborne - gra karciana",
    image: "https://sklep.portalgames.pl/environment/cache/images/500_500_productGfx_3450/bloodborne_BOX-small.png?overlay=1",
    description: "Bardzo dobra gra",
  },
  {
    title: "Niepoądani Goście",
    image: "https://files.rebel.pl/products/100/1203/_2010247/niepozadani-goscie-pudelko-1200x900-ffffff-jpg.webp",
    description: "Ogólnie gry detektywistyczne są super",
  },
  {
    title: "Ice Breaker",
    image: "https://ecsmedia.pl/c/tactic-gra-towarzyska-party-time-ice-breaker-w-iext181359497.jpg",
    description: "Wolimy gry które mają jakieś konkretne zasady",
  },
  {
    title: "Eksplodujące kotki",
    image: "https://planszeo.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1VFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c92176d6eeeff4fe30ca2b4fff80c2cdddcb81a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBPZ2hxY0djNkZISmxjMmw2WlY5MGIxOXNhVzFwZEZzSE1Ha0NMQUU2REdOdmJuWmxjblE3QmpvS2MyRjJaWEo3Q2pvUFltRmphMmR5YjNWdVpGc0lhUUgvYVFIL2FRSC9PaE56ZFdKellXMXdiR1ZmYlc5a1pVa2lCMjl1QmpvR1JWUTZDbk4wY21sd1ZEb09hVzUwWlhKc1lXTmxWRG9NY1hWaGJHbDBlV2xwIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--f6fb23576c15385096dc01353576e1bf56a60a04/eksplodujace-kotki.jpg",
    description: "Świetna gra",
  },
  {
    title: "Frywolne kotki",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/frywolne-kotki-gra-towarzyska-rebel-b-iext179365669.jpg",
    description: "",
  },
  {
    title: "Szczekające kotki",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/eksplodujace-kotki-szczekajace-kotki-nowa-edycja-gra-planszowa-rebel-b-iext187499504.jpg",
    description: "",
  },
  {
    title: "Wirus",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/wirus-gra-karciana-muduko-b-iext189260781.jpg",
    description: "",
  },
  {
    title: "Wirus 2: Ewolucja",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/wirus-2-ewolucja-dodatek-do-gry-muduko-b-iext187202708.jpg",
    description: "",
  },
  {
    title: "Wirus: Halloween",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/wirus-halloween-muduko-dodatek-do-gry-b-iext182047658.jpg",
    description: "",
  },
  {
    title: "Tajniacy",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/tajniacy-gra-szpiegowska-rebel-b-iext188016951.jpg",
    description: "",
  },
  {
    title: "Tajniacy: Obrazki",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/tajniacy-obrazki-gra-towarzyska-rebel-b-iext188016607.jpg",
    description: "",
  },
  {
    title: "Tajniacy: Bez Cenzury",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/tajniacy-bez-cenzury-gra-towarzyska-rebel-b-iext189206075.jpg",
    description: "",
  },
  {
    title: "Tajniacy: Duet",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/tajniacy-duet-gra-towarzyska-rebel-b-iext188019112.jpg",
    description: "",
  },
  {
    title: "W cieniu tronu",
    image: "https://planszostrefa.pl/environment/cache/images/500_500_productGfx_5d4aa45c8a38e5b4498ce3a1f475805f.webp?overlay=1",
    description: "",
  },
  {
    title: "The Game: Nic prostszego",
    image: "https://aleplanszowki.pl/33617-medium_default/the-game-nic-prostszego.jpg",
    description: "",
  },
  {
    title: "Rekiny biznesu: Szare eminencje",
    image: "https://aleplanszowki.pl/2387-medium_default/rekiny-biznesu-szare-eminencje.jpg",
    description: "To jest dodatek a nie mamy oryginalnej gry",
  },
  {
    title: "Gra na emocjach",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/gra-na-emocjach-gra-planszowa-nasza-ksiegarnia-b-iext188505947.jpg",
    description: "",
  },
  {
    title: "Shinobi: Wojna klanów",
    image: "https://cdn.znak.com.pl/cdn-cgi/image/format=webp,quality=75/images/product/shinobi-wojna-klanow-106196",
    description: "",
  },
  {
    title: "Karaluszek Kłamczuszek",
    image: "https://gryplanszowe.pl/hpeciai/896751ce390d73c76ef44897130a1a32/pol_pm_Karaluszek-klamczuszek-47_1.jpg",
    description: "",
  },
  {
    title: "Gobbit Angry Birds",
    image: "https://planszeo.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGNPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2d4fc96ff6786805460f115622b245665332263/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBPZ2hxY0djNkZISmxjMmw2WlY5MGIxOXNhVzFwZEZzSE1Ha0NMQUU2REdOdmJuWmxjblE3QmpvS2MyRjJaWEo3Q2pvUFltRmphMmR5YjNWdVpGc0lhUUgvYVFIL2FRSC9PaE56ZFdKellXMXdiR1ZmYlc5a1pVa2lCMjl1QmpvR1JWUTZDbk4wY21sd1ZEb09hVzUwWlhKc1lXTmxWRG9NY1hWaGJHbDBlV2xwIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--f6fb23576c15385096dc01353576e1bf56a60a04/gobbit-angry-birds",
    description: "",
  },
  {
    title: "Pizzeria: Jedz i graj",
    image: "https://aleplanszowki.pl/22784-medium_default/pizzeria-jedz-i-graj.jpg",
    description: "",
  },
  {
    title: "Sherlock",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/sherlock-gra-karciana-granna-b-iext183099682.jpg",
    description: "",
  },
  {
    title: "Bankrut",
    image: "https://files.rebel.pl/products/1065/5759/_2026737/bankrut%20(1)-1200x900-ffffff-jpg.webp",
    description: "",
  },
  {
    title: "Śledztwo: Kto zabił teściową",
    image: "https://bonito.pl/cache/0/ed94f716-ledztwo-kto-zabil-t_800.webp",
    description: "OKROPNA GRA",
  },
  {
    title: "Śledztwo: W białym domu",
    image: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/edgard-games-gra-karciana-sledztwo-w-bialym-domu-b-iext185673435.jpg",
    description: "OKROPNA GRA",
  },
  {
    title: "Karty dżentelmenów",
    image: "https://files.rebel.pl/products/100/1010/_100045/WHITE_BOX-1200x900-ffffff-jpg.webp",
    description: "Mamy wszystkie części tych kart już",
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
