export type label = {
  label: string;
};

export type ID = {
  'im:id': string;
};

export type podcastID = {
  label: string;
  attributes: ID;
};

export interface IPodcast {
  'im:name': label;
  'im:image': label[];
  'im:artist': label;
  id: podcastID;
  title: label;
  summary: label;
}

export interface ITopPoscast {
  feed: {
    author: {
      name: label;
    };
    entry: IPodcast[];
  };
}

export interface IPodcastDetailResponse {
  contents: {
    resultCount: number;
    results: IPodcastDetail[];
  };
  status: {
    url: string;
    http_code: number;
  };
}

export interface IPodcastDetail {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export interface OfferEpi {
  kind: string;
  type: string;
}

export interface IDescriptionEpi {
  standard: string;
  short: string;
}

export interface ArtworkEpi {
  width: number;
  height: number;
  url: string;
  bgColor: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
}

export interface IAttributesEpi {
  offers: OfferEpi[];
  copyright: string;
  contentAdvisory: string;
  genreNames: string[];
  topics: any[];
  kind: string;
  itunesTitle: string;
  mediaKind: string;
  description: IDescriptionEpi;
  artwork: ArtworkEpi;
  url: string;
  releaseDateTime: Date;
  websiteUrl: string;
  durationInMilliseconds: number;
  name: string;
  guid: string;
  artistName: string;
  contentRating: string;
  subscribable: boolean;
  assetUrl: string;
}

export interface IGetEpiData {
  id: string;
  type: string;
  href: string;
  attributes: IAttributesEpi;
}

export interface IGetEpisodesRes {
  href: string;
  data: IGetEpiData[];
}
