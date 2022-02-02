# createPSPA
**generates a set of files in PSPA format** ( https://amilestonegroup.com/2014/02/503-2/ )

**NOTE: Outputs *test data* only!**
  + Useful for testing applications that consume PSPA data. 
  + Does not generate PSPA format from user input files.

requires imagemagick graphicsmagic ghostscript

run using: "npm start"

can take a 'number of students parameter':
+ run using : "npm start 255" to generate PSPA with 255 students
  + ** NOTE: there is currently a bug that limits this to about 1000 (depending on filesystem) 


edit these variables to modify the number of students, grades, and teachers

+ var numberTotalStudents = 75;
+ var numberGrades = 3;
+ var numberTeachers = 2;  // NOTE: this is teachers PER GRADE



