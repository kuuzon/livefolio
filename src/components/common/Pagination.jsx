import styles from './Pagination.module.scss'
import lodash from 'lodash';
import useTheme from "@/hooks/useTheme";

const Pagination = ({ itemsCount, currentPage, pageSize, onPageChange }) => {
  const { theme } = useTheme();
  
  // VALUE: Determine number of pages from items & items per page
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // VALUE: Generate array of all page numbers needed
  // LODASH: https://lodash.com/docs/4.17.15#range
  const pages = lodash.range(1, pagesCount + 1);
  console.log(pages);

  // CONDITIONAL LOAD: Items < items per page
  if(pagesCount === 1) return null;

  // SUCCESS LOAD: Multiple pages
  return (
    <>
      <nav className="mb-4" aria-label="user pagination">
        <ul className="pagination justify-content-center">
          {pages.map(page => (
            <li 
              key={page} 
              className={(`page-item ${styles[theme]} ${page === currentPage ? styles.currentPage : styles.indexedPage}`)}>
              <button 
                onClick={() => onPageChange(page)}
                className={(`page-link`)}
              >
                <span className={styles.icon}>{page}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination