import { usePostList } from '../../hooks/post';
import Layout from '../../components/layout';
import List from '../../components/List';

function BlogPage() {
  const data = usePostList();

  return (
    <Layout>
      <List nodes={data.allMdx.nodes} />
    </Layout>
  );
}

export default BlogPage;
