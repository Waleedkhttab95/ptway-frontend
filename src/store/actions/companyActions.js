import companyStatistics from '../../services/comanyStatistics';


export const companyBCountry = (params)=>{
    return {
        type: 'COMPANY_COUNTRY_STATISTIC',
        payload: companyStatistics.companyBCountry(params)
    }
}

export const companyBMajor = (params)=>{
    return {
        type: 'COMPANY_MAJOR_STATISTIC',
        payload: companyStatistics.companyBMajor(params)
    }
}