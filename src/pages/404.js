import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import errorPageStyle from "../components/css/errorPage.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={errorPageStyle.errorPage}>
      <Banner title="Page not found" description="Please check your address and try again" />
    </div>
  </Layout>
)

export default NotFoundPage
