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
            message: 'Enter total number of students',
            required: true
        },
        beginGradeNumber: {
            description: 'begin grade number',
            type: 'integer',
            message: 'enter lower grade number to begin with',
            required: true
        },
        numberOfGrades: {
            description: 'how many grades to include',
            type: 'integer',
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


processIndexFile_PSPA = (contents, delimiter) => {

    let lines = contents.split('\n');

    let portraits = [];
    for (let i = 0; i < lines.length; i++) {

        let line = lines[i].trim();
        if (line.length === 0) {
            continue;
        }

        let fields = line.split(delimiter);
        let p = new Portrait();

        p.volumeName = this.getStringAt(fields, 0);
        p.imageFolder = this.getStringAt(fields, 1);
        p.imageFileName = this.getStringAt(fields, 2);
        p.grade = this.getStringAt(fields, 3);
        p.lastName = this.getStringAt(fields, 4);
        p.firstName = this.getStringAt(fields, 5);
        p.homeRoom = this.getStringAt(fields, 6);
        p.period = this.getStringAt(fields, 7);
        p.teacherName = this.getStringAt(fields, 8);
        p.track = this.getStringAt(fields, 9);
        p.department = this.getStringAt(fields, 10);

        this.addPortrait(portraits, p);
    }

    return portraits;
};

function Portrait() {
    //Properties from PSPA spec
    this.volumeName = '';
    this.imageFolder = '';
    this.imageFileName = '';
    this.grade = '';
    this.lastName = '';
    this.firstName = '';
    this.homeRoom = '';
    this.period = '';
    this.teacherName = '';
    this.track = '';
    this.department = '';

    //Picaboo portrait id
    this.id = '';

    //Image stuff
    this.imageID = '';
    this.imageHash = '';
    this.blob = null;
}