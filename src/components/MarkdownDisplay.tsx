import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Card from './reusable/Card';
import CustomButton from './reusable/CustomButton';
import MarkdownDisplayLine from './MarkdownDisplayLine';

interface Props {
  content: string[];
}

const MarkdownDisplay: React.FC<Props> = (props: Props) => (
  <Card>
    {
      props.content.map((line, i) => (
        <MarkdownDisplayLine isOddNumberedLine={i % 2 === 1} content={line} />
      ))
    }
    <CopyToClipboard text={props.content.join('\n')}>
      <CustomButton type="submit" value="Copy to Clipboard" />
    </CopyToClipboard>
  </Card>
);

export default MarkdownDisplay;
