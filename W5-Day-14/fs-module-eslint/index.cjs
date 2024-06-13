// whatsApp link generator 
const fs = require("node:fs");

const csvData = fs.readFileSync("./input/contacts.csv", "utf-8");
console.log(csvData);

// output = [array of object {"name", tel: 'number}]

const csvToJson = (csvData) => {
    // Split CSV data into lines based on newline character
    const lines = csvData.split("\n");
    // Initialize an empty array to store the resulting objects
    const result = [];
    // Split the first line (header) into an array of column headers
    const headers = lines[0].split(",");
    // Iterate through each line starting from index 1 (index 0 is header)
    for (let i = 1; i < lines.length; i++) {
        // Initialize an empty object to store data for the current line
        const obj = {};
        // Split the current line into an array of values
        const currentLine = lines[i].split(",");
        // Iterate through each header
        for (let j = 0; j < headers.length; j++) {
            // Assign the value from currentLine to the corresponding header as key in obj
            obj[headers[j]] = currentLine[j];
        };
        // Push the created object (representing a row of data) into the result array
        result.push(obj);
    };
    // Return the final array of objects, where each object represents a row of CSV data
    return result;
};

// csvToJson is a function that converts CSV data (passed as csvData) into an array of objects. Each object represents a row from the CSV file.
// It splits csvData into lines (`lines` array), extracts headers from the first line, and then iterates over each subsequent line to create an object (obj) with keys from headers and values from the corresponding line.
// Each object is then pushed into the result array, which is returned as the final output.

const contacts =csvToJson(csvData);
console.log(contacts);

// contacts is assigned the result of csvToJson(csvData), which converts the CSV data into an array of objects. Each object corresponds to a contact with properties like name and tel.
// console.log(contacts); outputs the contacts array of objects to the console.

// generate whatsapp link - wa.me/number?text=message
const generateWhatsappLink = (tel, message) => {
    const baseUrl = "https://wa.me";
    // const url = `${baseUrl}/${tel}?text=${message}`;
    const url = `${baseUrl}/${tel}?text=${encodeURIComponent(message)}`;
    return url;
};

// generateWhatsappLink is a function that generates a WhatsApp link based on the provided telephone number (tel) and message (message).
// It constructs a URL using baseUrl and encodes the message parameter using encodeURIComponent to ensure special characters are properly encoded for a URL.

// save to output file 
let fileContent = "";

// Initializes an empty string fileContent which will store the contents that will be written to the output file.

// for loop
for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const link = generateWhatsappLink(
        contact.tel,
        `Hello ${contact.name}, how are you?`
    );
    fileContent += `${link}\n`;
};

// Iterates through the contacts array using a for loop. For each contact object (contact):
// Calls generateWhatsappLink to generate a WhatsApp link with the contact's telephone number (contact.tel) and a personalized message (Hello ${contact.name}, how are you?).
// Appends each generated link followed by a newline character (\n) to fileContent.

// write txt file at output with error function
fs.writeFile("./output/whatsapp-links.txt", fileContent, function(error) {
    if (error) {
        console.log("Error writting file");
    } else {
        console.log("File written successfully");
    };
});

// fs.writeFile asynchronously writes the fileContent string to a file named whatsapp-links.txt located in the output directory.
// It also provides a callback function that handles errors (error parameter). If there is an error during file writing, it logs "Error writing file". If successful, it logs "File written successfully".