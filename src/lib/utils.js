import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

//cn = className
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
} 