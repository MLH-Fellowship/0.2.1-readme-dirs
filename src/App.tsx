import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import styled from 'styled-components';
=======
<<<<<<< HEAD
>>>>>>> Add get requests
import { ripOutPaths, generateTree } from './tree';
=======
import { ripOutPaths } from './tree';
>>>>>>> Add get requests
import { GithubAPIResponseBody } from './tree/types';
=======
import { ripOutPaths, generateTree } from "./tree/index";
import styled from 'styled-components';
>>>>>>> Solve merge conflicts

const App: React.FC = () => <Input />;

const Input: React.FC = () => {
  const [url, setUrl] = useState('');
  const [markdownStrings, setMarkdownStrings] = useState(['']);

  const handleChange = event => {
    event.preventDefault();
    setUrl(event.target.value);
  }

  const handleKeyPressed = async event => {
    if (event.key === 'Enter') {
      // Expecting a URL like 'github.com/${owner}/${repo}'
      let pathArray = url.split('/');
      let owner = pathArray[1];
      let repo = pathArray[2];
      await makeRequest(owner, repo);
    }
  }

  const makeRequest = async (owner: String, repo: String) => {
    let response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/master`).then(res => res.json());
    let treeSHA = response["commit"]["tree"]["sha"];
    let tree = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${treeSHA}?recursive=true`).then(res => res.json());
    setMarkdownStrings(generateTree(ripOutPaths(tree)));
  }

  return (
    <Container>
      <h1>SWEGGG</h1>
<<<<<<< HEAD
      <input type="text" value={url} onChange={handleChange} />
=======
      <input placeholder="Enter a Github URL" type="text" value={url} onChange={handleChange} onKeyDown={handleKeyPressed}/>
>>>>>>> Solve merge conflicts
        <MarkDownDisplay>
            <MarkDownTextDisplay>
                <MarkDownTextContainerLight>
                    <MarkDownTextWrapper>
                        <MarkDownText>📂📄 Lorem Ipmsum</MarkDownText>
                    </MarkDownTextWrapper>
                    <DeleteContainer />
                </MarkDownTextContainerLight>
            </MarkDownTextDisplay>
            <Copy>
                <CopyButton>
                    <CopyText>Copy</CopyText>
                </CopyButton>
            </Copy>
        </MarkDownDisplay>
    </Container>
  );
};

export default App;

const MarkDownTextWrapper = styled.div`
  display: inline;
`;

const MarkDownText = styled.p`
  font-family: Arial;
  font-size: 16px;
`;


const MarkDownTextContainer = styled.div`
  height: 25px;
  padding: 0 5px;
  flex: 1 0;
  flex-direction: row;
  justify-content: space-between;
  
  &:hover {
    background-color: saddlebrown;
  }
`;

const MarkDownTextContainerLight = styled(MarkDownTextContainer)`
  background-color: white;
`;

const MarkDownTextContainerDark = styled(MarkDownTextContainer)`
  background-color: red;
`;

const DeleteContainer = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 500px;
  background-color: red;
  float: right;
  display: none;
  ${MarkDownTextContainer}:hover & {
    display: flex;
  }
`;

const Container = styled.div`
    background-color: aquamarine;
    flex: 1 0;
`;

const MarkDownDisplay = styled.div`
    width: 300px;
    flex: 1 0;
    background-color: grey;
    box-shadow: 0px 10px 5px lightgray;
    border-radius: 7px;
`;

const MarkDownTextDisplay = styled.div`
    padding: 5px 0;
    flex: 1 0;
`;

const Copy = styled.div`
  height: 25px;
  background-color: dimgrey;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;
const CopyButton = styled.div`
  height: 25px;
  margin-left: auto;
  background-color: darkgray;
  width: 50px;
  border-bottom-right-radius: 7px;
`;

const CopyText = styled.p`
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  color: white;
`;