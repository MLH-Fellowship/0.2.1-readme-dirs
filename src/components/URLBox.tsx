import React from 'react';
import Card from './reusable/Card';
import Input from './reusable/Input';
import CustomButton from './reusable/CustomButton';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent) => void;
}

const URLBox: React.FC<Props> = (props: Props) => (
  <Card>
    <div className="row">
      <div className="col">
        <h1>Swegg App Title</h1>
      </div>
    </div>
    <div className="row">
      <div className="col" style={{ textAlign: 'center' }}>
        <Input placeholder="Enter a public GitHub URL" value={props.value} onChange={props.onChange} />
        <CustomButton value="Go" onClick={props.onClick} />
      </div>
    </div>
  </Card>
);

export default URLBox;
