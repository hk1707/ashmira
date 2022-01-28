import { gql } from "@apollo/client";

const MENU_QUERY = gql`
  query {
    menus {
      nodes {
        id
        locations
        name
        slug
        count
        menuItems(where: { parentDatabaseId: 0 }) {
          edges {
            node {
              id
              parentDatabaseId
              title
              label
              path
              parentId
              childItems {
                nodes {
                  id
                  parentDatabaseId
                  title
                  label
                  path
                  parentId
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default MENU_QUERY;
