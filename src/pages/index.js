import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Deepak K"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Writer and Business Strategist"
          keywords={[`Deepak`, `Deepak's Blog`, `Deepakness`, `Deepak K`, `Deepakness Blog`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        {/* <h1>
          <span role="img" aria-label="wave emoji">๐</span>
          {" "} Yo!
        </h1> */}
        <p><span role="img" aria-label="wave emoji">๐ </span><strong>Yo! Iโm Deepak.</strong></p>
        <p>Mainly, I write and develop business strategies.</p>
        <p>
          Iโve been writing on the internet since 2015 and have learned a certain set of business skills on the way.
        </p>
        <p>Hereโs what I exactly do:</p>

        <h2>I write...</h2>
        <p>Iโve always loved <a href="https://deepakness.com/blog">writing</a>. Whether itโs my personal journal or a public blog post โ itโs fun to write. Also, writing pays my bills.</p>

        <p>Some of the best ones that Iโve written:</p>

        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://deepakness.com/blog/marketing-technopologist/">Everything about a Marketing Technopologist</a></p>

        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://deepakness.com/blog/millennianls-and-internet/">What a Millennial Wants from the Internet?</a></p>

        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://deepakness.medium.com/why-is-your-blog-not-growing-9-tips-199f590a462d" rel="noreferrer" target="_blank">Why is Your Blog Not Growing?</a></p>

        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://compile.blog/2019/04/04/high-performing-digital-contents/" rel="noreferrer" target="_blank">30+ Types of High Performing Content Marketing Ideas</a></p>

        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://deepakness.medium.com/why-manjaro-linux-is-the-best-linux-distribution-3ff79a50708f" rel="noreferrer" target="_blank">Why Manjaro Linux is the Best Linux Distribution</a></p>

        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://deepakness.medium.com/what-it-was-like-to-be-colonized-by-the-british-6a03eea701fb" rel="noreferrer" target="_blank">What It was Like to be Colonized by the British</a></p>

        <h2>I read...</h2>
        <p>I love to read too.</p>
        <p>Hereโs a list of blogs that produce high-quality contents and that I really love:</p>
        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://compile.blog/the-blogs-database/" rel="noreferrer" target="_blank">The Blogs Database</a></p>

        <h2>I create...</h2>
        <p>I create stuff on the internet.</p>
        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://compile.blog" rel="noreferrer" target="_blank">compile.blog</a>: A blog on blogging and technology tips.</p>
        <p><span role="img" aria-label="rocket emoji">๐ </span><a href="https://aspiringyouths.com" rel="noreferrer" target="_blank">Aspiring Youths</a>: A huge knowledge library for students.</p>

        <h2>I travel...</h2>
        <p>I travel too, occasionally.</p>
        <img style={{ margin: 0 }} src="Deepak-at-Hirakud.jpg" alt="Deepak at Hirakud" />

        <p>Hereโs me at the longest earthen dam in the world โ Hirakud, Sambalpur, India.</p>


        <h2>Currently...</h2>
        <p><span role="img" aria-label="rocket emoji">๐ </span>Taking <a href="https://notes.deepakness.com" rel="noreferrer" target="_blank">public raw notes</a> on things I learn</p>
        <p><span role="img" aria-label="rocket emoji">๐ </span>Learning to code</p>
        <p><span role="img" aria-label="rocket emoji">๐ </span>Reading โOutliersโ by Malcolm Gladwell</p>

        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="40px">Blog</Button>
        </Link>
        {/* 
        <hr />

        <p><a href="https://deepakness.com/privacy-policy/">Privacy Policy</a> | <a href="https://deepakness.com/terms-conditions/">Terms and Conditions</a></p> */}

      </Layout>
    )
  }
}

export default IndexPage
