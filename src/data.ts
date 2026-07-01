/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TanningMachine, Review, ServiceDetail, SkinType, FaqItem } from './types';

export const tanningMachines: TanningMachine[] = [
  {
    id: 'lying-1',
    name: 'Prémium Fekvő Szolárium (1-es gép)',
    type: 'lying',
    tubes: 'Chocolate Brown Csövek',
    description: 'Ergonomikus fekvőfelületű gép, amely tökéletes kényelmet biztosít a barnulás alatt. Külön szabályozható arcbarnítóval és vállbarnítóval felszerelve.',
    features: ['Ergonomikus akril lap', 'Állítható arcbarnító', 'Beépített hűtőventilátor', 'Zene lejátszás'],
    maxMinutes: 15,
  },
  {
    id: 'lying-2',
    name: 'Extra Fekvő Szolárium (2-es gép)',
    type: 'lying',
    tubes: 'Chocolate Brown Csövek',
    description: 'Kiemelkedő teljesítményű fekvő szolárium intenzív és egyenletes barnulást biztosító csövekkel, kellemes testpermetező (szellőztető) funkcióval.',
    features: ['Intenzív cső-konfiguráció', 'Testszellőztetés', 'Kompakt fekvőfelület', 'Digitális időzítő'],
    maxMinutes: 15,
  },
  {
    id: 'standing-1',
    name: 'Álló Turbo Szolárium (3-as gép)',
    type: 'standing',
    tubes: 'Chocolate Brown Csövek',
    description: 'Álló szoláriumunk 360 fokos, teljesen csíkmentes barnulást garantál. Kiváló választás, ha kevés ideje van és gyors, egyenletes eredményre vágyik.',
    features: ['360°-os egyenletes barnulás', 'Higiénikus álló kabin', 'Nagy teljesítményű ventilátorok', 'Csíkmentes hónalj és vállak'],
    maxMinutes: 12,
  },
  {
    id: 'standing-2',
    name: 'Álló Power Szolárium (4-es gép)',
    type: 'standing',
    tubes: 'Chocolate Brown Csövek',
    description: 'A legújabb generációs álló gépünk extra erős, azonnali pigmentációt elősegítő Chocolate Brown csövekkel a hosszan tartó csokoládébarna bőrért.',
    features: ['Extra erős csövek', 'Maximális higiénia', 'Csúszásmentes belső', 'Kellemes hűsítő légáram'],
    maxMinutes: 12,
  },
];

export const manicureServices: ServiceDetail[] = [
  {
    id: 'mani-classic',
    title: 'Klasszikus Manikűr',
    description: 'Körömformázás, körömbőr eltávolítás és hidratálás a kezek ápoltságáért.',
    price: '4 500 Ft-tól',
    iconName: 'Sparkles',
    details: ['Formázás és reszelés', 'Körömbőr ápolás', 'Körömerősítő alapozás', 'Kézmasszázs krémmel'],
  },
  {
    id: 'mani-gel',
    title: 'Gél Lakk (Gellakk)',
    description: 'Hosszan tartó, karcolásmentes és ragyogó gél lakk a saját körmökre.',
    price: '6 000 Ft-tól',
    iconName: 'Sparkles',
    details: ['Körömelőkészítés', 'Erősített gél lakk alap', 'Kérhető egyedi színválaszték', 'UV/LED lámpás rögzítés'],
  },
  {
    id: 'mani-nail-art',
    title: 'Műköröm Építés',
    description: 'Zselés műköröm építése tetszőleges hosszúságban és formában, díszítéssel.',
    price: '8 500 Ft-tól',
    iconName: 'Scissors',
    details: ['Zselés építés sablonnal', 'Saját köröm megerősítése', 'Trendi díszítések és minták', 'Töltés és javítás'],
  },
];

export const skinTypes: SkinType[] = [
  {
    type: 1,
    name: 'I. Kelta típus',
    description: 'Nagyon világos bőr, szeplők, vörös vagy szőke haj, kék/zöld szem.',
    tanTendency: 'Rendkívül leégésre hajlamos, szinte sosem barnul le.',
    recommendedMinutes: 'Nem ajánlott a szolárium használata, vagy max. 3-4 perc rendkívül óvatosan.',
  },
  {
    type: 2,
    name: 'II. Világos európai',
    description: 'Szőke haj, kék, zöld vagy szürke szem, világos bőr.',
    tanTendency: 'Gyakran leég, de fokozatosan enyhe barnaságot érhet el.',
    recommendedMinutes: 'Első alkalommal 4-5 perc, később max. 6-8 perc javasolt.',
  },
  {
    type: 3,
    name: 'III. Közép-európai',
    description: 'Barna haj, barna vagy szürke szem, normál tónusú bőr.',
    tanTendency: 'Ritkán ég le, könnyen és jól barnul mélyebb tónusokra.',
    recommendedMinutes: 'Első alkalommal 6-8 perc, később max. 10-12 perc javasolt.',
  },
  {
    type: 4,
    name: 'IV. Mediterrán típus',
    description: 'Sötétbarna vagy fekete haj, sötét szem, eleve kreolos bőr.',
    tanTendency: 'Szinte soha nem ég le, azonnal és tartósan mélybarnára színeződik.',
    recommendedMinutes: 'Első alkalommal 8-10 perc, később max. 12-15 perc javasolt.',
  },
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Kovács Anita',
    rating: 5,
    text: 'Szuper tiszta, nagyon modern gépek! Különösen tetszik, hogy automata a rendszer, így este is kényelmesen el tudok jönni munka után. A Chocolate Brown csövekkel már 6 perc alatt látható a változás leégés nélkül.',
    date: '2026.06.15.',
    initials: 'KA',
  },
  {
    id: 'rev-2',
    author: 'Szabó Gábor',
    rating: 5,
    text: 'A legjobb szoli Mór környékén. 4 gép van, így ritkán kell várni. Az álló gépek nagyon erősek és higiénikusak. 170 Ft/perc áron teljesen korrekt, abszolút ajánlom mindenkinek!',
    date: '2026.05.28.',
    initials: 'SZG',
  },
  {
    id: 'rev-3',
    author: 'Németh Emese',
    rating: 5,
    text: 'A szolárium mellett a műköröm szolgáltatást is kipróbáltam náluk, és egyszerűen csodás lett a körmöm! Nagyon precíz és tartós munka, kedves kiszolgálás.',
    date: '2026.06.02.',
    initials: 'NE',
  },
  {
    id: 'rev-4',
    author: 'Horváth Péter',
    rating: 4,
    text: 'Tetszik a kártyás/érmés automata rendszer, és hogy reggel 6-tól este 10-ig nyitva van. Hétvégén is be lehet ugrani. Mindig tiszta és illatos a helyiség.',
    date: '2026.04.10.',
    initials: 'HP',
  },
  {
    id: 'rev-5',
    author: 'Varga Beatrix',
    rating: 5,
    text: 'Imádom a fekvő gépeket, nagyon relaxáló a zene és az arcbarnító fokozat is tökéletes. Mór legprofibb szoláriuma!',
    date: '2026.06.20.',
    initials: 'VB',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Hogyan működik az automata szolárium?',
    answer: 'Szoláriumunk teljesen önkiszolgáló és automata rendszerű. A recepció nélküli időkben a bejárat melletti automatánál vásárolhatsz zsetont vagy fizethetsz közvetlenül érmével/bankjeggyel a gépek melletti vezérlőknél. 170 Ft / perc áron üzemel a rendszer, így szabadon megválaszthatod a kívánt barnulási időt.',
  },
  {
    question: 'Be kell jelentkezni a szoláriumba?',
    answer: 'A szolárium gépekhez nem kell és nem is lehet előre bejelentkezni! Érkezési sorrendben lehet igénybe venni a 4 elérhető gépünket (2 fekvő és 2 álló). Ha manikűrre vagy műkörömre szeretnél jönni, ahhoz viszont előzetes telefonos bejelentkezés szükséges a +36 20 327 2558-as számon.',
  },
  {
    question: 'Mit érdemes tudni a Chocolate Brown csövekről?',
    answer: 'A Chocolate Brown csövek a legújabb technológiát képviselik a barnítás terén. Kíméletes, de rendkívül intenzív mélybarnulást biztosítanak leégési kockázat nélkül, így bőre egészségesen fénylő, természetes csokoládébarna színt kap.',
  },
  {
    question: 'Milyen gyakran érdemes szoláriumozni?',
    answer: 'Két szoláriumozás között javasolt legalább 48 óra pihenőidőt tartani, hogy a bőr regenerálódni tudjon. Kezdőknek 4-6 perc javasolt, míg a már alapbarnasággal rendelkezők 8-12 percre is növelhetik az időt bőrtípustól függően.',
  },
  {
    question: 'Hogyan biztosítják a higiéniát?',
    answer: 'Minden szolárium kabinban előre kikészített, professzionális fertőtlenítő spray és papírtörlő található. Kérjük minden kedves vendégünket, hogy használat előtt és után törölje át a gépet az abszolút higiénia fenntartása érdekében. Az álló gépeinknél pedig a fizikai érintkezés minimális.',
  },
];
