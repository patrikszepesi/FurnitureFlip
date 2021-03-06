import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';


const Invoice = ({ order }) => (

  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ {new Date().toLocaleString()} ~
      </Text>
      <Text style={styles.title}>Számla</Text>
      <Text style={styles.author}>MoveIn</Text>
    
      <Text style={styles.text}>
        <Text>
          Számla letöltése: {'               '}
          {new Date().toLocaleString()}
        </Text>
        {'\n'}
        <Text>
          Vásárlás időpontja: {'         '}
          {order.time}
        </Text>
        {'\n'}
        <Text>
          Számla azonosító: {'  '}
          {order._id}
        </Text>
        {'\n'}
        <Text>
          Összesen fizetett: {'       '}
          {order.course.price}
        </Text>
      </Text>

      <Text style={styles.footer}> Köszönjük, hogy velünk vásárolt </Text>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey'
  },
  footer: {
    padding: '100px',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  }
});

export default Invoice;
