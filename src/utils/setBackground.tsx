export const setBackgroundFunc = (icon: string | undefined) => {
    switch(icon){
        case 'clear-day':
            return 'bg-gradient-to-t from-sky-400 to-yellow-500'
        case 'clear-night':
            return 'bg-gradient-to-b from-black to-blue-900'
        case 'cloudy':
        case 'partly-cloudy-day':
        case 'fog':
        case 'rain':
        case 'snow':
        case 'wind':
            return 'bg-gradient-to-t from-stone-300 to-stone-500'
        case 'partly-cloudy-night':
            return 'bg-gradient-to-t from-stone-900 to-stone-500'
    }

}