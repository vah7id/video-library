export type SortOrder = 'newest' | 'oldest';

/**
 * Sorts an array of objects by date field with proper date validation
 * @param items - Array of items to sort
 * @param dateField - Field name containing the date string
 * @param sortOrder - Sort order ('newest' or 'oldest')
 * @returns Sorted array of items
 */
export const sortByDate = <T>(
  items: T[], 
  dateField: keyof T, 
  sortOrder: SortOrder
): T[] => {
  return [...items].sort((a, b) => {
    // Validate dates and provide fallbacks
    const aDate = new Date(a[dateField] as string);
    const bDate = new Date(b[dateField] as string);
    
    // Check if dates are valid, fallback to 0 for invalid dates
    const aTime = isNaN(aDate.getTime()) ? 0 : aDate.getTime();
    const bTime = isNaN(bDate.getTime()) ? 0 : bDate.getTime();
    
    if (sortOrder === 'newest') {
      return bTime - aTime; // Newest first
    } else {
      return aTime - bTime; // Oldest first
    }
  });
}; 