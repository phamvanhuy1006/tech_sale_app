import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  SnapshotViewIOSComponent,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebaseConfig } from "~/lib/firebase-config.js";
import Firebase from "firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { avatarName } from "~/lib/ultis/avatarName.js";

let app;
if (!Firebase.apps.length) {
  app = Firebase.initializeApp({
    apiKey: "AIzaSyCwT_qfZ_3yEitTzOP3nrZW3CAEiiDpHvo",
    authDomain: "techapp-ad995.firebaseapp.com",
    projectId: "techapp-ad995",
    storageBucket: "techapp-ad995.appspot.com",
    messagingSenderId: "826332030942",
    appId: "1:826332030942:web:fc3fe809491bd8bb8f5f4f",
    measurementId: "G-FGPNQQSPB8",
  });
} else {
  app = Firebase.app();
}

export default function ImageSelect({ avatar, style, userId }) {
  const [image, setImage] = useState(avatar);
  const [uploading, setUploading] = useState(false);
  console.log('1',image)

  const pickImage = async () => {
    setUploading(true)
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // let result = await ImagePicker.launchCameraAsync()

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result.uri)
        .then(() => {
          Alert.alert("Upload thành công!");
          setUploading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const uploadImage = async (uri) => {
    debugger;
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = app
      .storage()
      .ref()
      .child("image" + "/" + "avatar"+ userId);
    return ref.put(blob);
  };

  return (
    <View>
      <Button title="Pick" onPress={pickImage} />
      <Image source={{ uri: image }} style={style} />
      {uploading ?? (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
}
