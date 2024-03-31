import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReciters, getAllSuwar } from "../store/Actions/recitersAction";

const useGetMoshaf = (language) => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedSurah, setSelectedSurah] = useState('');
    const {reciters, surah} = useSelector(state => state.reciters)

    let nameData = []
    try {
        if(reciters.reciters) {
            nameData = reciters.reciters
        } else {
            nameData =[]
        }
    } catch(err) {}

    useEffect(() => {
        if(reciters) {
            dispatch(getAllReciters({language, reciter: selectedOption}))
        }
    }, [reciters, dispatch, selectedOption]);

    const handleSelectChange = (event) => {
        const selectedId = event.target.value;

        setSelectedOption(selectedId);
        dispatch(getAllReciters({language, reciter: selectedId}));
    };

    let moshafData = []
    try {
        if(nameData[0].moshaf) {
            moshafData = nameData[0].moshaf
        } else {
            moshafData =[]
        }
    } catch(err) {}

    const handleClearData = () => {
        setSelectedOption('');
        setSelectedSurah('');
    };

    let surahData = []
    try {
        if(surah.suwar) {
            surahData = surah.suwar
        } else {
            surahData =[]
        }
    } catch(err) {}
    
    useEffect(() => {
        if(surah) {
            dispatch(getAllSuwar({language}))
        }
    }, [surah, dispatch]);

    let server = moshafData[0]?.server

    const onClickSurah = (click) => {
        setSelectedSurah(click)
    }

    return [
        selectedOption,
        selectedSurah,
        nameData,
        handleSelectChange,
        handleClearData,
        surahData,
        server,
        onClickSurah
    ]
}

export default useGetMoshaf
