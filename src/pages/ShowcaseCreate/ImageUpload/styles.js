import styled from 'styled-components';

import ButtonCustom from '~/components/ButtonCustom';
import Card from '~/components/Card';

import { Slider } from '~/components/Form';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  .upload__input {
    position: absolute;
  }
`;

export const ButtonAddImage = styled(ButtonCustom).attrs({
  color: colors.statusInfo,
})`
  margin: 32px 0;
`;

export const PreviewCard = styled(Card)`
  width: 100%;
  margin-bottom: 16px;
`;

export const PreviewThumb = styled.div`
  position: relative;
  width: 164px;
  height: auto;
  padding-top: 56.25%;
  background: #000 url(${(props) => props.src}) no-repeat center center;
  background-size: contain;
`;
