export const sideNavLinks = [
    { label: 'Strefa pracownika', to: '/employee-zone' },
    { label: 'Biznes', to: '/business' },
    { label: 'Absolwenci', to: '/graduates' },
    { label: 'Społeczność lokalna', to: '/local-community' },
  ];

export  const mainNavLinks = [
    {
      label: 'Studenci',
      to: '/students',
      subLinks: [
        { label: 'Studia', to: '/students/studies' },
        { label: 'Sprawy studenckie', to: '/students/issues' },
        { label: 'Działalność studencka', to: '/students/activities' },
        { label: 'Moja PG', to: '/students/my-pg' },
      ],
    },
    { label: 'Rekrutacja', to: '/recruitment' },
    {
      label: 'Nauka',
      to: '/science',
      subLinks: [
        { label: 'Uczelnia badawcza', to: '/science/research-university' },
        { label: 'Projekty badawcze', to: '/science/research-projects' },
        { label: 'Publikacje naukowe', to: '/science/publications' },
        { label: 'Współpraca', to: '/science/collaboration' },
      ],
    },
    {
      label: 'Uczelnia',
      to: '/university',
      subLinks: [
        { label: 'Wydziały', to: '/university/faculties' },
        { label: 'Organizacja', to: '/university/organization' },
        { label: 'Władze', to: '/university/authorities' },
        { label: 'Fakty i Liczby', to: '/university/facts-figures' },
      ],
    },
  ];