import React from 'react'
import { Typography } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

const SearchForm = ({selectedOption, nameData, handleSelectChange, handleClearData, surahData, server, onClickSurah}) => {
    const { t } = useTranslation();

    return (
        <div className='relative z-[5] sm-max:px-[20px]'>
            <div className='container mx-auto p-[30px] bg-[#fff] shadow-lg rounded-[30px]'>
                <form
                    className={`
                    grid grid-cols-1
                    ${selectedOption > 0 ? 'md:grid-cols-2 gap-6' : ""}
                    `}
                >
                    <div className='w-full'>
                        <Typography variant="h6" color="blue-gray">{t('Reciter')}</Typography>
                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className="block
                            appearance-none
                            w-full
                             bg-white
                            border
                            border-gray-400
                            hover:border-gray-500
                            px-4 py-2
                            pr-8
                            rounded-[10px]
                            shadow
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline"
                        >
                            <option value="0">{t('SelectOption')}</option>
                            {
                                nameData.map(option => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    {
                        selectedOption > 0 ?
                            <div className='w-full'>
                                <Typography variant="h6" color="blue-gray">{t('Suwar')}</Typography>
                                <select
                                    className="block
                                    appearance-none
                                    w-full
                                    bg-white
                                    border
                                    border-gray-400
                                    hover:border-gray-500
                                    px-4
                                    py-2
                                    pr-8
                                    rounded-[10px]
                                    shadow
                                    leading-tight
                                    focus:outline-none
                                    focus:shadow-outline"
                                    onChange={(e) => onClickSurah(e.target.value)}
                                >
                                    <option value="0">{t('SelectOption')}</option>
                                    {
                                        surahData.map(option => (
                                            <option key={option.id} value={`${server}${String(option.id).padStart(3, '0')}.mp3`}>
                                                {option.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        : null
                    }
                </form>
                {
                    selectedOption ?
                        <div
                            className='w-full 
                            bg-[#335c67] 
                            rounded-[10px] 
                            text-[#fff] 
                            text-center 
                            py-2 
                            mt-3 
                            font-semibold
                            cursor-pointer'
                            onClick={handleClearData}
                        >
                            Clear reciter
                        </div>
                    : null
                }
            </div>
        </div>
    )
}

export default SearchForm
