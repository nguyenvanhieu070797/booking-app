import {ScrollView, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import Card from "../components/UI/Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function HomeScreen() {
    const [fetchedMessage, setFetchedMessage] = useState();
    const token = useSelector((state) => {
        return state?.auth?.token || ""
    });

    useEffect(() => {
        axios.get("https://react-native-course-e7193-default-rtdb.firebaseio.com/message.json?auth=" + token).then(
            (response) => {
                setFetchedMessage(response.data);
            }
        );
    }, [token]);

    if (!fetchedMessage) {
        return "";
    }


    return (
        <BackgroundStart>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootContainer}>
                <Card>
                    <Text>
                        {fetchedMessage}
                    </Text>
                </Card>
            </ScrollView>
        </BackgroundStart>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingVertical: 7,
    },
});
