'use strict'

const Book = use('App/Models/Book')

class UserController {
    async index ({auth, request}) {
        const user = auth.getUser()
        user.getRelated('tokens')
        
        return Book.all()
    }

    async update({params, request, auth, response}) {
        const book = await Book.findOrFail(params.id)
        const data = request.only(['title', 'author'])

        book.merge(data)
        return await book.save()
    }

}

module.exports = UserController
