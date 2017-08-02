const mongoose = require('mongoose')
const db = require('./db')
const User = require('./model/user')

const neo = new User({
	username: 'heshihao',
	salt: 'test',
	password_hash: 'test_hash'
})

async function saveUser(user) {
	try {
		const saved = await user.save()
		console.log(saved)
	} catch (err) {
		console.log(err.message)
	}
}

async function findUser() {
	const result = await User.find()
	console.log(result)
}

saveUser(neo)
findUser()
