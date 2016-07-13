import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Utility} from "./../util/Utility";
import {Torrent, TorrentModel} from "./../shared/torrent";
@Injectable()
export class TorrentService {

    constructor(private _http: Http) { }

    findTorrents(searchText: string, filter: number = 9000): Promise<TorrentModel> {
        let query = searchText.split(" ").map(m => m.trim()).join("+")
            , outputType = "json"
            , rowcount = "50";
        let url = Utility.StringFormat("https://torrentproject.se/?s={0}&out={1}&orderby=seeders&filter={2}&num={3}", query, outputType, filter, rowcount);
        return this._http.get(url)
            .toPromise()
            .then(response => {
                let model: TorrentModel = new TorrentModel();
                model.torrents = [];
                let data = response.json();
                Object.keys(data).filter((c: string) => !!+c).forEach(x => {
                    let _torrent: Torrent = new Torrent(data[x].category,
                        data[x].title, data[x].seeds, data[x].leechs, data[x].torrent_size,
                        data[x].torrent_hash, this.formatBytes(data[x].torrent_size));
                    model.torrents.push(_torrent);
                });
                model.total = data.total_found;
                return model;
            })
            .catch(this.handleError);
    }
    private formatBytes(bytes, decimals = 2) {
        if (bytes == 0) return '0 Byte';
        var k = 1000;
        var dm = decimals + 1 || 3;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    private handleError(error: any) {
        alert('check your internet');
        console.log(error.message || error);
        return Promise.reject(error.message || error);
    }
}