import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Utility} from "./../util/Utility";
import {Torrent} from "./../shared/torrent";
@Injectable()
export class TorrentService {

    constructor(private _http: Http) { }

    findTorrents(searchText: string): Promise<Torrent[]> {
        let query = searchText.split(" ").map(m => m.trim()).join("+")
            , outputType = "json"
            , rowcount = "50";
        let url = Utility.StringFormat("https://torrentproject.se/?s={0}&out={1}&orderby=latest&filter=9000&num={2}", query, outputType, rowcount);
        return this._http.get(url)
            .toPromise()
            .then(response => {
                let torrents: Torrent[] = [];
                let data = response.json();
                alert('total ' + data.total_found);
                let objectKeys = Object.keys(data).filter((c: any) => { if (c * 1) return c; })
                objectKeys.forEach(x => {
                    torrents.push(data[x]);
                });
                return torrents;
            })
            .catch(this.handleError);
    }
    private handleError(error: any) {
        alert('check your internet');
        console.log(error.message || error);
        return Promise.reject(error.message || error);
    }
}