export function handleGetEpisodeBigStrg(bigStrg: any) {
  if (
    bigStrg.contents.includes('{".v1.catalog.us.podcasts.') &&
    bigStrg.contents.includes('".v1.catalog.us.charts.types')
  ) {
    const firstItem =
      bigStrg.contents.search('{".v1.catalog.us.podcasts.') + 1;
    const secondItem =
      bigStrg.contents.search('".v1.catalog.us.charts.types') - 1;
    const result = bigStrg.contents.slice(firstItem, secondItem);

    const thirdItem = result.search('5bepisodes.5d.6":');

    const checkString = result.includes('.v1.catalog.us.artists')
      ? result.search('".v1.catalog.us.artists') - 1
      : result.length;

    const finalResult = result.slice(thirdItem + 17, checkString);

    const parsedResult = JSON.parse(JSON.parse(finalResult)).d[0].relationships
      .episodes;

    return parsedResult;
  }
  return;
}
