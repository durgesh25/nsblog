import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center items-center gap-4 mt-20">
      {prevPage ? (
        <Link 
          href={`${baseUrl}?page=${prevPage}`}
          className="px-8 py-3 bg-white border border-[#4ea88a33] rounded-md text-sm font-bold text-[#3d3d3d] hover:bg-[#4ea88a0a] transition-all"
        >
          ← Previous
        </Link>
      ) : (
        <span className="px-8 py-3 bg-gray-100 border border-gray-200 rounded-md text-sm font-bold text-gray-400 cursor-not-allowed">
          ← Previous
        </span>
      )}

      <div className="text-sm font-bold text-[#09231a]">
        Page {currentPage} of {totalPages}
      </div>

      {nextPage ? (
        <Link 
          href={`${baseUrl}?page=${nextPage}`}
          className="button-primary px-10 py-3 rounded-md text-sm"
        >
          Next →
        </Link>
      ) : (
        <span className="px-10 py-3 bg-gray-100 border border-gray-200 rounded-md text-sm font-bold text-gray-400 cursor-not-allowed">
          Next →
        </span>
      )}
    </div>
  );
}
