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
                           icon="devices"
                           iconBackground={Colors.lightBlue500}
                           color={Colors.lightBlue50}
                           size={24}
                           onPress={buttonCellHandler}
                           type="MaterialIcons"
                       >
                           Thiết bị
                       </IconButtonCell>
                   </View>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="team"
                           iconBackground={Colors.lightBlue500}
                           color={Colors.lightBlue50}
                           size={24}
                           onPress={buttonCellHandler}
                           type="AntDesign"
                       >
                           Thành viên
                       </IconButtonCell>
                   </View>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="qrcode-scan"
                           iconBackground={Colors.lightBlue500}
                           color={Colors.lightBlue50}
                           size={24}
                           onPress={buttonCellHandler}
                           type="MaterialCommunityIcons"
                       >
                           Quét QR
                       </IconButtonCell>
                   </View>
                   <View style={styles.buttonContainer}>
                       <IconButtonCell
                           icon="line-scan"
                           iconBackground={Colors.lightBlue500}
                           color={Colors.lightBlue50}
                           size={24}
                           onPress={buttonCellHandler}
                           type="MaterialCommunityIcons"
                       >
                           Quét mã
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

