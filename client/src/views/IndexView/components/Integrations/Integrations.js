import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from "next/router";
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLinkPlain, Image }from '../../../../../components/atoms';
import { SectionHeader,IconAlternate } from '../../../../../components/molecules';
import { CardBase } from '../../../../../components/organisms';
import imageIllustration from '../../../../../public/assets/online.svg'
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 50,
  },
}));

const Integrations = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const router = useRouter();


  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 8 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title="Ha már nem kell valami, add el itt."
                subtitle="Lehet valakinek pont az a régi fotogép kell ami ott porosodik a polcodon."
                align="left"
                ctaGroup={[
                  <LearnMoreLinkPlain
                    title="Tudj meg többet"
                    onClick={()=>router.push("/what")}
                    variant="h6"
                  />,
                ]}
                disableGutter
                data-aos="fade-up"
              />
            </Grid>
            <Grid item xs={12} md={5} data-aos="fade-up">
              <Image
                src={imageIllustration}
                alt="Integrations"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
            <h2>Legfelkapottabb kategóriák</h2>
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Tooltip title={item.title}>
                  <Grid item xs={4} key={index}>
                    <CardBase withShadow liftUp>
                      <IconAlternate
                      fontIconClass={item.icon}
                      size="medium"
                      color={item.iconColor}
                      />
                    </CardBase>
                  </Grid>
                  </Tooltip>

                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                title="Ha vennél valamit, tedd itt"
                subtitle="Miért vennél egy új könyvet, ha tudsz olcsóbban használtat venni amivel a környezetedet is tudod óvni?"
                align="left"
                label=" "
                ctaGroup={[
                  <LearnMoreLinkPlain
                    title="Tudj meg többet"
                    onClick={()=>router.push("/for-buyers")}
                    variant="h6"

                  />,
                ]}
                disableGutter
              />



            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Integrations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Integrations;
