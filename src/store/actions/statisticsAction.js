import statatisticsService from '../../services/statisticsService';


export const ageStatistic = (params)=>{

    return {
        type: 'AGE_STATISTIC',
        payload: statatisticsService.age(params)
    }
}

