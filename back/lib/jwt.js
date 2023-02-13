const crypto = require('crypto')

class JWT {
    constructor({ crypto }) {
        this.crypto = crypto
    }

    sign(data, options = {}) {
        const header = this.encode({ tpy: 'JWT', alg: 'HS256' })
        const payload = this.encode({ ...data, ...options })
        const signature = this.createSignature([header, payload])

        return [header, payload, signature].join('.')
    }

    verify(token, salt) {
        const [header, payload, signature] = token.split('.')
        const newSignature = this.createSignature([header, payload], salt)
        if (newSignature !== signature) {
            throw new Error('토큰 이상')
        }

        return this.decode(payload)
    }

    encode(obj) {
        return Buffer.from(JSON.stringify(obj))
    }

    decode(base64) {
        return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'))
    }

    createSignature(base64urls, salt = process.env.SALT) {
        // header.payload .join
        const data = base64urls.join('.')
        return this.crypto
            .createHmac('sha256', salt)
            .update(data)
            .digest('base64')
            .replace(/[=]/g, '')
    }
}

module.exports = JWT
