import { handleGetEpisodeBigStrg } from '../bigStrgRes';
import { DATA_TEST_GETEPISODES } from '../data_mocks';
import { BIG_STRING_EXAMPLE } from './bigStringExample';

describe('Big String Res', () => {
  it('should return null when the string does not include {".v1.catalog.us.podcasts.', () => {
    const mockObj = {
      contents: 'asdad asdasd {".v1.catalog.us.po',
    };

    const returnValue = handleGetEpisodeBigStrg(mockObj);
    expect(returnValue).toBeFalsy();
  });

  it('should return null when the string does not include ".v1.catalog.us.charts.types', () => {
    const mockObj = {
      contents: 'kklaklsdkakls ".v1.catalog.us.charts.typ',
    };

    const returnValue = handleGetEpisodeBigStrg(mockObj);
    expect(returnValue).toBeFalsy();
  });
  
  it('should return a parse Json when includes {".v1.catalog.us.podcasts. or ".v1.catalog.us.charts.types', () => {
    const mockObj = {
      contents: BIG_STRING_EXAMPLE,
    };

    const returnValue = handleGetEpisodeBigStrg(mockObj);
    expect(returnValue).toStrictEqual(DATA_TEST_GETEPISODES);
  });
});
