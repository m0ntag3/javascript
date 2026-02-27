let distance =  7000

if (distance <= 100){
    console.log("Amount to pay is 5 USD")
}
else if (distance > 100 && distance <= 500){
    console.log("Amount to Pay is 10 USD")
}
else if (distance > 500 && distance <= 1000){
    console.log("Amount to Pay is 20 USD")
}
else {
    console.log("Amount to Pay is 40 USD")
}

// DOUBLE EQUAL SIGN
// Checks value only- performs type conversion
41 == "41"   // true  (JS converts the string to a number for you)
36 == true   // true  (1 is "truthy")
null == undefined  // true

// TRIPLE EQUAL SIGN
    // Checks value and data type- no conversion
    // If items in comparison are different data types, (===)immediately returns false.
41 === "41"  // false (One is a Number, one is a String)
36 === true  // false (1 is a Number, true is a Boolean)
null === undefined // false (They are different types)
    // For Objects, Arrays, and Functions, === does not check the contents—it checks the reference (the location in memory)therefore:
const a = [1, 2];
const b = [1, 2];

console.log(a === b); // false
    // Displays false since const a and b are found on different locations on memory.
    //  To compare the contents of const a and b, one requires to loop throgh them or use:
JSON.stringify(a) === JSON.stringify(b)

    // Uses
        // Predictability: You don't have to memorize complex coercion rules. Coercion rules-the "weird" logic JS uses to decide if a string equals a number.
        // Bug Prevention: It catches errors where you might expect a number but receive a string from an API or an input field.
        // Performance: Because the engine doesn't have to spend time converting types to see if they match, it is technically a tiny bit faster (though negligible in most apps).


// DIFFERENCE BETWEEN DICTIONARY IN PYTHON,OBJECT IN JAVASCRIPT AND JSON DATA WHEN DEALING WITH APIs

    // PYTHON DICTIONARY(Dict)-{Live Memory}
        // Syntax: Uses curly braces {} and key: value pairs.
        // Flexibility: Keys can be strings, integers, or even tuples.
        // Functionality: It can hold Python-specific objects (like a function or a class instance).
        // API Context: When you receive data from an API in Python, its usually loaded into a dictionary so it can be manipulated.

    //  JAVASCRIPT OBJECT
        // Syntax: keys don't always need quotes.
        // Functionality: JS Objects are much more powerful than simple data storage; they can contain methods-functions.
        // API Context:  When using React or Vue, the API response is converted into Javascript Object so as to be displayed on the screen.

    // JSON (JavaScript Object Notation)- Strict text in string format without logic.
        // Syntax: (Strict)-Keys must be double-quoted strings. 
                        // -No trailing commas allowed.
        // Universal: It is (language-agnostic)=tools, concepts, or philosophies that function independently of any specific programming language.). 
                    // "universal translator" approach to tech focuses on the what and the how rather than the syntax used to write it.
                    // Python, Java, C++, and JS all understand how to read a JSON string.
        // API Context: Transportation layer-Used by API sends data over the internet where it sends long strings of text formatted as JSON.



// TRANSMISSION OF ARRAY/OBJECT FROM JAVASCRIPT TO DICTIONARIES IN PYTHON 

    // Using Flask/FastAPI Framework
// @app.post("/api/endpoint")
// def handle_data(request):
//     # This automatically parses the JSON into a Python dict
//     data = request.json 
//     return {"status": "success"}

    // Using JSON
        // 1.Object / Array is stringified into JSON string on Javascript end.
        // 2.The JSON string is then transported over HTTP as plain text string.
        // 3.The string on arrival at the python end it is loaded into a dictionary or list.

        // Sending end (JS)
    // 1. A JS Object (with an array inside)
const userData = {
    username: "admin",
    tags: ["python", "javascript", "api"],
    active: true
};

// 2. Conversion to a JSON string (Serialization)
const jsonString = JSON.stringify(userData);

// 3. Send via fetch/axios
fetch('/api/endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonString
});

        // Arrival end (Python)
// import json

// # Incoming data from the request (simulated string)
// received_json = '{"username": "admin", "tags": ["python", "javascript", "api"], "active": true}'

// # Convert string to Python Dictionary (Parsing)
// data = json.loads(received_json)

// print(data["username"])  # Output: admin
// print(type(data))        # Output: <class 'dict'>