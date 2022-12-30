const fetch = require('node-fetch')
async function Random() {
    let c;
	let results = [
			'https://raw.githubusercontent.com/fawwaz37/random/main/fakta.txt'	
	]
    let a = results[Math.floor(Math.random() * results.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\n")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const rfakta = () => new Promise((resolve, reject) => {
    Random().then(results => {
		resolve({
			results
		})
	}).catch(err => { reject(err) })
})

module.exports = rfakta
