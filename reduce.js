let b = {yifei: 0, chuan: 1}

Object.keys(b).reduce((prev, cur) => {
	 prev[cur]=b[cur]+1;
	 return prev;
}, {})


['yifei', 'chuan']
{}
{yifei: 1991}
{chuan: 1888}


for key in dic:
  dic[key] = dic[key] + 1


let keys = Object.keys(b)
for(let index=0;index<keys.length;index++){
	b[keys[index]]++;
}