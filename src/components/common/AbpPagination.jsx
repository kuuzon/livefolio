import styles from './AbpPagination.module.scss'
import lodash from 'lodash';
import useTheme from "@/hooks/useTheme";
import Pagination from 'react-bootstrap/Pagination';
// BS PAGINATION DOCS: https://react-bootstrap.github.io/components/pagination/

const AbpPagination = ({ itemsCount, currentPage, pageSize, onPageChange }) => {
  const { theme } = useTheme();
  
  // VALUE: Determine number of pages from items & items per page
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // VALUE: Generate array of all page numbers needed
  // LODASH: https://lodash.com/docs/4.17.15#range
  const pages = lodash.range(1, pagesCount + 1);

  // CONDITIONAL LOAD: Items < items per page
  if(pagesCount === 1){
    return null;
  }

  // SUCCESS LOAD: Multiple pages
  return (
    <>
      <nav className="mb-4" aria-label="user pagination">
        <Pagination className="justify-content-center">
          {pages.map(page => (
            <Pagination.Item 
              key={page} 
              onClick={() => onPageChange(page)}
              className={(`${styles[theme]} ${page === currentPage ? styles.currentPage : styles.indexedPage}`)}
            >
              <span className={styles.icon}>{page}</span>
            </Pagination.Item>
          ))}
        </Pagination>
      </nav>
    </>
  )
}

export default AbpPagination