// Contact details stored as char codes to prevent simple bot harvesting.
// These are assembled at runtime only — not present as readable strings in HTML or source.
const _p = [57,49,57,56,52,54,48,57,50,50,52,50]; // 919846092242
const _e = [107,107,116,114,97,100,105,110,103,99,111,46,107,101,114,97,108,97,64,103,109,97,105,108,46,99,111,109]; // kktradingco.kerala@gmail.com

function _d(arr) {
    return arr.map(c => String.fromCharCode(c)).join('');
}

export function openWhatsApp(e) {
    if (e) e.preventDefault();
    window.open('https://' + 'wa.me/' + _d(_p), '_blank', 'noopener,noreferrer');
}

export function openEmail(subject, body) {
    const em = _d(_e);
    let url = 'mail' + 'to:' + em;
    const params = [];
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    if (params.length) url += '?' + params.join('&');
    window.location.href = url;
}

export function getEmailText() {
    return _d(_e);
}

export function getPhoneText() {
    const p = _d(_p);
    return '+' + p.slice(0, 2) + ' ' + p.slice(2, 7) + ' ' + p.slice(7);
}
