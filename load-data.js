const mongoose = require('mongoose')
const db = require('./db')
const Restaurant = require('./src/data/restaurant/model/model')
const Food = require('./src/data/food/model/model')

async function load() {
	const neo = new Restaurant({
		id: 'sdafkajsdf',
		name: `restaurant`,
		flavour: `flavour`
	})
	await neo.save()
	console.log('restaurant saved')
	for (let i = 0; i < 5; i++) {
		const food = new Food({
			id: `sdfjaskdjf_${i}`,
			name: `foot_${i}`,
			restaurant: neo
		})
		await food.save()
		neo.menu.push(food)
		console.log(`food_${i} saved`)
	}
	neo.save()
	console.log('restaurant menu updated')
}

load()
	.then(() => {
		db.close()
	})
	.catch(err => {
		console.log(err)
		db.close()
	})
