import {ScrollView, View, StyleSheet} from 'react-native';
import Card from "../UI/Card";
import IconButtonCell from "./IconButtonCell";
import Colors from "../../constants/colors";


export default function Totals() {
    function buttonCellHandler() {

    }

    return (
        <Card>
           <ScrollView
               style={styles.rootContainer}
               horizontal={true}
               vertical={false}
               showsHorizontalScrollIndicator={false}

           >
               <View style={styles.container}>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="home"
                           iconBackground={Colors.purple200}
                           color={Colors.purple500}
                           size={24}
                           onPress={buttonCellHandler}
                       >
                           账号管理
                       </IconButtonCell>
                   </View>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="home"
                           iconBackground={Colors.red200}
                           color={Colors.red500}
                           size={24}
                           onPress={buttonCellHandler}
                       >
                           账号管理
                       </IconButtonCell>
                   </View>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="home"
                           iconBackground={Colors.red200}
                           color={Colors.red500}
                           size={24}
                           onPress={buttonCellHandler}
                       >
                           账号管理
                       </IconButtonCell>
                   </View>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="home"
                           iconBackground={Colors.red200}
                           color={Colors.red500}
                           size={24}
                           onPress={buttonCellHandler}
                       >
                           账号管理
                       </IconButtonCell>
                   </View>
               </View>
           </ScrollView>
        </Card>
    );
}

const styles = StyleSheet.create(
    {
        rootContainer: {
        },
        container: {
            flexDirection: 'row',
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
        },
        buttonContainer: {
            marginHorizontal: 20,
        }
    }
);

