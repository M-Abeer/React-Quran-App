import React from 'react'
import { useTranslation } from 'react-i18next';

const Head = (props) => {
    const { t } = useTranslation();
    
    document.title = `${t('Quran Islam')} - ` + props.title

    return (
        <div>{props.children}</div>
    )
}

export default Head
