// whatsApp link generator 

const csvData = fs.readdirSync("./input/contacts.csv", 'utf-8');
console.log(csvData);

// output = [array of object {"name", tel: 'number}]