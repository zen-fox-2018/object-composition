class CookieFactory {

    static create(cookies) {
        let arrayCookies = [];
        let dataCookies = cookies
        for (let i = 0; i < dataCookies.length; i++) {
            if (dataCookies[i] === 'peanut butter') arrayCookies.push(new PeanutButter(dataCookies[i]));
            if (dataCookies[i] === 'chocolate chip') {
                arrayCookies.push(new ChocolateChip(dataCookies[i]));
            } else {
                arrayCookies.push(new OtherCookie(dataCookies[i]));
            }
        }
        return arrayCookies
    }
}