import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Card from './reusable/Card';
import CustomButton from './reusable/CustomButton';
import { repoToMarkDownBadge } from '../utils/repoToBadge';

// Styles

const BadgeDisplay = styled.div`
  width: 100%;
`;

// Components

interface Props {
  repoName: string;
}

const BadgesSection: React.FC<Props> = ({ repoName }: Props) => (
  <Card>
    <BadgeDisplay>
      <a href={`https://badge.fury.io/js/${repoName}`}>
        <img src={`https://badge.fury.io/js/${repoName}.svg`} alt="npm version" height="18" />
      </a>
    </BadgeDisplay>
    <CopyToClipboard text={repoToMarkDownBadge(repoName)}>
      <CustomButton type="submit" value="Copy to Clipboard" />
    </CopyToClipboard>
  </Card>
);

export default BadgesSection;
