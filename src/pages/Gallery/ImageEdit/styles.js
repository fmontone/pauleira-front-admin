import styled from 'styled-components';
import { transparentize } from 'polished';

import colors from '~/styles/colors';

import Card from '~/components/Card';
import { Input, TextArea } from '~/components/Form';
import ButtonCustom from '~/components/ButtonCustom';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${transparentize(0.3, colors.blackDeep)};

  z-index: 200;
`;

export const Container = styled(Card)`
  position: relative;

  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 16px;

  display: flex;
  flex-direction: column;

  border-radius: 0;

  overflow-y: auto;
`;

export const CloseWrapper = styled.div`
  width: 100%;
  height: 32px;
  margin-bottom: 8px;

  display: flex;
  justify-content: flex-end;
`;

export const ButtonClose = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: ${(props) => (props.fullScreen ? 'absolute' : 'relative')};
  top: ${(props) => (props.fullScreen ? '0' : 'unset')};
  left: ${(props) => (props.fullScreen ? '0' : 'unset')};
  width: ${(props) => (props.fullScreen ? '100%' : 'unset')};
  height: ${(props) => (props.fullScreen ? '100%' : 'unset')};
  padding-bottom: ${(props) => (props.fullScreen ? 'absolute' : '56.25%')};
  margin-bottom: ${(props) => (props.fullScreen ? 'unset' : '32px')};

  border-radius: ${(props) => (props.fullScreen ? '0' : '8px')};

  background: ${(props) =>
      props.fullScreen ? `${colors.blackDeep}` : `url(${props.src})`}
    center center;
  background-size: cover;

  overflow: auto;

  z-index: 300;
`;

export const Image = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export const ButtonFullScreen = styled.div`
  position: ${(props) => (props.fullScreen ? 'fixed' : 'absolute')};
  right: ${(props) => (props.fullScreen ? '16px' : '8px')};
  bottom: ${(props) => (props.fullScreen ? '16px' : '8px')};

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: ${transparentize(0.4, colors.blackDeep)};

  z-index: 1;
`;

export const InputTitle = styled(Input)`
  margin-bottom: 16px;
`;

export const InputDescription = styled(TextArea)`
  margin-bottom: 16px;
  height: 80px;
`;

export const ButtonSubmit = styled(ButtonCustom).attrs({
  type: 'submit',
  color: colors.statusSuccess,
})`
  width: 100%;
  margin-bottom: 16px;
`;

export const ButtonDeleteImage = styled(ButtonCustom).attrs({
  model: 'outline',
  size: 'small',
  color: colors.statusDanger,
})``;
