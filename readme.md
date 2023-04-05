# Configurando um projeto React do zero

Este guia irá mostrar como configurar um projeto React do zero, sem usar o Create React App. Iremos instalar as dependências necessárias manualmente e configurar o Babel para transpilar nosso código para um formato compatível com a maioria dos navegadores.

## Criando o projeto

```bash
mkdir meu-projeto
cd meu-projeto
mkdir src

npm init -y
npm install --save react react-dom
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli 
```

## Configurando o Babel

crie um ```.babelrc``` na raiz do projeto
```bash
touch .babelrc
```
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
