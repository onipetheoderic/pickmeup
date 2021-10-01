import styled from 'styled-components/native';
import Text from '../../widget/text';
import View from '../../widget/view';
import Image from '../../widget/image';
import Button from '../../widget/button';
import * as Colors from '../../../common/Colors';

export const ButtonView = styled(Button)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => (props.theme.width ? props.theme.width : '45%')};
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props =>
    props.theme.backgroundColor ? props.theme.backgroundColor : 'transparent'};
`;

export const TextView = styled(Text)`
  font-size: ${props => (props.theme.fontSize ? props.theme.fontSize : '15px')};
  color: ${props => (props.theme.color ? props.theme.color : Colors.Black)};
  margin-left: ${props =>
    props.theme.marginLeft ? props.theme?.marginLeft : 0};
  font-weight: ${props =>
    props.theme?.fontWeight ? props.theme?.fontWeight : 400};
  margin-top: ${props => (props.theme?.marginTop ? props.theme?.marginTop : 0)};
`;

export const ImageView = styled(Image)`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin-left: ${props =>
    props.theme.marginHorizontal ? props.theme.marginHorizontal : 0};

  margin-right: ${props =>
    props.theme.marginHorizontal ? props.theme.marginHorizontal : 0};
`;

export const BlueView = styled(View)`
  flex: 4.5;
  background-color: ${Colors.Mariner};
`;

export const GrayView = styled(View)`
  flex: 1;
  background-color: ${Colors.SnowDrift};
  justify-content: center;
`;

export const OverallView = styled(View)`
  flex: 1;
  background-color: rgb(38, 103, 201);
`;

export const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const HorizontalView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const VerticalView = styled(View)`
  flex-direction: column;
`;

export const WrapperHorizontal = styled(View)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`;

export const HorizontalSpacer = styled(View)`
  margin-left: ${props => props.theme.marginLeft};
  flex-direction: row;
  align-items: center;
`;
