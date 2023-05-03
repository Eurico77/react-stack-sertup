import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export function Post() {
  const params = useParams();
  const queryParams = useLocation();

  const query = useMemo(
    () => new URLSearchParams(queryParams.search),
    [params]
  );

  console.log(query.get('search'));
  console.log(params);
  return <h1>Post</h1>;
}
