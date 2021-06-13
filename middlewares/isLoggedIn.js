const User = require('../models/user')
const config = require('../config')


module.exports = (req, res, next) => {

    if (!req.user || (req.user && !req.user._id)) {
        return res.status(401).json({
            message: 'invalid user.'
        })
    }

    User
        .findOne({ _id: req.user._id })
        .lean()
        .exec((err, user) => {
            if (err) {
                return res.status(500).json({ message: 'Server error.' })
            }

            if (!user) { // if not found user for this id
                return res.status(401).json({ message: 'invalid user.' })
            }
            req.user = user
            next()
        })


}
