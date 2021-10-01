import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TextInputView} from './styles';
const TextInputComponent = ({value, handleForm, placeholder, name}) => {
  return (
    <View>
      <TextInputView
        onChangeText={text => handleForm(name, text)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#000000"
      />
    </View>
  );
};

export default TextInputComponent;
