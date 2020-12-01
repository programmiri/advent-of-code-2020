import {sayHelloWorld} from './helloWorld.js'

describe('sayHelloWorld', () => {
	it('says hello world', () => {
		const text = sayHelloWorld()
		expect(text).toEqual("Hello World")
	})
})