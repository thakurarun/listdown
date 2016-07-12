export enum Filter {
    all = 9000,
    audio = 1000,
    lossless = 1101,
    mp3 = 1102,
    video = 2000,
    tv = 2101,
    dvdrip = 2102,
    hdrip = 2103,
    dvd = 2104,
    lq = 2105,
    ebooks = 3000,
    comics = 3101,
    magazines = 3102,
    tutorials = 3103,
    audiobook = 3104,
    images = 4000,
    mobile = 5000,
    games = 6000,
    pc = 6101,
    nintendo = 6102,
    playstation = 6103,
    xbox = 6104,
    applications = 7000,
    adult = 8000
}

export class FilterCategory {
    filter: string;
    checked: Boolean;
    constructor(filter: string, checked: boolean) {
        this.filter = filter; this.checked = checked;
    }
}