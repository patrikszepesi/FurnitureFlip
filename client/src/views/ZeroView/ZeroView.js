import React from 'react';
import { Section, SectionAlternate } from '../../../components/organisms';
import { Hero, Main, Partners, Contact } from './components';

import { folio, partners } from './data';

const ZeroView = () => (
  <div>
    <Hero />
    <Section>
      <Main data={folio} />
    </Section>
    <SectionAlternate>
      <Contact />
    </SectionAlternate>
  </div>
);

export default ZeroView;
