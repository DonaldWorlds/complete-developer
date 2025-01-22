/**To use custom declaratiion files we can we the type declaration files
 * which have the .d.ts extensions. type declaratoin files shouldnt not 
 * contain any impemntaion code. sometthing like a class file 
 * 
 * type declartion file poveusefule when wirking with external code bases. 
 * 
 * you can add these files to yout type scipt project t oadd support to your libary 
 * 
 * type declaration files are collected under the @types scope in npm
 * all type declaration file from the @types cope should be considered development 
 * dependencies of you poject. 
 * 
 * hence we use the --save-dev flag on the npm install 
 * 
 */

interface WeatherQueryInterface{
    zipcode: string;
}

type WeatherDetailType = {
    weather: string;
    zipcode: string;
    temp?:number; //can be a temp value 
}

