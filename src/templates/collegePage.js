import React from "react";
import {graphql} from "gatsby";

const CollegePage = ({data}) => {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;

  const htmlToBeInjected = `
  <head>
    <link rel="stylesheet" href="/collegePage.css">
  </head>
    ${html}`;

  console.log(html);
  console.log(typeof html);
  return (
    <div className={"collegePageContainer"}>
      <h4>{frontmatter.hubname}</h4>
      <h2>{frontmatter.collegename}</h2>
      <div className={"blogPostContent"} dangerouslySetInnerHTML={{__html: htmlToBeInjected}} />
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