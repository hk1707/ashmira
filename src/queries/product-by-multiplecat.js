import {gql} from "@apollo/client";

export const PRODUCT_BY_CATEGORY_SLUG = gql` query PRODUCT_BY_CATEGORY_SLUG($slug:[String]) {
	productCategories(where: { slug: $slug }) {
        nodes {
        name
        parentDatabaseId
          products(first: 50) {
              nodes {
                id
                productId: databaseId
                averageRating
                slug
                description
                image {
                  id
                  uri
                  title
                  srcSet
                  sourceUrl
                }
                name
                ... on SimpleProduct {
                  price
                  regularPrice
                  id
                }
                ... on VariableProduct {
                  price
                  regularPrice
                  id
                }
                ... on ExternalProduct {
                  price
                  id
                  regularPrice
                  externalUrl
                }
                ... on GroupProduct {
                  products {
                    nodes {
                      ... on SimpleProduct {
                        id
                        regularPrice
                        price
                      }
                    }
                  }
                  id
                }
              }
            }
        }
      }
  }
  `;

export const PRODUCT_CATEGORIES_SLUGS = gql` query PRODUCT_CATEGORIES_SLUGS {
    productCategories {
        nodes {
          id
          slug
          uri
          children {
            nodes {
              id
              slug
              uri
            }
          }
        }
      }
}`;
