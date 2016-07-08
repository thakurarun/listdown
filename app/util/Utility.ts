export class Utility {
    public static StringFormat(text: string, ...args) {
		var e = text.toString();
		if (!args.length) return e;
		var t = typeof args[0],
			n = "string" == t || "number" == t ? Array.prototype.slice.call(args) : args[0];
		for (var i in n) e = e.replace(new RegExp("\\{" + i + "\\}", "gi"), n[i]);
		return e
	}
}
