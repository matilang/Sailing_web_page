import '../../App.js'
import SideHeader from '../SideHeader';
import TitleBar from '../TitleBar';
import { pageLinks, pageTitle, instructorsData, racingTeamData } from './CrewPageData';

export default function CrewPage() {
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
