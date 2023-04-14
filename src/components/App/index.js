import React, { createContext, useState } from 'react';

import { ThemeProvider } from '../../contexts/ThemeContext';
import { Header } from '../Header';
import { Post } from '../Post';

// Render -> mostrar o componente em tela
export default function App() {
  const [posts, setPosts] = useState([
    {
      likes: 10,
      id: 1,
      title: 'Semana do Reactjs',
      subtitle: 'Aprendendo mais sobre a ferramenta',
      read: false,
      removed: true,
    },
    {
      likes: 20,
      id: 2,
      title: 'Semana do Nodejs',
      subtitle: 'Aprendendo mais sobre a ferramenta',
      read: true,
      removed: false,
    },
    {
      likes: 35,
      id: 3,
      title: 'Semana do React Native',
      subtitle: 'Aprendendo mais sobre a ferramenta',
      read: false,
      removed: false,
    },
  ]);
  // sempre que o estado for alterado, o componente sera renderizado novamente
  // sempre que depender do valor anterior do estado, usar a funcao de callback do useState
  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        likes: 25,
        title: `Post titulo ${(Math.random() * 100).toFixed(0)}`,
        subtitle: 'Aprendendo mais sobre a ferramenta',
        read: false,
        removed: false,
      },
    ]);
  }

  function handleRemoverPost(id) {
    setPosts((prevState) =>
      prevState.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            removed: true,
            read: true,
          };
        }
        return post;
      })
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <div>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </div>
        {/* tudo que passar aqui sera injetado dentro da propiedade children */}
      </Header>
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          likes={post.likes}
          title={post.title}
          removed={post.removed}
          read={post.read}
          subtitle={post.subtitle}
          onRemove={handleRemoverPost}
          // poderia usar o spread operator para passar todos os valores de post de forma mais simples e dinâmica {...post}
        />
      ))}
    </ThemeProvider>
  );
}
