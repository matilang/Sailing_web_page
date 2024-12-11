import React from 'react';
import '../../App.css';
import SideHeader from '../SideHeader';
import TitleBar from '../TitleBar';
import { pageLinks, pageTitle, instructorsData, racingTeamData } from './CrewPageData';
import { Instructor, Member } from '../MemberInstructor';

export default function CrewPage() {
  return (
    <div>
      <TitleBar mainTitle={pageTitle} pageLinks={pageLinks} />
      <div className='crew-container'>
        <div className='member-instructor'>
          <h3>Instruktorzy na obozach szkoleniowych w Iławie</h3>
          {instructorsData.map((instructor, index) => (
            <Instructor key={index} instructor={instructor} />
          ))}

          <h3>Trener Sekcji Żeglarskiej</h3>
          {racingTeamData.map((member, index) => (
            <Member key={index} member={member} />
          ))}
        </div>
      </div>
      <SideHeader />
    </div>
  );
}
