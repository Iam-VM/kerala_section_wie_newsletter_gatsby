import React from "react";
import {graphql} from "gatsby";
import "../../static/collegePage.css";
import Footer from "../components/indexNew/footer"

const CollegePage = ({data}) => {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;

  const htmlToBeInjected = `
  <head>
    <link rel="stylesheet" href="/collegePage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
    ${html}`;

  return (
    <div className={"collegePageContainer"}>
      <h4 className={"hubName"}>{frontmatter.hubname}</h4>
      <h1 className={"collegeName"}>{frontmatter.collegename}</h1>
      <div className={"injectionWrapper"} dangerouslySetInnerHTML={{__html: htmlToBeInjected}} />
      <Footer />
    </div>
  );
};


export default CollegePage;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark (frontmatter: {slug: {eq: $slug}}){
            html
            frontmatter {
                collegename,
                slug,
                hubname
            }
        }
    }
`;