import { ADD, CHANGE, CHANGENAME, CHANGEMARKDOWN, UPDATE } from '../action-creators/simpleAction';

var defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export const messageReducer = (state = ['hey'], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
};

export const titleReducer = (state = {title: 'My title'}, action) => {
	switch (action.type) {
		case CHANGE:
			// don't mutate state here
			var newObject = {title: action.title};
			return Object.assign({}, state, newObject);
		default:
			return state;
	}
};

export const nameReducer = (state = {docName: 'Untitled Document'}, action) => {
	switch (action.type) {
		case CHANGENAME:
			// don't mutate state here
			var newName = {docName: action.name};
			return Object.assign({}, state, newName);
		default:
			return state;
	}
};

export const markdownReducer = (state = {userMarkdown: defaultMarkdown}, action) => {
	switch (action.type) {
		case CHANGEMARKDOWN:
			// don't mutate state here
			var newMarkdown = {userMarkdown: action.markdown};
			return Object.assign({}, state, newMarkdown);
		default:
			return state;
	}
};

export const outputReducer = (state = {markdownDisplay: 'hey I am markdown output'}, action) => {
	switch (action.type) {
		case UPDATE:
			// don't mutate state here
			var newOutput = {markdownDisplay: action.markdownOuput};
			return Object.assign({}, state, newOutput);
		default:
			return state;
	}
};