export default class App extends React.Component {
    render() {
      return (
        <View>
          <Button
            title="Menuju Screen Lain"
            onPress={() => this.props.navigation.navigate('NamaRute')}
          />
          <Button
            title="Menuju Screen Lain"
            onPress={() => this.props.navigation.navigate('NamaRute', {key:'value'})}
          />
          <Text>{this.props.route.params.key}</Text> 
        </View>
      )
    }
  } 
  
  // sedangkan pada function component:
   export default function App ({route, navigation}) {
      return (
        <View>
          <Button
            title="Menuju Screen Lain"
            onPress={() => navigation.navigate('NamaRute')}
          />
          <Button
            title="Menuju Screen Lain"
            onPress={() => navigation.navigate('NamaRute', {key:'value'})}
          />
          <Text>{route.params.key}</Text> 
        </View>
      )
  }  