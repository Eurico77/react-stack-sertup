import React, { useState } from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';

// Render -> mostrar o componente em tela
export default function App() {
  const [posts, setPosts] = useState([
    {
      likes: 10,
      id: 1,
      title: 'Semana do Reactjs',
      subtitle: 'Aprendendo mais sobre a ferramenta',
      read: false,
    },
    {
      likes: 20,
      id: 2,
      title: 'Semana do Nodejs',
      subtitle: 'Aprendendo mais sobre a ferramenta',
      read: true,
    },
    {
      likes: 35,
      id: 3,
      title: 'Semana do React Native',
      subtitle: 'Aprendendo mais sobre a ferramenta',
      read: false,
    },
  ]);
  // sempre que o estado for alterado, o componente sera renderizado novamente
  // sempre que depender do valor anterior do estado, usar a funcao de callback do useState
  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        likes: (Math.random() * 100).toFixed(0),
        title: `Post titulo ${(Math.random() * 100).toFixed(0)}`,
        subtitle: 'Aprendendo mais sobre a ferramenta',
      },
    ]);
  }

  function handleRemoverPost(id) {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  }

  return (
    <>
      <Header>
        <div>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </div>

        <strong>Sou um children</strong>
        {/* tudo que passar aqui sera injetado dentro da propiedade children */}
      </Header>
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          likes={post.likes}
          title={post.title}
          read={post.read}
          subtitle={post.subtitle}
          onRemove={handleRemoverPost}
          // poderia usar o spread operator para passar todos os valores de post de forma mais simples e dinâmica {...post}
        />
      ))}
    </>
  );
}
