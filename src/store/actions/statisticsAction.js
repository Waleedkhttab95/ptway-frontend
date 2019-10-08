import statatisticsService from '../../services/statisticsService';


export const ageStatistic = (params)=>{
    return {
        type: 'AGE_STATISTIC',
        payload: statatisticsService.age(params)
    }
}

export const cityStatistic = (params)=>{
    return {
        type: 'CITY_STATISTIC',
        payload: statatisticsService.city(params)
    }
}
