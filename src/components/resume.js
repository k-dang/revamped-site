import React from "react"
// import Image from "../components/image"
import resumeStyles from "./resume.module.css"
import { graphql, useStaticQuery } from "gatsby"
import smileySVG from "../images/upside-down-smiley.svg"
import markGithub from "../images/mark-github.svg"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            jobtitle
          }
        }
      }
    `
  )
  return (
    <div className={resumeStyles.container}>
      <div className={resumeStyles.header}>
        <div className={resumeStyles.avatar}>
          {/* <Image src="gatsby-icon.png" /> */}
          <img src={smileySVG} alt="upside down smiley"></img>
        </div>
        <div className={resumeStyles.desc}>
          <h2 className={resumeStyles.name}>{data.site.siteMetadata.author}</h2>
          <h5 className={resumeStyles.sub}>
            {data.site.siteMetadata.jobtitle}
          </h5>
        </div>
        <a href="https://github.com/k-dang">
          <img width="48px" height="48px" src={markGithub} alt="github"></img>
        </a>
      </div>
      {children}
    </div>
  )
}
