export function checkLocalStorageData(
  localStData: string,
  localStDate: string
): any {
  let existDataInLocalStorage = JSON.parse(localStorage.getItem(localStData)!);
  let existDATEInLocalStorage = JSON.parse(localStorage.getItem(localStDate)!);

  if (
    !existDataInLocalStorage ||
    !existDATEInLocalStorage ||
    getDateDiff(existDATEInLocalStorage) >= 24
  ) {
    return null;
  }

  return existDataInLocalStorage;
}

function getDateDiff(followedAt: any): number {
  const startdAt: any = new Date(followedAt);
  const currentDate: any = new Date();
  const diffTime = Math.abs(currentDate - startdAt);
  const diffTotalHours = Math.floor(diffTime / (1000 * 60 * 60));
  // const diffMins = Math.round(((diffTime % 86400000) % 3600000) / 60000);
  const diffHoursWithoutDays = diffTotalHours % 24;
  // console.log(startdAt, currentDate, diffHoursWithoutDays);

  return diffHoursWithoutDays;
}
