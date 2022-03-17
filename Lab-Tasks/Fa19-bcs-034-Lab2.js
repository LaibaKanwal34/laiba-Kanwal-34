//******************************************************************************************************************​
var​ ​student​=​{ 
    ​firstName​:​"Laiba"​, 
    ​    ​lastName​:​"kanwal"​, 
    ​    ​Age​:​21​, 
    ​    ​enroll_Number​:​"Fa19-Bcs-034"​, 
    ​    ​Cgpa​:​2.97, 
    ​    ​Department​: ​"Computer Science"​, 
    ​    ​semEster​:​"6th/A"​, 
    ​    ​getAll​:​function​(​)​{ 
    ​        ​console​.​log​(​'Name '​+​this​.​firstName​+​" "​+​this​.​lastName​+​'\n'​+​'Age '​+​this​.​Age​+​'\n'​+​'Registration number '​+​this​.​enroll_Number​+​'\n'​+​'Cgpa '​+​this​.​Cgpa​+​'\n'​+​'Department '​+​this​.​Department​+​'\n'​+​'Semester '​+​this​.​semEster​)​; 
    ​    ​} 
    ​} 
     
    ​student​.​getAll​(​)​;
//******************************************************************************************************************
    ​var​ ​student​=​{ 
        ​    ​firstName​:​"Laiba"​, 
        ​    ​lastName​:​"Kanwal"​, 
        ​    ​Age​:​21​, 
        ​    ​enroll_Number​:​"Fa19-Bcs-034"​, 
        ​    ​Cgpa​:​2.97, 
        ​    ​Department​: ​"Computer Science"​, 
        ​    ​semEster​:​"6th/A"​, 
        ​    ​getAll​:​function​(​)​{ 
        ​        ​console​.​log​(​'Name '​+​this​.​firstName​+​" "​+​this​.​lastName​+​'\n'​+​'Age '​+​this​.​Age​+​'\n'​+​'Registration number '​+​this​.​enroll_Number​+​'\n'​+​'Cgpa '​+​this​.​Cgpa​+​'\n'​+​'Department '​+​this​.​Department​+​'\n'​+​'Semester '​+​this​.​semEster​)​; 
        ​    ​} 
        ​} 
         
        ​console​.​log​(​"Before Deleting CGPA :)"​) 
        ​student​.​getAll​(​)​; 
        ​console​.​log​(​"\n\n"​)​; 
        ​delete​ ​student​.​Cgpa​; 
        ​console​.​log​(​"After Deleting CGPA :("​)​; 
        ​student​.​getAll​(​)​;
//******************************************************************************************************************
​var​ ​library​ ​=​ ​[​  
    ​    ​{ 
    ​        ​author​: ​'Bill Gates'​, 
    ​        ​title​: ​'The Road Ahead'​, 
    ​        ​readingStatus​: ​true 
    ​    ​}​, 
    ​    ​{ 
    ​        ​author​: ​'Steve Jobs'​, 
    ​        ​title​: ​'Walter Isaacson'​, 
    ​        ​readingStatus​: ​true 
    ​    ​}​, 
    ​    ​{ 
    ​        ​author​: ​'Suzanne Collins'​, 
    ​        ​title​:  ​'Mockingjay: The Final Book of The Hunger Games'​,​  
    ​        ​readingStatus​: ​false 
    ​    ​}​]​; 
    ​    ​for​(​let​ ​item​ ​of​ ​library​)​{ 
    ​console​.​log​(​"Author "​+​item​.​author​+​"\n"​+​"Title "​+​item​.​title​+​"\n"​+​"Reading Status "​+​item​.​readingStatus​)​; 
    ​console​.​log​(​"\t\t"​)​;​} 
    ​​// function sandwich_calculator(bread){ 
        ​// return (Math.floor(bread/2)+" Sandwiches can be made!"); 
        ​// } 
        ​// console.log(sandwich_calculator(7)); 
        ​function​ ​sandwich_calculator​(​bread​,​cheese​)​{ 
        ​    ​var​ ​sandwiches​=​0​; 
        ​while​(​true​)​{ 
        ​    ​if​(​bread​>=​2​)​{ 
        ​        ​bread​-=​2​; 
        ​        ​if​(​cheese​>=​1​)​{ 
        ​        ​cheese​-=​1 
        ​sandwiches​+=​1​; 
        ​        ​} 
        ​        ​else​{​console​.​log​(​sandwiches​+​" Sandwiches can be made!"​)​; 
        ​            ​break​;​} 
        ​    ​} 
        ​    ​else​{​console​.​log​(​sandwiches​+​" Sandwiches can be made!"​)​; 
        ​        ​break​;​} 
        ​}​} 
        ​sandwich_calculator​(​26​,​12​)​;
        