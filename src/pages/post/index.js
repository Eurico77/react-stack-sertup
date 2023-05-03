import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export function Post() {
  const params = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(queryParams.get('key'));
  console.log(params);

  return <h1>Post</h1>;
}
