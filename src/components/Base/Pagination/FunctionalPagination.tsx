// PaginationComponent.tsx
import React from "react";
import clsx from "clsx";

import Pagination from "@/components/Base/Pagination";
import {
  FormInput,
  FormSelect,
  FormLabel,
  FormTextarea,
  FormCheck,
} from "@/components/Base/Form";

import Lucide from "@/components/Base/Lucide";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onItemsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onPageChange: (page: number) => void;
}

const FunctionalPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onItemsPerPageChange,
  onPageChange,
}) => {
  const renderPaginationItems = () => {
    const paginationItems = [];

    if (totalPages <= 7) {
      for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
          <Pagination.Link
            key={number}
            active={currentPage === number}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Link>
        );
      }
    } else {
      paginationItems.push(
        <Pagination.Link
          key={1}
          active={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          1
        </Pagination.Link>
      );

      if (currentPage > 4) {
        paginationItems.push(
          <Pagination.Link key="left-ellipsis">...</Pagination.Link>
        );
      }

      for (
        let number = Math.max(currentPage - 2, 2);
        number <= Math.min(currentPage + 2, totalPages - 1);
        number++
      ) {
        paginationItems.push(
          <Pagination.Link
            key={number}
            active={currentPage === number}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Link>
        );
      }

      if (currentPage < totalPages - 3) {
        paginationItems.push(
          <Pagination.Link key="right-ellipsis">...</Pagination.Link>
        );
      }

      paginationItems.push(
        <Pagination.Link
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Link>
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
      <Pagination className="w-full sm:w-auto sm:mr-auto">
        <Pagination.Link
          onClick={() => onPageChange(1)}
          className={clsx({
            "opacity-50 cursor-not-allowed": currentPage === 1,
          })}
        >
          <Lucide icon="ChevronsLeft" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link
          onClick={() => onPageChange(currentPage - 1)}
          className={clsx({
            "opacity-50 cursor-not-allowed": currentPage === 1,
          })}
        >
          <Lucide icon="ChevronLeft" className="w-4 h-4" />
        </Pagination.Link>
        {renderPaginationItems()}
        <Pagination.Link
          onClick={() => onPageChange(currentPage + 1)}
          className={clsx({
            "opacity-50 cursor-not-allowed": currentPage === totalPages,
          })}
        >
          <Lucide icon="ChevronRight" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link
          onClick={() => onPageChange(totalPages)}
          className={clsx({
            "opacity-50 cursor-not-allowed": currentPage === totalPages,
          })}
        >
          <Lucide icon="ChevronsRight" className="w-4 h-4" />
        </Pagination.Link>
      </Pagination>
      <FormSelect
        className="w-20 mt-3 !box sm:mt-0"
        value={itemsPerPage}
        onChange={onItemsPerPageChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </FormSelect>
    </div>
  );
};

export default FunctionalPagination;
