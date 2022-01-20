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
  }
  
`;

export default HOME_PAGE;