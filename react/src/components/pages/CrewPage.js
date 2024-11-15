import './SectionPage.css'
import SideHeader from '../SideHeader';
import TitleBar from '../TitleBar';
// import Footer from '../Footer';
import anon from '../../images/male_icon.svg'

const CrewPage = () => {
  const pageTitle = 'Załoga';
  const pageLinks = [
    { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
    { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
    { text: 'Załoga', href: '/crew', title: 'Obecna strona' },
  ];

  const instructorsData = [
    { name: 'Maria Sienkiewicz', imageSrc: anon, link: '/strona_marii' },
    { name: 'Tomasz Goluch', imageSrc: anon, link: 'https://pg.edu.pl/p/tomasz-goluch-740294'},
    { name: 'Jakub Szczepkowski', imageSrc: anon, link: '/strona_szczep'},
    { name: 'Karol Pliszka', imageSrc: anon, link: '/strona_pliszka'},
    { name: 'Michał Masiulanis', imageSrc: anon, link: '/strona/masiulanis'},
    { name: 'Arek Kłos', imageSrc: anon, link: '/strona_klos'},
    { name: 'Michał Czubenko', imageSrc: anon, link: 'https://pg.edu.pl/p/michal-czubenko-740072'},
    { name: 'Szymon Swosiński', imageSrc: anon, link: 'https://pg.edu.pl/p/jakub-pankowski-3610'},
    // Dodaj pozostałe dane instruktorów
  ];

  const racingTeamData = [
    { name: 'Jakub Pankowski', imageSrc: anon, link: '/strona_jakuba' },
    // Dodaj pozostałe dane członków zespołu
  ];

  return (
    <div>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
      <div className='container12'>
        <div className='text-text'>
          <h3>Instruktorzy na obozach szkoleniowych w Iławie</h3>
          {instructorsData.map((instructor, index) => (
            <a key={index} className='tile' href={instructor.link}>
            <img src={instructor.imageSrc} alt={`${instructor.name} - zdjęcie`} />
            <p>{instructor.name}</p>
            </a>
            ))}
          <h3>Trener Sekcji Żeglarskiej</h3>
          {racingTeamData.map((member, index) => (
            <div key={index} className='tile' href={member.link}>
              <img src={member.imageSrc} alt={`${member.name} - zdjęcie`} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      <SideHeader />
    </div>
  );
};

export default CrewPage;