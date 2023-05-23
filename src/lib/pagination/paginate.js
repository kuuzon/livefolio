import lodash from 'lodash';

/* FUNCTION: Takes full data array and splits into smaller array based on page position, taking these parameters:
  - an array of items (users)
  - current page number (currentPage)
  - page size - number of items per page (pageSize)
*/
export default function paginate(items, pageNumber, pageSize){
    /* 1. Determine what POSITION in the ARRAY we are starting at:
      - if we are on page One = 1 -1 * 8 = Start at Position 0
      - if we are on page Two = 2 -1 * 12 = Start at Position 12
    */
    const startIndex = (pageNumber -1) * pageSize;

    /* 2. Lodash(items): converts array into lodash object, to chain everything on one line:
      - slice(startIndex) = starting point for items
      - take(pageSize) = end point for items
      - converts the lodah object back to an array
      = now we have array of object for a particular page
    */
    return lodash(items).slice(startIndex).take(pageSize).value();
}