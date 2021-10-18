import React, {useState} from 'react';

import {
  SelectView,
  CustomView,
  CustomTouch,
  CustomTouchItem,
  TextView,
  AbsoluteView,
} from './styles';
import TextInput from '../textInput';

const Select = ({collection, value, handleForm}) => {
  const currentValue = value.length === 0 ? collection[0] : value;
  const [showOptions, changeShowOption] = useState(false);

  const handleSelect = (name, item) => {
    handleForm(name, item);
    changeShowOption(false);
  };

  return (
    <CustomView CustomView>
      {showOptions && (
        <AbsoluteView>
          {collection?.map(item => (
            <CustomTouchItem
              onPress={() => handleSelect('country', item)}
              theme={{
                width: '100%',
                height: '30px',
              }}>
              {item.icon}
              <TextView
                theme={{
                  marginLeft: '0px',
                  fontSize: '10px',
                  marginTop: '0px',
                  fontWeight: '400',
                }}>
                {item.phone}
              </TextView>
            </CustomTouchItem>
          ))}
        </AbsoluteView>
      )}

      <SelectView style={{borderRadius: 10}}>
        <CustomTouch onPress={() => changeShowOption(!showOptions)}>
          {currentValue.icon}
          <TextView
            theme={{
              marginLeft: '0px',
              fontSize: '20px',
              marginTop: '0px',
              fontWeight: '500',
            }}>
            {currentValue.phone}
          </TextView>
        </CustomTouch>

        <CustomView>
          <TextInput handleForm={handleForm} placeholder="07039148866" />
        </CustomView>
      </SelectView>
    </CustomView>
  );
};

export default Select;
