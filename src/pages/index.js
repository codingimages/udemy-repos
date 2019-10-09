import React from "react"

import Layout from "../components/Layout"
import HeaderImg from "../components/HeaderImg"
import Banner from "../components/Banner"
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa"

import headerBannerStyle from "../components/css/headerBanner.module.css";


const IndexPage = () => (
  <Layout>
    <HeaderImg>
      <Banner title="Welcome to Coding Images" description="Web and mobile / development and design">
        <FaFacebookF className={headerBannerStyle.bannerIcons} />
        <FaYoutube className={headerBannerStyle.bannerIcons} />
        <FaTwitter className={headerBannerStyle.bannerIcons} />
      </Banner>
    </HeaderImg>
  </Layout>
)

export default IndexPage
