const company = 'Apple'
const produtName = 'IPhone'
const result = company + produtName
console.log(result)



let aboutApple = "Apple Inc. is an American multinational technology company headquartered in Cupertino, California"
console.log(aboutApple.indexOf('can'))
console.log(aboutApple.includes('can'))

console.log(aboutApple[aboutApple.length -1])

aboutApple = company + ' ' + produtName
aboutApple+= ' Create by Steve Jobs' 
console.log(aboutApple)

aboutApple = `

<ul>
    <li>company name : ${company}</li>
    <li>produtName name : ${produtName}</li>
    </ul>
`
console.log(aboutApple)



