import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import LeftNav from '../components/common/LeftNav';
import HeaderBar from '../components/common/header/HeaderBar';

const AnswerEditPage = () => {
  const [value, setValue] = useState('');
  const initialValue = `Try this:
\`\`\`javascript
cy.window().then(win => {
  cy.get('svg')
    .trigger('mousedown', {
      which: 1,
      force: true,
      view: win,
    })
    .trigger('mousemove', {
      clientX: 300,
      clientY: 500,
      force: true,
    })
    .trigger('mouseup', {
      force: true,
      view: win,
    });
});
\`\`\`

Referencing [Jennifer Shehane's answer in this GitHub issue][1], the answer to the \`cannot read property document of undefined\` part is to plug the window object into \`view\` in the trigger options. The issue mentioned in jacefarm's answer, where no movement occurred, seems to be resolved by specifying \`clientX\`/\`clientY\` rather than using positions relative to the selected element.
`;

  useEffect(() => {
    setValue(initialValue);
  }, []);
  return (
    <EditContainer>
      <HeaderBar className="pt-6" />
      <LeftNav />
      <EditContentContainer>
        <div>
          <div className="text-xl pb-6">Answer</div>
          <div data-color-mode="light">
            <MDEditor height={300} preview="edit" value={value} onChange={setValue} />
          </div>
          <ReactMarkdown className="my-6 text-sm">{value}</ReactMarkdown>
          <div className="flex">
            <SubmitButton>Save edits</SubmitButton>
            <a href="/" className="p-2.5 pt-2 mx-2 mt-1.5 text-sm text-sky-600 hover:bg-sky-50">
              Cancel
            </a>
          </div>
        </div>
        <div>
          <HowToFormat>
            <HowToFormatHeader>How to Edit</HowToFormatHeader>
            <HowToFormatBody>
              <li className="text-sm list-disc my-3">Correct minor typos or mistakes</li>
              <li className="text-sm list-disc my-3">Clarify meaning without changing it</li>
              <li className="text-sm list-disc my-3">Add related resources or links</li>
              <li className="text-sm list-disc my-3">
                <i>Always</i> respect the author’s intent
              </li>
              <li className="text-sm list-disc my-3">Don’t use edits to reply to the author</li>
            </HowToFormatBody>
          </HowToFormat>

          <HowToFormat>
            <HowToFormatHeader>How to Format</HowToFormatHeader>
            <HowToFormatBody>
              <li className="text-sm list-disc my-3">
                create code fences with backticks ` or tildes ~
                <div className="p-2 mr-48 bg-slate-100">
                  ```
                  <br />
                  like so
                  <br />
                  ```
                </div>
              </li>
              <li className="text-sm list-disc my-3">
                create code fences with backticks ` or tildes ~
                <div className="p-2 mr-48 bg-slate-100">
                  ```python
                  <br />
                  def function(foo):
                  <br />
                  print(foo)
                  <br />
                  ```
                </div>
              </li>
              <li className="text-sm list-disc my-3">put returns between paragraphs</li>
              <li className="text-sm list-disc my-3">for linebreak add 2 spaces at end</li>
              <li className="text-sm list-disc my-3">
                <i>_italic_</i> or <b>**bold**</b>
              </li>
              <li className="text-sm list-disc my-3">indent code by 4 spaces</li>
              <li className="text-sm list-disc my-3">
                backtick escapes <code className="bg-slate-100">`like _so_`</code>
              </li>
              <li className="text-sm list-disc my-3">quote by placing &gt; at start of line</li>
              <li className="text-sm list-disc my-3">
                to make links (use https whenever possible)
                <br />
                &lt;https://example.com&gt; [example](https://example.com) &lt;a
                href=&quot;https://example.com&quot;&gt;example&lt;/a&gt;
              </li>
            </HowToFormatBody>
          </HowToFormat>
        </div>
      </EditContentContainer>
    </EditContainer>
  );
};

const EditContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 1264px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

const EditContentContainer = styled.div`
  display: flex;
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px;
`;

const SubmitButton = styled.button`
  display: inline-block;
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.4;
  padding: 0.8em;
  text-align: center;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  border: 1px solid;
  border-radius: 3px;
  max-height: 40px;
  margin-top: 5px;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

const HowToFormat = styled.div`
  width: 400px;
  background-color: hsl(47, 87%, 94%);
  border: 1px solid hsl(47, 65%, 84%);
  border-radius: 3px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  margin-left: 40px;
  margin-bottom: 12px;
`;

const HowToFormatHeader = styled.div`
  border-radius: 3px;
  background-color: hsl(47, 83%, 91%);
  color: hsl(210, 8%, 25%);
  border-top: 1px solid hsl(47, 65%, 84%);
  padding: 12px 15px;
`;

const HowToFormatBody = styled.ul`
  display: block;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 35px;
  border-top: 1px solid hsl(47, 65%, 84%);
`;

export default AnswerEditPage;
