/**
 * Created by jason on 10/16/17.
 */
var fs = require('fs');
var prompt = require('prompt');
var imgGen = require('js-image-generator');


var schema = {
    properties: {
        numberTotalStudents: {
            description: 'enter number of students',
            type: 'integer',
            pattern: /^[0-9]+$/,
            message: 'Enter total number of students',
            required: true
        },
        beginGradeNumber: {
            description: 'begin grade number',
            type: 'integer',
            pattern: /^[0-9]+$/,
            message: 'enter lower grade number to begin with',
            required: true
        },
        numberOfGrades: {
            description: 'how many grades to include',
            type: 'integer',
            pattern: /^[0-9]+$/,
            message: 'enter number of grades',
            required: true
        },
        includeMissingImages: {
        description: 'include students with missing images?',
        type: 'boolean',
        message: 't/f',
        required: true
        },
        includeTeachers: {
            description: 'include teachers?',
            type: 'boolean',
            message: 't/f',
            required: true
        },
        numberOfTeachersPerGrade: {
            description: 'number of teachers per grade',
            type: 'integer',
            ask: function() {
                // only ask for proxy credentials if a proxy was set
                return prompt.history('includeTeachers').value =true;
            }
        }
    }
};
prompt.start();
prompt.message = '';

//
// Get two properties from the user: username and email
//
prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  numStudents: ' + result.numStudents);
    console.log('  numStudents: ' + result.numStartGrade);
    });


    // Generate one image
    imgGen.generateImage(800, 600, 80, function(err, image) {
        fs.writeFileSync('dummy'+randomIntInc(3,44)+'.jpg', image.data);
    });


function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
