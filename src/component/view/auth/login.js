import React, {useState} from 'react';

import {White, Black, Mariner} from '../../../common/Colors';
import Select from '../../widget/select';

import {FacebookSquare, Flag, Google, Logo} from '../../../../assets/images';
import {
  ImageView,
  TextView,
  OverallView,
  BlueView,
  GrayView,
  Wrapper,
  WrapperHorizontal,
  HorizontalView,
  VerticalView,
  ButtonView,
  HorizontalSpacer,
} from './styles';

const login = () => {
  const [value, changeValue] = useState({
    country: '',
    phone: '',
  });

  const handleForm = (name, text) => {
    changeValue({...value, [name]: text});
  };

  const countries = [
    {
      phone: '+234',
      icon: (
        <ImageView
          source={Flag}
          theme={{
            width: '30px',
            height: '20px',
          }}
        />
      ),
    },
    {
      phone: '+44',
      icon: (
        <ImageView
          source={Flag}
          theme={{
            width: '30px',
            height: '20px',
          }}
        />
      ),
    },
    {
      phone: '+91',
      icon: (
        <ImageView
          source={Flag}
          theme={{
            width: '30px',
            height: '20px',
          }}
        />
      ),
    },
  ];
  return (
    <OverallView>
      <BlueView>
        <Wrapper>
          <HorizontalView>
            <ImageView
              source={Logo}
              theme={{
                width: '52px',
                height: '52px',
              }}
            />
            <TextView
              theme={{
                marginLeft: '15px',
                color: White,
                fontSize: '56px',
                marginTop: '0px',
                fontWeight: '500',
              }}>
              Pickmeup
            </TextView>
          </HorizontalView>
          <VerticalView>
            <TextView
              theme={{
                marginLeft: '0px',
                fontWeight: '500',
                marginTop: '20px',
                color: White,
                fontSize: '26px',
              }}>
              Hey there!
            </TextView>
            <TextView
              theme={{
                marginLeft: '0px',
                fontWeight: '400',
                marginTop: '20px',
                color: White,
                fontSize: '26px',
              }}>
              Type in your phone number to get started
            </TextView>

            <Select
              collection={countries}
              name="country"
              handleForm={handleForm}
              value={value.country}
            />
          </VerticalView>
        </Wrapper>
      </BlueView>
      <GrayView>
        <WrapperHorizontal>
          <ButtonView theme={{borderColor: Mariner}}>
            <ImageView
              source={FacebookSquare}
              theme={{
                width: '22px',
                height: '22px',
                marginHorizontal: '4px',
              }}
            />
            <TextView
              theme={{
                color: Black,
                fontSize: '20px',
              }}>
              Facebook
            </TextView>
          </ButtonView>
          <ButtonView>
            <HorizontalSpacer
              theme={{
                marginLeft: 10,
              }}>
              <ImageView
                source={Google}
                theme={{
                  width: '22px',
                  height: '22px',
                  marginHorizontal: '5px',
                }}
              />
              <ButtonView
                theme={{
                  width: '77%',
                  borderColor: Mariner,
                  backgroundColor: Mariner,
                }}>
                <TextView
                  theme={{
                    color: White,
                    fontSize: '20px',
                  }}>
                  Google
                </TextView>
              </ButtonView>
            </HorizontalSpacer>
          </ButtonView>
        </WrapperHorizontal>
      </GrayView>
    </OverallView>
  );
};

export default login;
