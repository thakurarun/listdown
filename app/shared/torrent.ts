
/**
 * Torrent
 */
export class Torrent {
    /**
     *
     */
    constructor(category: string, title: string, seeds: number, leechs: number, torrent_size: number, torrent_hash: string, sizeString: string) {
        this.category = category;
        this.title = title;
        this.seeds = seeds;
        this.leechs = leechs;
        this.torrent_size = torrent_size;
        this.torrent_hash = torrent_hash;
        this.sizeString = sizeString;
    }
    public category: string;
    public title: string;
    public seeds: number;
    public leechs: number;
    public torrent_size: number;
    public torrent_hash: string;
    public sizeString: string;
    public color: string;
}

export class TorrentModel {
    public torrent: Torrent;
    public torrents: Array<Torrent>;
    public total: number;
}