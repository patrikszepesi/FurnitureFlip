
import sport from '../../../../public/assets/biking-solid.svg'
import { colors } from '@material-ui/core';


export const integrations = [
  {
    iconColor: colors.blue,
    iconBg: colors.blue,
    icon: 'fas fa-couch',
    title: 'Bútor és Otthon',
    redirect:'butor-es-otthon'
  },
  {
    iconColor: colors.purple,
    iconBg: colors.purple,
    icon: 'fas fa-biking',
    title: 'Sport és szabadidő',
    redirect:'sport-es-szabadido'

  },
  {
    iconColor: colors.amber,
    iconBg: colors.amber,
    icon: 'fas fa-tv',
    title: 'Műszaki cikkek',
    redirect:'muszaki-cikkek'

  },
  {
    iconColor: colors.indigo,
    iconBg: colors.indigo,
    icon: 'fas fa-tshirt',
    title: 'Ruhák',
    redirect:'ruha'

  },
  {
    iconColor: colors.pink,
    iconBg: colors.pink,
    icon: 'fas fa-book',
    title: 'Könyvek',
    redirect:'konyvek'

  },
  {
    iconColor: colors.green,
    iconBg: colors.green,
    icon: 'fas fa-baby-carriage',
    title: 'Mama-baba',
    redirect:'mama-baba'

  },

];

export const reviews = [
  {
    authorName: 'Neil deGrasse Tyson',
    feedback:
      'A Föld mindössze porszem a világegyetemben. Ám egy nagyon értékes porszem, és egyelőre az egyetlen otthonunk..',
  }
];
