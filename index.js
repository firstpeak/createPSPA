/**
 * Created by jason on 10/16/17.
 */
var fs = require('fs');
var prompt = require('prompt');
var util = require('util');
var gm = require('gm');
var logUpdate = require('log-update');
var async = require('async');

const frames = ['-', '\\', '|', '/'];

// default students, grades, teachers counts
var numberTotalStudents = 75;
var numberGrades = 3;
var numberTeachers = 2;
const lastNames = ['Abbott','Acosta','Adams','Adkins','Aguilar','Aguirre','Alexander-Hamilton','Allen','Allison','Alvarado','Alvarez','Anderson','Andrade','Andrews','Anthony','Armstrong','Arnold','Atkins','Atkinson','Austin','Avila','Ayala','Bailey','Baker','Baldwin','Ball','Ballard','Banks','Barber','Barker','Barnes-N-Nobel','Barnett','Barrett','Barron','Barry','Barton','Bass','Bates','Bauer','Baxter','Beard','Beasley','Beck','Becker','Bell','Bennett','Benson','Berg','Berry','Bishop','Black','Blackwell','Blair','Blake','Bond','Boone','Booth','Bowen','Bowers','Bowman','Boyd','Boyer','Bradford','Bradley','Brady','Brennan','Brewer','Bridges','Briggs','Brock','Brooks','Brown','Bruce','Bryan','Bryant','Buchanan','Burgess','Burke','Burnett','Burns','Burton','Bush','Butler','Byrd','Cabrera','Cain','Calderon','Caldwell','Callahan','Camacho','Cameron','Campbell','Campos','Cannon','Cardenas','Carey','Carlson','Carpenter','Carr','Carrillo','Carroll','Carson','Carter','Casey','Castaneda','Castillo','Castro','Cervantes','Chambers','Chan','Chandler','Chang','Chapman','Charles','Chase','Chavez','Chen','Christensen','Christian','Clark','Clarke','Clay','Clayton','Cline','Cobb','Cochran','Cohen','Cole','Coleman','Collier','Collins','Colon','Combs','Conley','Conner','Contreras','Cook','Cooper','Copeland','Cortez','Cox','Craig','Crawford','Cross','Cruz','Cummings','Cunningham','Curry','Curtis','Dalton','Dags-dYa-like-Dags','Daniels','Davenport','Davidson','Davis','Dawson','Day','Dean','Decker','Delacruz','Deleon','Delgado','Dennis','Diaz','Dickerson','Dillon','Dixon','Dominguez','Douglas','Doyle','Drake','Duncan','Dunn','Duran','Dyer','Eaton','Edwards','Elliott','Ellis','English','Erickson','Espinoza','Estrada','Evans','Farmer','Farrell','Ferguson','Fernandez','Fields','Figueroa','Fischer','Fisher','Fitzgerald','Fleming','Fletcher','Flores','Flowers','Floyd','Flynn','Foley','Ford','Foster','Fowler','Fox','Francis','Franco','Frank','Franklin','Frazier','Freeman','French','Fuentes','Fuller','Gallagher','Gallegos','Garcia','Gardner','Garner','Garrett','Garrison','Garza','Gates','George','Gibbs','Gibson','Gilbert','Gill','Gilmore','Glenn','Glover','Golden','Gomez','Gonzales','Gonzalez','Goodman','Goodwin','Gordon','Graham','Grant','Graves','Gray','Green','Greene','Greer','Gregory','Griffin','Griffith','Grimes','Gross','Guerra','Guerrero','Gutierrez','Guzman','Hale','Hall','Hamilton','Hammond','Hampton','Hancock','Hansen','Hanson','Hardy','Harmon','Harper','Harrell','Harrington','Harris','Harrison','Hart','Hartman','Harvey','Hawkins','Hayes','Haynes','Heath','Henderson','Henry','Hensley','Henson','Hernandez','Herrera','Hess','Hicks','Higgins','Hill','Hines','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holland','Holloway','Holmes','Holt','Hood','Hoover','Hopkins','Horn','Horton','Houston','Howard','Howell','Huang','Hubbard','Hudson','Huff','Huffman','Hughes','Humphrey','Hunt','Hunter','Hutchinson','Ibarra','Ingram','Jackson','Jacobs','Jacobson','James','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Juarez','Kane','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Khan','Kim','King','Kirby','Kirk','Klein','Kline','Knight','Koch','Kramer','Lamb','Lambert','Lane','Lang','Lara','Larsen','Larson','Lawrence','Lawson','Le','Lee','Leon','Leonard','Lewis','Li','Lin','Lindsey','Little','Liu','Lloyd','Logan','Long','Lopez','Love','Lowe','Lucas','Luna','Lynch','Lyons','Macdonald','Macias','Mack','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell','May','Mcbride','Mccarthy','Mcclain','Mcclure','Mccormick','Mccoy','Mcdaniel','Mcdonald','Mcdowell','Mcgee','Mcguire','Mckenzie','Mckinney','Mclaughlin','Medina','Mejia','Melton','Mendez','Mendoza','Mercado','Meyer','Meyers','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Montgomery','Montoya','Moody','Moore','Morales','Moran','Moreno','Morgan','Morris','Morrison','Morrow','Morton','Mosley','Moss','Mueller','Mullins','Munoz','Murphy','Murray','Myers','Nash','Navarro','Neal','Nelson','Newman','Newton','Nguyen','Nichols','Nicholson','Norman','Norris','Norton','Nunez','Obrien','Ochoa','Oconnor','Oliver','Olsen','Olson','Oneal','Oneill','Orozco','Ortega','Ortiz','Osborne','Owen','Owens','Pacheco','Padilla','Page','Palmer','Park','Parker','Parks','Parrish','Parsons','Patel','Patrick','Patterson','Patton','Paul','Payne','Pearson','Pena','Perez','Perkins','Perry','Peters','Petersen','Peterson','Pham','Phelps','Phillips','Pierce','Pittman','Pitts','Poole','Pope','Porter','Potter','Powell','Powers','Pratt','Preston','Price','Quinn','Ramirez','Ramos','Ramsey','Randall','Ray','Reed','Reese','Reeves','Reid','Reyes','Reynolds','Rhodes','Rice','Rich','Richard','Richards','Richardson','Riley','Rios','Rivas','Rivera','Robbins','Roberson','Roberts','Robertson','Robinson','Robles','Rodgers','Rodriguez','Rogers','Rojas','Roman','Romero','Rosales','Rose','Ross','Roth','Rowe','Roy','Ruiz','Russell','Russo','Ryan','Salas','Salazar','Salinas','Sanchez','Sanders','Sandoval','Santiago','Santos','Saunders','Savage','Sawyer','Schmidt','Schneider','Schroeder','Schultz','Schwartz','Scott','Serrano','Shaffer','Shannon','Sharp','Shaw','Shelton','Shepherd','Sherman','Shields','Short','Silva','Simmons','Simon','Simpson','Sims','Singh','Singleton','Skinner','Small','Smith','Snow','Snyder','Solis','Soto','Sparks','Spencer','Stafford','Stanley','Steele','Stephens','Stephenson','Stevens','Stevenson','Stewart','Stokes','Stone','Strickland','Suarez','Sullivan','Summers','Sutton','Swanson','Sweeney','Tanner','Tate','Taylor','Terry','Thomas','Thompson','Thornton','Todd','Torres','Townsend','Tran','Trevino','Trujillo','Tucker','Turner','Tyler','Underwood','Valdez','Valencia','Vance','Vargas','Vasquez','Vaughn','Vazquez','Vega','Velasquez','Villarreal','Vincent','Wade','Wagner','Walker','Wall','Wallace','Walsh','Walter','Walters','Walton','Wang','Ward','Ware','Warner','Warren','Washington','Waters','Watkins','Watson','Watts','Weaver','Webb','Weber','Webster','Weiss','Welch','Wells','West','Wheeler','Whitaker','White','Wiggins','Wilcox','Wiley','Wilkerson','Wilkins','Wilkinson','Williams','Williamson','Willis','Wilson','Wise','Wolf','Wolfe','Wong','Wood','Woodard','Woods','Wright','Wu','Wyatt','Yang','Yates','York','Young','Zamora','Zimmerman'];
const firstNames = ['Austin','Abraham','Alejandro','Alfonso','Alice','Alton','Amanda','Amy','Andrea','Andres','Angela','Angelo','Ann','Anna','Anne','Annie','Archie','Arturo','Ashley','Barbara','Bennie','Benny','Betty','Beverly','Blake','Bonnie','Brenda','Bryant','Cameron','Carlton','Carol','Carolyn','Carroll','Catherine','Cedric','Cesar','Cheryl','Christina','Christine','Clark','Clint','Colin','Cynthia','Dallas','Damon','Dana','Deborah','Debra','Delbert','Denise','Devin','Diana','Diane','Dominic','Donna','Donnie','Doris','Dorothy','Doug','Earnest','Ed','Edmund','Elizabeth','Ellis','Ernesto','Evan','Evelyn','Felipe','Forrest','Frances','Fredrick','Garrett','Garry','Geoffrey','Gerard','Gerardo','Gilberto','Gloria','Grant','Gregg','Guadalupe','Guillermo','Gustavo','Heather','Helen','Homer','Horace','Hubert','Ira','Irene','Irving','Ismael','Israel','Jackie','Jacqueline','Jake','Jane','Janet','Janice','Jean','Jean','Jennifer','Jeremiah','Jermaine','Jessica','Joan','Joey','Johnathan','Jonathon','Joyce','Judith','Judy','Julia','Julie','Julius','Karen','Katherine','Kathleen','Kathryn','Kathy','Kelly','Kelvin','Kenny','Kerry','Kim','Kimberly','Kristopher','Laura','Laurence','Leland','Levi','Lillian','Linda','Lionel','Lisa','Lois','Loren','Lorenzo','Lori','Louise','Lowell','Lucas','Luke','Luther','Lyle','Lynn','Mack','Malcolm','Marco','Marcos','Margaret','Maria','Marie','Marilyn','Martha','Marty','Mary','Matt','Melissa','Michelle','Mildred','Myron','Nancy','Neal','Nick','Nicolas','Nicole','Noel','Norma','Oliver','Omar','Orlando','Otis','Owen','Pablo','Pamela','Patricia','Paula','Pete','Phyllis','Preston','Rachel','Randolph','Rebecca','Rex','Rickey','Robin','Roderick','Rodolfo','Roosevelt','Rose','Ruby','Rudolph','Rudy','Rufus','Ruth','Salvatore','Sammy','Sandra','Sara','Sarah','Shannon','Sharon','Shaun','Sherman','Shirley','Simon','Spencer','Stephanie','Stuart','Susan','Sylvester','Tammy','Taylor','Teresa','Theresa','Tina','Trevor','Virginia','Wanda','Wendell','Wilbert','Wilbur','Willis','Wilsons'];

var portraitInFolder = './portraits/';
var imageFolderName = 'images';
var volumeName =  generateVolumeName();


var args = process.argv.slice(2);
if (args.length >0){  parseArgs();};
var volumeDir = './'+volumeName;
var imageDir = volumeDir + '/' + imageFolderName;
  fs.mkdirSync(volumeDir);
  fs.mkdirSync(imageDir);

    _portraits = [];
    _portraits = createIndexFile_PSPA(numberTotalStudents,numberGrades,numberTeachers);

  //  _portraits.forEach(function(item, index) {console.log(item, index);});
  var portraitLine = '';
  portraitToPSPA(_portraits,volumeDir,'\t');

  console.log('Generated PSPA with '+numberTotalStudents+' students in directory: ');
  console.log(''+ fs.realpathSync(volumeDir));

function parseArgs(){
    numberTotalStudents = args[0];
};

function randomIntInc (low, high) {
    //console.log('in: randomIntInc');
    return Math.floor(Math.random() * (high - low + 1) + low);
}


function createIndexFile_PSPA (numTotal,grade,numTeachers) {
    let portraits = [];
    let teachers = [];
    let t = new Teacher();
    let teacherGroupCounts = [];
    let sumTeachers = numTeachers;

    //make up teacher groups
    if (sumTeachers == 0){
      let t = new Teacher();
      //one group with empty string for teacher name
      t.name  = '';
      t.count = numTotal;
      addTeacher(teachers,t);
      //teachers.push[''];
      //teacherGroupCounts.push(numTotal);
    }
    else{
      //create a teacher name and a group count for each teacher
      let remaining = numTotal%sumTeachers;
      //console.log('remaining: ' + remaining);
      for (let tg = 0; tg<sumTeachers;tg++) {
        let t = new Teacher();
        t.name = lastNames[randomIntInc(0, lastNames.length - 1)];
        //teachers.push(lastNames[randomIntInc(0, lastNames.length - 1)]);
        if (remaining-- > 0){
          t.count = Math.ceil(numTotal / sumTeachers);
          //teacherGroupCounts.push(Math.ceil(numTotal / numTeachers));
        }
        else{
          t.count = Math.floor(numTotal / sumTeachers);
          //teacherGroupCounts.push(Math.floor(numTotal / numTeachers));
        }
        addTeacher(teachers,t);
      }
    }

    console.log('generating pspa for:');
    console.log('   volumeName: ' + volumeName);
    console.log('   numtotal: ' + numTotal);
    console.log('   grades: ' + grade);
    console.log('   teachers: ' + sumTeachers);
    teacherGroupCounts.forEach(function(item, index) {
        console.log('count for teacher: ', item,teachers[index]);
    });

    // loop through each teacherGroup
    //for (let t = 0; t<teacherGroupCounts.length;t++) {
    for (let t = 0; t<teachers.length;t++) {
        // loop through each student in group
        //for (let i = 0; i < teacherGroupCounts[t]; i++) {
        for (let i = 0; i < teachers[t].count; i++) {
            //populate portrait
            let p = new Portrait();
            let gd = 1 + (i%grade);
            p.volumeName = volumeName;
            p.imageFolder = imageFolderName;
            p.lastName = lastNames[randomIntInc(0, lastNames.length - 1)];
            p.firstName = firstNames[randomIntInc(0, firstNames.length - 1)];
            let id = p.lastName + p.firstName + '_g' + gd + '_t' + t + '_id' + i;
            p.imageFileName = id + '.jpg';
            p.grade = gd;
            p.homeRoom = teachers[t].name+ '_' + gd;
            p.period = randomIntInc(1,4);
            p.teacherName = teachers[t].name;
            p.track = '';
            p.department = '';

            //add portrait to list
            addPortrait(portraits, p);
            //Generate one image
            makePortraitImage(p.imageFileName,p.volumeName,p.lastName,p.firstName,p.grade,p.teacherName);
            //var frame = frames[i % frames.length];
            //logUpdate('generating '+ frame);
        }
    }
    logUpdate.clear();
    return portraits;
};

function makePortraitImage(iName,volume,last,first,grade,teacher){
  let portraitInList = [];
  //console.log(portraitInFolder);
  fs.readdirSync(portraitInFolder).forEach(file => {
    portraitInList.push(file);
  });
  var rndPort = portraitInFolder + portraitInList[randomIntInc(0,portraitInList.length-1)];
  //console.log('rndPort: ' + rndPort);
  var outFile = imageDir + '/' + iName;
  //console.log('outFile: ' + outFile);

  // TODO: chunk this .write call so we don't run out of system file handles
    // it is currently limited to about 1020 students

  gm(rndPort)
    .resize(400)
    .font('arial')
    .fontSize(12)
    .drawText(8, 20, volume)
    .drawText(8, 30, last)
    .drawText(8, 40, first)
    .drawText(8, 50, grade)
    .drawText(8, 60, teacher)
    .write(outFile, function (err) {
        if (err) console.log(err);
    });
}

function portraitToPSPA(portraits,path,separator){
    var fs = require('fs');
    var stream = fs.createWriteStream(path+"/index.txt");
    stream.once('open', function(fd) {
      var people = Object.keys(portraits);
      people.forEach(function(person) {
        portraitLine = [];
        var items = Object.keys(portraits[person]);
        items.forEach(function(item) {
            portraitLine.push(portraits[person][item]);
        //  portraitLine.push(value)
        });
        //console.log(portraitLine.join(separator));
        stream.write(portraitLine.join(separator)+'\n');
      });
      stream.end();
    });
  }

function Teacher(){
  this.name = '';
  this.count = '';
};
function addTeacher (teachers, t) {teachers.push(t);};

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
};
function addPortrait (portraits, p) {portraits.push(p);};

function getInput(){
  return 2;
    var promptSchema = {
        properties: {
            numberTotalStudents: {
                description: 'enter number of students',
                type: 'integer',
                message: 'Enter total number of students',
                required: true
            }
            ,
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

    prompt.get(promptSchema, function (err, result) {
        numberTotalStudents = result.numberTotalStudents;
    });
 return numberTotalStudents;
};

function generateVolumeName(){
  var nowDate = new Date();
  var nowUTC = new Date(Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()));
  return nowUTC.toISOString().slice(0, 10).replace(/-/g, '') + '_' +((new Date(nowDate)) - nowDate.setHours(0,0,0,0));
};
