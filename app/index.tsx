import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handelLogin = () => {
    if (!email || !password) {
      alert("Email or Password is empty")
    } else {
      router.push('/tinder')
    }
  }

  return (
    <ScrollView className="flex-1 bg-[#1A1A2F] px-2">
      <View className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }
          }
          className="w-48 h-10 border-gray-400 border-[1px] flex justify-center items-center  rounded-lg px-2 text-white"
        >
        </TextInput>
        <TextInput
          secureTextEntry={true}
          placeholder="Passwrod"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }
          }
          className="w-48 h-10 border-gray-400 border-[1px] flex justify-center items-center  rounded-lg px-2 text-white"
        >
        </TextInput>

        <TouchableOpacity
          onPress={() => handelLogin()}
          className="w-20 h-10 bg-blue-600 flex justify-center items-center rounded-md"
        >
          <Text className="text-white font-bold text-base" >Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
  );
}