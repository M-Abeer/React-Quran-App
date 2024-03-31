import React from 'react'
import BannerLIve from '../components/BannerLIve'
import TabsLive from '../components/TabsLive'
import Head from '../components/utils/Head'
import { useTranslation } from 'react-i18next'

const Live = () => {
    const { t } = useTranslation();

    return (
        <Head title={t('Live')}>
            <BannerLIve />
            <TabsLive />
        </Head>
    )
}

export default Live
