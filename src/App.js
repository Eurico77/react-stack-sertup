import React from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';

const posts = [
  {
    likes: 10,
    title: 'Semana do Reactjs',
    subtitle: 'Aprendendo mais sobre a ferramenta',
  },
  {
    likes: 10,
    title: 'Semana do Nodejs',
    subtitle: 'Aprendendo mais sobre a ferramenta',
  },
  {
    likes: 10,
    title: 'Semana do React Native',
    subtitle: 'Aprendendo mais sobre a ferramenta',
  },
];

// Render -> mostrar o componente em tela
export default function App() {
  return (
    <>
      <Header title='Blog do Eurico'>
        <h2>Posts da semana</h2>
        {/* tudo que passar aqui sera injetado dentro da propiedade children */}
      </Header>
      <Post
        likes={10}
        title='Semana do Reactjs'
        subtitle='Aprendendo mais sobre a ferramenta'
      />
      <Post
        likes={10}
        title='Semana do Nodejs'
        subtitle='Aprendendo mais sobre a ferramenta'
      />
      <Post
        likes={10}
        title='Semana do React Native'
        subtitle='Aprendendo mais sobre a ferramenta'
      />
    </>
  );
}
