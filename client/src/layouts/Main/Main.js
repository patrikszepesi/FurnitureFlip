import React, { useState,useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';
import { Context } from "../../../context";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });




  const pages = {
    landings: {
      title: 'Landings',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Coworking',
              href: '/coworking',
            },
            {
              title: 'Rental',
              href: '/rental',
            },
            {
              title: 'Job Listing',
              href: '/job-listing',
            },
            {
              title: 'E-Learning',
              href: '/e-learning',
            },
            {
              title: 'E-commerce',
              href: '/e-commerce',
            },
            {
              title: 'Expo',
              href: '/expo',
            },
          ],
        },
        apps: {
          groupTitle: 'Apps',
          pages: [
            {
              title: 'Desktop App',
              href: '/desktop-app',
            },
            {
              title: 'Mobile App',
              href: '/mobile-app',
            },
          ],
        },
        web: {
          groupTitle: 'Web',
          pages: [
            {
              title: 'Marketing',
              href: '/',
            },
            {
              title: 'Overview',
              href: '/home',
            },
            {
              title: 'Basic',
              href: '/web-basic',
            },
            {
              title: 'Service',
              href: '/service',
            },
            {
              title: 'Startup',
              href: '/startup',
            },
            {
              title: 'Enterprise',
              href: '/enterprise',
            },
            {
              title: 'Cloud Hosting',
              href: '/cloud-hosting',
            },
            {
              title: 'Agency',
              href: '/agency',
            },
            {
              title: 'Design Company',
              href: '/design-company',
            },
            {
              title: 'Logistics',
              href: '/logistics',
            },
          ],
        },
      },
    },
    pages: {
      title: 'Pages',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [
            {
              title: 'Lising',
              href: '/career-listing',
            },
            {
              title: 'Lising Minimal',
              href: '/career-listing-minimal',
            },
            {
              title: 'Opening',
              href: '/career-opening',
            },
          ],
        },
        helpCenter: {
          groupTitle: 'Help center',
          pages: [
            {
              title: 'Overview',
              href: '/help-center',
            },
            {
              title: 'Article',
              href: '/help-center-article',
            },
          ],
        },
        company: {
          groupTitle: 'Company',
          pages: [
            {
              title: 'About',
              href: '/about',
            },
            {
              title: 'About (Cover)',
              href: '/about-side-cover',
            },
            {
              title: 'Pricing',
              href: '/pricing',
            },
            {
              title: 'Terms',
              href: '/company-terms',
            },
          ],
        },
        contact: {
          groupTitle: 'Contact',
          pages: [
            {
              title: 'Reach View',
              href: '/contact-page',
            },
            {
              title: 'Sidebar Map',
              href: '/contact-sidebar-map',
            },
            {
              title: 'Cover',
              href: '/contact-page-cover',
            },
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Newsroom',
              href: '/blog-newsroom',
            },
            {
              title: 'Reach View',
              href: '/blog-reach-view',
            },
            {
              title: 'Search',
              href: '/blog-search',
            },
            {
              title: 'Article',
              href: '/blog-article',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/portfolio-grid',
            },
            {
              title: 'Parallax Effect',
              href: '/agency',
            },
          ],
        },
      },
    },


    account: {
      title: 'Profilod',
      id: 'account',
      children: {
        settings: {
          groupTitle: user? 'Termékek': "mizu",
          pages: [
            {
              title: 'Eddig eladtam',
              href: '/user',
            },
            {
              title: 'Jelenlegi hírdetéseim ',
              href: '/user',
            },
            {
              title: 'Számláim',
              href: '/invoice',
            },
            {
              title: 'Bevételeim',
              href: '/seller/revenue',
            },
          ],
        },


      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
