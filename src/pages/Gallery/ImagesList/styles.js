import styled from 'styled-components';

import { CircularProgressbar } from 'react-circular-progressbar';

import { MdEdit, MdDelete, MdClose } from 'react-icons/md';

import Card from '~/components/Card';
import { Form, Input, TextArea } from '~/components/Form';
import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';

export const Container = styled.ul`
  position: relative;
  width: 100%;
  list-style-type: none;
  padding: none;
  display: flex;
  flex-direction: column;
`;

export const ImageItem = styled.li`
  position: relative;
  width: 100%;
  height: 40px;
  padding-left: 72px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  background: ${colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);

  overflow: hidden;
`;

export const Thumbnail = styled.div`
  position: absolute;
  width: 72px;
  padding-top: 56.25%;
  top: 0;
  left: 0;
  border-right: 1px solid ${colors.greyLight};
  border-radius: 6px 0 0 6px;

  img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px 0 0 6px;
  }
`;

export const Filename = styled.div`
  width: 100%;
  height: 16px;
  margin-left: 8px;
  font-size: 12px;
  overflow: hidden;
`;

export const CircularProgress = styled(CircularProgressbar).attrs({
  styles: {
    root: { width: 20 },
  },
})`
  .CircularProgressbar-path {
    stroke: ${colors.statusInfo};
  }
`;

export const StatusWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  flex-direction: row;
`;

export const ButtonIcon = styled.button.attrs({ type: 'button' })`
  width: 24px;
  height: 24px;

  & + button {
    margin-left: 4px;
  }
`;

export const IconDelete = styled(MdDelete).attrs({
  size: 20,
  color: colors.grey,
})``;

export const IconEdit = styled(MdEdit).attrs({
  size: 18,
  color: colors.statusInfo,
})``;

export const ModalPreview = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 200;

  img {
    max-width: 80%;
    z-index: 3;
  }
`;

export const ModalClick = styled.button.attrs({ type: 'button' })`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
`;

export const ButtonClosePreview = styled.button.attrs({ type: 'button' })`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const IconClose = styled(MdClose).attrs({
  color: colors.white,
  size: 20,
})``;

export const CardContainer = styled(Card)`
  width: 90%;
  max-width: 700px;
`;

export const PreviewImage = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;

  background-image: url(${(props) => props.src});
  background-color: #000;
`;

export const StyledForm = styled(Form)`
  padding: 8px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 8px;
`;

export const StyledTextArea = styled(TextArea)`
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const ButtonCancel = styled(ButtonCustom).attrs({
  type: 'button',
  color: colors.grey,
  model: 'outline',
})`
  width: 100%;
`;

export const ButtonSubmit = styled(ButtonCustom).attrs({
  type: 'submit',
  color: colors.grey,
})`
  margin-left: 8px;
  width: 100%;
`;
