import { Document, Page, Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import logo from '../public/assets/social.png'



const Invoice = ({ order }) => (

  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
    <>

    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>Vásárlási adatok</Text>
      </View>
      <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}> Azonosító : </Text>
                <Text style={styles.invoiceDate}>{order._id}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}> Vásárlás dátuma : </Text>
                <Text>{order.time.substring(0,10)}</Text>
            </View >
            <View style={styles.headerContainer}>

   </View>
     <Text >A vásárlási visszaigazolást emailben is elküldtük neked</Text>
   <View style={styles.container}>
        <Text style={styles.description}>Vásárolt Termék</Text>
        <Text style={styles.qty}>darab</Text>
        <Text style={styles.rate}>Ár</Text>

    </View>
    <View style={styles.container2}>
         <Text style={styles.description}>{order.item.name}</Text>
         <Text style={styles.qty}>1</Text>
         <Text style={styles.rate}>{order.item.price} Forint</Text>

     </View>
     <View style={styles.invoiceNoContainer}>
               <Text style={styles.label}>Összesen fizetett  : </Text>
               <Text style={styles.invoiceDate}>{order.item.price  } Forint</Text>
           </View >

            </>
    </Page>
  </Document>
);

const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#7ed957',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    page: {
      fontFamily: 'Helvetica',
      fontSize: 11,
      paddingTop: 30,
      paddingLeft:60,
      paddingRight:60,
      lineHeight: 1.5,
      flexDirection: 'column',
  },
  logo: {
      width: 74,
      height: 66,
      marginLeft: 'auto',
      marginRight: 'auto'
  },
  invoiceNoContainer: {
       flexDirection: 'row',
       marginTop: 36,
       justifyContent: 'flex-end'
   },
   total: {
        flexDirection: 'row',
        marginTop: 100,
        justifyContent: 'flex-end'
    },
   invoiceDateContainer: {
       flexDirection: 'row',
       justifyContent: 'flex-end'
   },
   invoiceDate: {
           fontSize: 12,
           fontStyle: 'bold',
   },
   label: {
       width: 100
   },
   headerContainer: {
       marginTop: 36
   },
   billTo: {
       marginTop: 20,
       paddingBottom: 3,
       fontFamily: 'Helvetica-Oblique'
   },
   tableContainer: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       marginTop: 24,
       borderWidth: 1,
       borderColor: '#7ed957',
   },
   container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
      //  height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
      //  flexGrow: 1,
       marginTop: 60
   },
   container2: {
        flexDirection: 'row',
        alignItems: 'center',
      //  height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
      //  flexGrow: 1,
       marginTop: 20
   },
   description: {
       width: '30%',
       borderRightColor: '#7ed957',
       borderRightWidth: 1,
   },
   qty: {
       width: '10%',
       borderRightColor: '#7ed957',
       borderRightWidth: 1,
   },
   rate: {
       width: '25%',
       borderRightColor: '#7ed957',
       borderRightWidth: 1,
   },
   amount: {
       width: '35%'
   }
  });

export default Invoice;
