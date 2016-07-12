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
                let objectKeys = Object.keys(data).filter((c: any) => { if (c * 1) return c; })
                objectKeys.forEach(x => {
                    model.torrents.push(data[x]);
                });
                model.total = data.total_found;
                return model;
            })
            .catch(this.handleError);
    }
    private handleError(error: any) {
        alert('check your internet');
        console.log(error.message || error);
        return Promise.reject(error.message || error);
    }
}