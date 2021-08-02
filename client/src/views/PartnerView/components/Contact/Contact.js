import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';

const Contact = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx('jarallax', className)} {...rest}>
      <SectionHeader
        title="Támogatnál minket?"
        ctaGroup={[
          <a class="mailto" href="mailto:support@flipit.store">
          <Button variant="contained" color="primary" size="large">
            Írj nekünk
          </Button>
          </a>
        ]}
        data-aos="fade-up"
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
