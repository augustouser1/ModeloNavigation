import {Text, TouchableOpacity, View} from "react-native";
import {MenuStackTypes} from "../../navigation/MenuStack.navigation";
import {styles} from './styles';

export function Slide1({navigation}: MenuStackTypes) {
      return(
        <View style={styles.container}>
          <Text style={styles.texto}>Slide 1</Text>
          <TouchableOpacity style={styles.botao}
               onPress={() => navigation.push("Slide2")}
          >
             <Text>Slide 2</Text>
          </TouchableOpacity>

        </View>
      )}