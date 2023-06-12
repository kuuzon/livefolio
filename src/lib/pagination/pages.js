// import lodash from 'lodash';

// OLD VERSION: Provides ALL pages (even if total count exceeds width of page)
// export const pages = lodash.range(1, pagesCount + 1);

// NEW VERSION: To show MORE or LESS pages, we need to alter this array (allow for a ... button)
/* ALGORITHM RULES
  - It must at least have the page "1"
  - If currentPage is greater than 4, it must have "..." after the page "1"
  - The range (r) is the number of pages to be shown on each side of currentPage (r = 2).  lowerRange(r1) is currentPage minus r & upperRange(r2) is currentPage plus r
  - Add the "middle band range" page numbers iterating from the lower of 2 OR lowerRange and limited at the lower of the upperRange OR max pagesCount
  - If the last page (pagesCount) is bigger than upperRange(r2) by 2, it must have “…” on the right side
  - If the last page (pagesCount) is bigger than upperRange(r2), add the last page
*/
export const compactPages = (currentPage, pagesCount) => {
  let pageItems = [1];
  
  // ARRAY STRUCTURE A: Add initial ellipsis
  if (currentPage > 4) pageItems.push('START_ELLIP');

  // ARRAY STRUCTURE B: Lower & upper range pages
  let range = 2;
  let lowerRange = currentPage - range;
  let upperRange = currentPage + range;
  // TRICKIEST PART: Basically, determines what numbers to add between 1 and pagesCount, depending on currentPage
  for (let i = lowerRange > 2 ? lowerRange : 2; i <= Math.min(pagesCount, upperRange); i++) {
    pageItems.push(i);
  }
  // EXAMPLE 1: currentPage = 3 -> ADDS 2, 3, 4, 5 to array then below "..." + max page
  // EXAMPLE 2: currentPage = 10 -> ADDS 8, 9, 10, 11, 12 then below "..." + max page

  // ARRAY STRUCTURE C: Closing final ellipsis & MAX page
  if (upperRange + 1 < pagesCount) pageItems.push('END_ELLIP');
  if (upperRange < pagesCount) pageItems.push(pagesCount);

  return pageItems;
}