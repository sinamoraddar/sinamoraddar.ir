import { graphql } from "gatsby";
import { string, oneOf } from "prop-types";

export const SocialType = {
  name: oneOf([
    "behance",
    "dribbble",
    "facebook",
    "github",
    "instagram",
    "linkedin",
    "producthunt",
    "twitter",
    "phone",
    "email",
    "resume",
  ]),
  url: string,
};

export const query = graphql`
  fragment SocialFragment on SocialYaml {
    name
    url
  }
`;
