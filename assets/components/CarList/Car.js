import { View,FlatList } from 'react-native'
import Data from './CarData'
import CarComponent from '../CarComponent/CarComponent'
import styles from './styles'

const Car=()=> {
  {
    return (
      <View style={styles.container}>
        <FlatList
        data={Data}
         renderItem={({item})=><CarComponent car={item} />}
        />
      </View>
    )
  }
}

export default Car