import styles from './AbpPagination.module.scss'
import useTheme from "@/hooks/useTheme";
import Pagination from 'react-bootstrap/Pagination';
import { compactPages } from '@/lib/pagination/pages';

const AbpPagination = ({ itemsCount, currentPage, pageSize, onPageChange }) => {
  const { theme } = useTheme();
  
  // VALUE: Determine number of pages from items & items per page
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // VALUE: Generate array of all page numbers needed
  const pages = compactPages(currentPage, pagesCount);

  // CONDITIONAL LOAD: Items < items per page
  if(pagesCount === 1){
    return null;
  }

  // SUCCESS LOAD: Multiple pages
  return (
    <>
      <nav className="mb-4" aria-label="user pagination">
        <Pagination className="justify-content-center">
          <Pagination.First onClick={() => onPageChange(1)} className={(`${styles[theme]} ${styles.indexedPage}`)} />
          <Pagination.Prev onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)} className={(`${styles[theme]} ${styles.indexedPage}`)} />
          {pages.map((page) => (
            page === "START_ELLIP" || page === "END_ELLIP" 
            ? <Pagination.Ellipsis
              key={page}   
              // onClick={onEllipsisClick}
              className={(`${styles[theme]} ${styles.indexedPage}`)}
            >
              <span className={styles.icon}>&hellip;</span>
            </Pagination.Ellipsis>
            : <Pagination.Item 
              key={page} 
              onClick={() => onPageChange(page)}
              className={(`${styles[theme]} ${page === currentPage ? styles.currentPage : styles.indexedPage}`)}
            >
              <span className={styles.icon}>{page}</span>
            </Pagination.Item>
          ))}
            <Pagination.Next onClick={() => onPageChange(currentPage < pagesCount ? currentPage + 1 : pagesCount)} className={(`${styles[theme]} ${styles.indexedPage}`)} />
            <Pagination.Last onClick={() => onPageChange(pagesCount)} className={(`${styles[theme]} ${styles.indexedPage}`)} />
        </Pagination>
      </nav>
    </>
  )
}

export default AbpPagination