// ArticleData.js
import yacht from '../images/baner_yacht.jpg';
// import motor from '../images/baner_motor.png';
import PG_logo from '../images/pg-logotyp.svg'

export const articles = [
  {
    id: '1',
    title: 'Kurs żeglarza jachtowego',
    date: '10-20-2020',
    image: yacht,
    preview_content:'Jak co roku Sekcja Żeglarska ma zaszczyt zaprosić na obozy szkoleniowe na patent żeglarza jachtowego. Oferujemy studentom Politechniki Gdańskiej możliwość zdobycia pierwszych żeglarskich szlifów na wodach jeziora Jeziorak w niepowtarzalnej atmosferze. Szkolić będą doskonale przygotowani instruktorzy',
    content: 'Treść artykułu o kursie żeglarza jachtowego...',
    link: '/#',
  },
  {
    id: '2',
    title: 'Kurs motorowodny',
    date: '12-12-2023',
    image: PG_logo,
    content: 'Treść artykułu o kursie motorowodnym...',
    link: '/#',
  },
  {
    id: '3',
    title: 'Kurs pływacki',
    date: '11-01-2023',
    image: PG_logo,
    content: 'Treść artykułu o kursie motorowodnym...',
    link: '/#',
  },
];

