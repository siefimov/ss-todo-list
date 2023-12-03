import { FC } from 'react';

interface ISelectButtonProps {
    value: string;
    onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export const SelectButton: FC<ISelectButtonProps> = ({ value, onChange }) => (
    <select
        value={value}
        onChange={onChange}
        className='border border-slate-300 h-[40px] px-2 rounded text-slate-500 outline-none focus:border focus:border-slate-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] transition duration-200 ease-in-out'
    >
        <option value='all' className='appearance-none '>
            All
        </option>
        <option value='incomplete' className='py-5'>
            Incomplete
        </option>
        <option value='completed'>Completed</option>
    </select>
);
