# Vite-React-Typescript Boilerplate

## Changes Over The Original Template

1. `yarn add @types/node @types/react @types/react-dom -D`
2. Add a file `tsconfig.json` to the project root, content reference is 'create-react-app'
3. Add a file `src/types/assets/index.d.ts` with the following [content](https://duncanleung.com/typescript-module-declearation-svg-img-assets/)
    ```javascript
    declare module "\*.svg" {
        import React = require("react");
        export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
        const src: string;
        export default src;
     }
    ```
4. Add the file `src/favicon.ico`
5. In the header of the file `src/index.html` add

```html
<link rel="icon" href="/src/favicon.ico" type="image/x-icon" />
```
