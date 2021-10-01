import styled from 'styled-components/native';
import * as Colors from '../../../common/Colors';

export const CustomTouch = styled.TouchableOpacity`
  background-color: ${Colors.SnowDrift};
  flex-direction: row;
  width: ${props => (props.theme.width ? props.theme.width : '30%')};
  height: ${props => (props.theme.height ? props.theme.height : '100%')};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right-width: 2px;
  border-right-color: gray;
`;

export const CustomTouchItem = styled.TouchableOpacity`
  background-color: ${Colors.SnowDrift};
  flex-direction: row;
  width: ${props => (props.theme.width ? props.theme.width : '30%')};
  height: ${props => (props.theme.height ? props.theme.height : '100%')};
  justify-content: center;
  align-items: center;
  border-bottom-width: 4px;
`;

export const SelectView = styled.View`
  background-color: ${Colors.White};
  width: 100%;
  height: 60px;
  margin-top: 70px;
  flex-direction: row;
`;

export const AbsoluteView = styled.View`
  position: absolute;
  z-index: 100;
`;

export const CustomView = styled.View``;

export const TextView = styled.Text`
  font-size: ${props => (props.theme.fontSize ? props.theme.fontSize : '15px')};
  color: ${props => (props.theme.color ? props.theme.color : Colors.Black)};
  margin-left: ${props =>
    props.theme.marginLeft ? props.theme?.marginLeft : 0};
  font-weight: ${props =>
    props.theme?.fontWeight ? props.theme?.fontWeight : 400};
  margin-top: ${props => (props.theme?.marginTop ? props.theme?.marginTop : 0)};
`;
