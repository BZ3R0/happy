# Happy

## install

### Node

Install node using a package manager like nvm. Install version 12.18.x

[node](https://nodejs.org/en/download/)

### Yarn (optional)

package manager for node modules. Its better than npm

follow these steps to install [yarn](https://yarnpkg.com/getting-started/install)

*Obs. isntall version close to 1.22.5

### Icons

```sh
$ yarn add react-icons
```

### Rotas

```sh
$ yarn add react-router-dom
$ yarn add @types/react-router-dom -D
```

### Maps

```sh
$ yarn add leaflet
$ yarn add react-leaflet
```

[documentation](https://reactrouter.com/web/guides/quick-start)


### Quick-Start

- Create app
```sh
$ yarn create react-app <app_name> --template typescript
```

- Clean up your project
```sh
remove readme
remove all files are not .html into public directory
Into index.html remove theme-color meta and favicon
Into src directory remove all files but App.tsx, index.tsx and react-app-env.d.ts
Into index.tsx remove lines 'import ./index', 'import * from ./serviceworker';
Into App.tsx remove 'css' and './logo.svg' and remove the whole header and set only an h1 with hello world;
```

- Create images directory into src
```sh
$ mkdir src/images
```

- Create styles directory into src
```sh
$ mkdir src/styles
```

- Create global css to the project
```sh
$ touch src/styles/global.css
```

- Download font from google
Nunito Semi-bold 600
Nunito Bold 700
Nunito Extra-bold 800

##  initialization

```sh
$ nvm use v12.18.3
```

- init app
```sh
$ yarn start
```

## Interesting to know

- Components
Every component on react is a function which returns an html content
```sh
function Title() {
    return (
        <h1>Hello World</h1>
    );
}
```

- Properties
Pass an attribute to a component
```sh
interface TitleProps {
    text: string;
}

function Title(props: TitleProps) {
    return (
        <h1>{props.text}</h1>
    );
}

function App(){
    return (
        <div className='App'>
            <Title text='Titulo 1' />
            <Title text='Titulo 2' />
            <Title text='Titulo 3' />
            <Title text='Titulo 4' />
        </div>
    );
}
```

- Download images
[images](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web)