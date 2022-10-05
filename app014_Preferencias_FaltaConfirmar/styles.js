import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 5,
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#333'
  },  
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 15
  },
  textContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  }, 
  bgDay: {
    backgroundColor: '#F1F1F1'
  },
  bgNight: {
    backgroundColor: '#333'
  },
  textSmall: {
    fontSize: 13
  },
  textBig: {
    fontSize: 26
  },
  textBlack: {
    color: '#333'
  },
  textWhite: {
    color: '#FFF'
  }
})

export { styles }