import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';

const Story = props => {
  const { className,user, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  let toShow='Ha vásárolsz valamit akkor  az eladó a megadott email címeden fog keresni, amit megadtál a vásárláskor. Ha valami probléma van akkor minket is tudsz keresni vagy az eladót is tudod keresni a megadott elérhetőségein'


  return (

    <div className={className} {...rest}>
      <SectionHeader
        title="Eddig vásárolt tárgyaid"
        subtitle={toShow}
        align={isMd ? 'center' : 'left'}
        disableGutter
        subtitleProps={{
          color: 'textPrimary',
          variant: 'body1',
        }}
      />
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
