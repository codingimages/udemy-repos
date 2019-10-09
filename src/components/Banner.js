import React from 'react'

import headerBannerStyle from "../components/css/headerBanner.module.css";

function Banner({ title, description, children }) {
    return (
        <div>
            <div className={headerBannerStyle.bannerBox}>
                <h1 className={headerBannerStyle.bannerTitle}>{title}</h1>
                <p className={headerBannerStyle.bannerSubTitle}>{description}</p>
                {children}
            </div>
        </div>
    )
}

export default Banner
