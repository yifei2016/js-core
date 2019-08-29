let b = {yifei: 0, sdf: 1}

Object.keys(b).reduce((prev, cur) => {
	 prev[cur]=b[cur]+1;
	 return prev;
}, {})


['yifei', 'chuan']
{}
{yifei: 1991}
{sdf: 1888}


for(var key in b){
  b[key] = b[key] + 1
}

let keys = Object.keys(b)
for(let index=0;index<keys.length;index++){
	b[keys[index]]++;
}
