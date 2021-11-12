<p align="center">
  <img alt="UI Devtools" src="https://avatars2.githubusercontent.com/u/71650913?s=200&v=4" height="100px"/>
  <img alt="React" src="public/logo192.png"  height="100px" /></a>
  <br><br>
  <b>Example setup for React + TailwindCSS + UI Devtools</b>
  <br><br/><br><br/>
</p>

&nbsp;
&nbsp;

You can clone this repository or follow the steps ahead:

&nbsp;

**01**

&nbsp;

Use create-react-app to initialise a new React project:

&nbsp;

```
npx create-react-app react-example

cd react-example
```

&nbsp;

Add UI Devtools for tailwind

&nbsp;

```
yarn add --dev ui-devtools/tailwind
```

This package is available only to my sponsors on GitHub. Enjoy, and thanks for the support!

&nbsp;

&nbsp;

**02**

&nbsp;

Add TailwindCSS following the [official documentation](https://tailwindcss.com/docs/guides/create-react-app)

&nbsp;

```shell
yarn add --dev tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

yarn add --dev @craco/craco

npx tailwindcss init -p
```

&nbsp;

Next, create a [`craco.config.js`](/craco.config.js) at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins **along with the UI Devtools babel plugin**:

&nbsp;

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  babel: {
    plugins: ['@ui-devtools/tailwind/babel']
  }
};
```

&nbsp;

Modify scripts in [`package.json`](/package.json) to use `craco`

```js
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

&nbsp;

Include Tailwind in [`./src/index.css`](/src/index.css)

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

&nbsp;

&nbsp;

**03**

&nbsp;

Wrap your application root with `<Devtools>` in [`src/index.js`](src/index.js). This will render the visual editor inside your application for dev environment:

&nbsp;

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Devtools } from '@ui-devtools/tailwind';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Devtools>
      <App />
    </Devtools>
  </React.StrictMode>,
  document.getElementById('root')
);
```

&nbsp;

&nbsp;

**04**

&nbsp;

Start devtools server

&nbsp;

```shell
npx devtools-server -c tailwind.config.js
```

&nbsp;

#### Something's not working?

No worries, I'm here to help. Feel free to create an issue or reach out to me on [twitter](https://twitter.com/siddharthkp)/[email](https://sid.st/email).

&nbsp;
