import { View, Button, Alert } from "react-native";

export default function App() {
    return <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
        <Button title="Alert" onPress={() => {
            Alert.alert('Invalid data!', 'DOB is incorrect!', [
                {
                    text: 'Cancel',
                    onPress: () => {
                        console.log('Cancel Pressed');
                    }
                },
                {
                    text: 'OK',
                    onPress: () => {
                        console.log('OK Pressed');
                    }
                }
            ]);
        }} />
    </View>
}