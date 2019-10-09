import React from "react"

import headerBannerStyle from "../components/css/headerBanner.module.css";

const HeaderImg = ({ children }) => {
    return (
        <header className={headerBannerStyle.headerImg}>
            {children}
        </header>
    )
}

export default HeaderImg