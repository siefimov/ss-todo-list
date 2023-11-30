import { FC } from 'react';
import classnames from 'classnames';
import { usePagination, DOTS, IUsePagintion } from '../hooks/pagination/usePagination';
import './pagination.scss';

interface IPaginationComponent extends IUsePagintion {
    onPageChange: (page: number | string) => void;
    className: string;
}

type PaginationRangeItem = number | string;
type PaginationRange = PaginationRangeItem[];

const Pagination: FC<IPaginationComponent> = (props) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange: PaginationRange =
        usePagination({
            currentPage,
            totalCount,
            siblingCount,
            pageSize,
        }) || [];

    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={classnames('pagination-container', { [className]: className })}>
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <div className='arrow left' />
            </li>
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return (
                        <li key={crypto.randomUUID()} className='pagination-item dots'>
                            &#8230;
                        </li>
                    );
                }

                return (
                    <li
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <div className='arrow right' />
            </li>
        </ul>
    );
};

export default Pagination;
