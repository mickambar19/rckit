# Rckit

Rckit stands for React components kit.
Library which includes all react components using babel compiler.

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

When you use these components you will have full compatible components which are instantiated under lib/index.js which is the entry for this package, so they will be ready to be used.

## How to install it.

1.  Install dependency

    `$ npm i git+ssh://git@gitlab.com:rckit/rckit.git`

    NOTE: Remember to set your ssh key.

2.  Install peer dependencies

    `$ npm i styled-components`

3.  Set ThemeProvider in order to get the theme
    In the App.js or main file of project set the Provider around the whole app.
    ```
    ReactDOM.render(<ThemeProvider>
      <App/>
    </ThemeProvider>, document.getElementById('root'));
    ```

## How to use it.

In the file you are working on just import and use it.
All components are exported as follows.

file.jsx

```
  import { Flex } from 'rckit'
```

## How to update it

`$ npm update rckit`

## How to create a new component

1. Clone repo
   `$ git clone https://github.com/amjimenez/rckit`

2. Inside the project install the necessary dependencies

   `$ npm i`

3. Execute the following script

   `$ npm run dev`

   After files compiled, the storybook will be ready on [localhost:6006](localhost:6006)
