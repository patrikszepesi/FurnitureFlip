import React, { useState,useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';
import { Context } from "../../../context";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();
  const router = useRouter();


  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });




  const pages = {
    landings: {
      title: 'Kategóriák',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Összes',
          pages: [
            {
              title: 'Sport/szabadidő',
              href: '/category/sport-es-szabadido',
            },
            {
              title: 'Bútor/otthon',
              href: '/category/butor-es-otthon',
            },
            {
              title: 'Műszaki cikkek',
              href: '/category/muszaki-cikkek',
            },
            {
              title: 'Ruha',
              href: '/category/ruha',
            },
            {
              title: 'Könyvek',
              href: '/category/konyvek',
            },
            {
              title: 'Mama/baba',
              href: '/category/mama-baba',
            },
            {
              title: 'Művészet',
              href: '/category/muveszet',
            },
            {
              title: 'Alkatrészek',
              href: '/category/alkatreszek',
            },
          ],
        },

        web: {
          groupTitle: 'Legfelkapottabb',
          pages: [
          {
            title: 'Műszaki cikkek',
            href: '/category/muszaki-cikkek',
          },
          {
            title: 'Ruha',
            href: '/category/ruha',
          },
          {
            title: 'Könyvek',
            href: '/category/konyvek',
          },
          {
            title: 'Sport/szabadidő',
            href: '/category/sport-es-szabadido',
          },
          ],
        },
      },
    },
    pages: {
      title: 'Mi ez',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Általános',
          pages: [
            {
              title: ' Hogyan Működik, Eladóknak',
              href: '/what',
            },
            {
              title: ' Hogyan Működik, Vevőknek',
              href: '/for-buyers',
            },
            {
              title: 'ÁSZF',
              href: '/aszf',
            },

          ],
        },

        portfolio: {
          groupTitle: 'ZeroWaste',
          pages: [
            {
              title: 'Zero Waste',
              href: '/zero-waste',
            },
            {
              title: 'Partnereink',
              href: '/partners',
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
          groupTitle: user? 'Termékek': "Profilod",
          pages: [
          {
            title: user?  'Eddig vettem': '',
            href: user ? '/user': '',
          },

            {
              title: user?  'Eddig eladtam': 'Bejelentkezés',
              href: user ? '/seller/sold': '/login',
            },
            {
              title: user? 'Jelenlegi hirdetéseim ': 'Regisztráció',
              href: user? '/seller': '/register',
            },
            {
              title: user? 'Pénzügyi adataid' :' ',
              href: user? '/seller/revenue': ' ',
            },
            {
              title: user? '': "Elfelejtett jelszó",
              href:user? '':'/forgot-password',
            },
          ],

        },
        portfolio: {
          groupTitle: user? 'Profil': '',
          pages: [
          {
            title: user?  'Eladok valamit': '',
            href: user ? '/seller/item/create': '',
          },
          {
            title: user?  'Veszek valamit': '',
            href: user ? '/categories': '',
          },
          {
            title: user? 'Elmentett termékek' :' ',
            href: user? '/user/wishlist': ' ',
          },
          {
            title: user? 'Legyél eladó' :' ',
            href: user? '/user/become-seller': ' ',
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
