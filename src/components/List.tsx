import { Link } from 'gatsby';
import styled from 'styled-components';

const Item = styled.li`
  & + & {
    margin-top: 1rem;
  }
`;

function List({ nodes }) {
  return (
    <ul>
      {nodes.map((node) => (
        <Item key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>
            {node.frontmatter.preview} - {node.frontmatter.date}
          </p>
        </Item>
      ))}
    </ul>
  );
}

export default List;
