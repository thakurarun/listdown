
/**
 * Torrent
 */
export class Torrent {
    public category: string;
    public title: string;
    public seeds: number;
    public leechs: number;
    public torrent_size: number;
    public torrent_hash: string;
}

export class TorrentModel {
    public torrent: Torrent;
    public torrents: Array<Torrent>;
    public total: number;
}