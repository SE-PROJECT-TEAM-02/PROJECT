const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = '62c01f57f312d1e376e6d254cc5c2684cff048885c3ebf5500f4425eb64d44bcfef8b602df71b58a30e5f80bbb8e8244c72dfc086107cc12342b8e0ef55d6bb67fbb51916bd1025bfd6beb5bdc31e98ff6916b1b8d0b9445d22e7f5fbd09d4e58a0891ae0ff274ea5371db7cfa85d5d8833f5b444da9a60440c449bbee490caafd25419152c4b47d055693298dc27970b1536eb40ab27d0a997611b60ac38ab7f572e998be8f7e9accd6e3d5d3d632ba2acc3fe796ebe3aaed6b0cc64ac37953d3ef3cb94566be5dff2810f8d7322fd0f0561f2b24761267991f29bc43d4c4d9a714a99babefe72f9ad3550003329df31cf42a74075d1a5af71ed877c7f8cd14';
const expiration = '365d';

 module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
       // console.log(secret);
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        // if no token, return request object as is
        if (!token) {
            return req;
        }

        try {
            // decode & attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return updated request object
        return req;
    }
 };