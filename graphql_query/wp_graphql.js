import { gql } from "@apollo/client";

const HOME_PAGE = gql`
query MyQuery($ids:ID!) {
    page(id: $ids, idType: DATABASE_ID) {
      id
      homePage {
        commonSectionIcon {
          mediaItemUrl
        }
        homeBanner {
          mediaItemUrl
        }
        bannerTitle
        bannerButtonLinkText
        bannerBtnLink
        bestSellersLogo {
          mediaItemUrl
        } 
        bestSellersTitle
        skincareImage {
          mediaItemUrl
        }
        skincareTitle
        skincareDescription
        skincareButtonText
        skincareBtnLink
        whyAshmiraTitle
        aboutAshmira {
          aboutAshmiraImage {
            mediaItemUrl
          }
          aboutAshmiraTitle
          aboutAshmiraDescription
          aboutAshmiraButtonText
          aboutAshmiraButton
        }
        cleanBeautyTitle
        cleanBeautyDescription
        cleanBeautyIconWithTitle {
          cleanBeautyTitle
          cleanBeautyIcon {
            mediaItemUrl
          }
        }
        silkySmoothTitle
        silkySmoothDescription
        silkySmoothButton {
          url
          title
          target
        }
        silkySmoothImage {
          mediaItemUrl
        }
        ourNewsTitle
        ourSpaPartnersTitle
        ourSpaPartnersLogoOne {
          mediaItemUrl
        }
        ourSpaPartnersLogoTwo {
          mediaItemUrl
        }
        stayInTouchTitle
        stayInTouchSubTitle
        stayInTouchImage {
          mediaItemUrl
        }
        ashmiraQuoteTitle
        ashmiraQuoteSubtitle
        ashmiraQuoteImage {
          mediaItemUrl
        }
      }
    }
    posts(first: 3) {
      nodes {
        authorId
        id
        postId
        slug
        title
        content
        featuredImage {
          node {
            altText
            sourceUrl
            srcSet
            uri
          }
        }
        featuredImageId
        status
        }
      }
      products(first: 10) {
        nodes {
          id
          productId: databaseId
          averageRating
          slug
          description
          image {
            id
            altText
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
            id
            regularPrice
          }
          ... on ExternalProduct {
            price
            id
            externalUrl
            regularPrice
          }
          ... on GroupProduct {
            id
            products {
              nodes {
                ... on SimpleProduct {
                  id
                  price
                  regularPrice
                }
              }
            }
          }
        }
      }

  }`;

export default HOME_PAGE;
