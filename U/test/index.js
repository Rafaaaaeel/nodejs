const fs = require('fs')

const assets = ['css', 'js', 'lib', 'fonts'];


function make(dir){
	dir.forEach((item)=>{
		fs.mkdir(`project/assets/${item}`, { recursive : true }, (err)=>{
			if(err) throw err;

			console.log('Created', item)
		})
	})
}

make(assets)