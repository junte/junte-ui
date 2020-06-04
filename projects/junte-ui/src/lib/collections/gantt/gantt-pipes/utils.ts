const MONTHS_IN_YEAR = 12;

export function getFullMonth(year: number, month: number) {
  return MONTHS_IN_YEAR * year + month;
}
