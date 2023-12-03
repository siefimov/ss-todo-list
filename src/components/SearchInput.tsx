import { FC } from 'react';

interface ISearchInputProps {
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const SearchInput: FC<ISearchInputProps> = ({ value, onChange }) => (
    // <div>
        <div className='relative flex w-full flex-wrap items-stretch'>
            <input
                type='search'
                className='relative m-0 block flex-auto rounded border border-slate-300 border-solid bg-white bg-clip-padding pl-8 h-[40px] text-base font-normal leading-[1.6] text-slate-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-slate-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-slate-600 dark:text-slate-200 dark:placeholder:text-slate-200 dark:focus:border-primary'
                aria-label='Search'
                aria-describedby='button-addon2'
                value={value}
                onChange={onChange}
            />

            {/* <!--Search icon--> */}
            <span
                className=' absolute top-[4px] input-group-text flex items-center whitespace-nowrap rounded px-2 py-1.5 text-center text-base font-normal text-slate-700 dark:text-slate-200 z-10'
                id='basic-addon2'
            >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='#cbccd1' className='h-5 w-5'>
                    <path
                        fillRule='evenodd'
                        d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                        clipRule='evenodd'
                    />
                </svg>
            </span>
        </div>
    // </div>
);
