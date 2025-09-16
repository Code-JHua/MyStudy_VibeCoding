import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [params] = useSearchParams();
  return <h2>🔍 搜索内容：{params.get('q') || '无'}</h2>;
}
