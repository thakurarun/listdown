export class Filter {
    public get all(): number { return 9000; }
    public get audio(): number { return 1000; }
    public get lossless(): number { return 1101; }
    public get mp3(): number { return 1102; }
    public get video(): number { return 2000; }
    public get tv(): number { return 2101; }
    public get dvdrip(): number { return 2102; }
    public get hdrip(): number { return 2103; }
    public get dvd(): number { return 2104; }
    public get lq(): number { return 2105; }
    public get ebooks(): number { return 3000; }
    public get comics(): number { return 3101; }
    public get magazines(): number { return 3102; }
    public get tutorials(): number { return 3103; }
    public get audiobook(): number { return 3104; }
    public get images(): number { return 4000; }
    public get mobile(): number { return 5000; }
    public get games(): number { return 6000; }
    public get pc(): number { return 6101; }
    public get nintendo(): number { return 6102; }
    public get playstation(): number { return 6103; }
    public get xbox(): number { return 6104; }
    public get applications(): number { return 7000; }
    public get adult(): number { return 8000; }
}

export class FilterCategory {
    private filter: String;
    private checked: Boolean;
    constructor(filter: string, checked: boolean) {
        this.filter = filter; this.checked = checked;
    }
}