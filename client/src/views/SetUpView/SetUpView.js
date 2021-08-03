import React from 'react';
import { Section, SectionAlternate } from '../../../components/organisms';
import { Faq, Contact } from './components';

import { faq } from './data';

const HelpCenter = () => (
  <div>
    <Section>
      <Faq data={faq} />
    </Section>
    <SectionAlternate>
      <Contact />
    </SectionAlternate>
  </div>
);

export default HelpCenter;
