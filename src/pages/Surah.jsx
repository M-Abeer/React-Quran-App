import React from 'react'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import Audio from '../components/Audio'
import useGetMoshaf from '../hooks/useGetMoshaf'
import { useSelector } from 'react-redux'
import Head from '../components/utils/Head'
import { useTranslation } from 'react-i18next'

const Surah = () => {
    const { t } = useTranslation();
    const { language } = useSelector(state => state.lang);
    const [
        selectedOption,
        selectedSurah,
        nameData,
        handleSelectChange,
        handleClearData,
        surahData,
        server,
        onClickSurah
    ] = useGetMoshaf(language);

    return (
        <Head title={t('Surah')}>
            <Banner />
            <SearchForm
                selectedOption={selectedOption}
                nameData={nameData}
                handleSelectChange={handleSelectChange}
                handleClearData={handleClearData}
                surahData={surahData}
                server={server}
                onClickSurah={onClickSurah}
            />
            {
                selectedSurah ?
                    <Audio selectedSurah={selectedSurah} />
                : null
            }
        </Head>
    )
}

export default Surah
