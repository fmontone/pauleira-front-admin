import styled from 'styled-components';

import { MdCloudUpload } from 'react-icons/md';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 134px;
  margin-bottom: 16px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.active ? 'unset' : '3px dashed #c6c6c6')};
  background-color: ${(props) => {
    const { active, reject } = props;
    if (!active) return 'unset';
    if (active && !reject) return colors.statusInfo;
    if (active && reject) return colors.statusDanger;
  }};
`;

export const IconUpload = styled(MdCloudUpload).attrs({
  color: colors.statusInfo,
  size: 48,
})`
  margin-bottom: 8px;
`;

export const TextIdle = styled.span`
  width: 70%;
  display: block;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${colors.greyHeavy};

  span {
    color: ${colors.statusInfo};
  }
`;

export const TextActive = styled.span`
  width: 70%;
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  text-align: center;
  color: ${colors.white};
`;
