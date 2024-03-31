import React from 'react'
import { useTranslation } from 'react-i18next';

const BannerLIve = () => {
    const { t } = useTranslation();

    return (
        <div className="bannerLive relative top-[70px] sm:top-[60px] md:top-[70px]">
            <div className="banner-text">
                <h6 className='text-[30px] sm:text-[35px] md:text-[48px] font-[700] font-[cursive] tracking-[2.5px]'>{t('Live')}</h6>
            </div>
        </div>
    )
}

export default BannerLIve
