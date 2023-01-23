export type label = {
    label: string;
}

export type ID = {
    'im:id': string;
}

export type podcastID = {
    label: string;
    attributes: ID
}

export interface IPodcast {
    'im:name': label,
    'im:image': label[],
    'im:artist': label,
    'id': podcastID,
    'title': label;
};

export interface ITopPoscast {
    "feed": {
        "author": {
            "name": label,
        },
        "entry": IPodcast[],
    }
};
