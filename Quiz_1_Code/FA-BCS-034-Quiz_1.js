​//  QNO.1 
  
 ​//Output: 
  
 ​/*  
 ​outer func:  this.foo = bar 
 ​outer func:  self.foo = bar       
 ​inner func:  this.foo = undefined 
 ​inner func:  self.foo = bar  */ 
  
 ​//  QNO.2 
  
 ​let​ ​palindrome​=​function​(​str​)​{ 
 ​    ​let​ ​arr​=​str​.​split​(​''​)​; 
 ​    ​let​ ​revArr​=​ ​arr​.​reverse​(​)​; 
 ​    ​let​ ​revStr​=​revArr​.​join​(​''​)​; 
  
 ​    ​//let revStr= str.split('').reverse().join(''); 
  
 ​    ​if​(​str​==​revStr​)​{ 
 ​        ​return​ ​`​${​str​}​ is a palindrome`​  
 ​    ​} 
 ​    ​else​{ 
 ​        ​return​ ​`​${​str​}​ isn't a palindrome`​  
 ​  
 ​    ​} 
 ​} 
 ​let​ ​s​=​'ROTATOR'​; 
 ​console​.​log​(​palindrome​(​s​)​)​; 
  
 ​//  QNO.3 
 ​let​ ​arr​=​[​'a'​,​'b'​,​'c'​,​'d'​] 
 ​arr​.​unshift​(​'0'​)​;​//insert element at the start of array 
 ​arr​.​push​(​'e'​)​;​//insert element at the end of array 
 ​console​.​log​(​arr​)​; 
  
 ​//  QNO.4 
  
 ​console​.​log​(​1​+​ ​"2"​+​"2"​) 
  
 ​//output: 122  
  
 ​//Because + operator is used alongwith string 2 and a number 1, so it'll perform concatenation.JS converts the type of 1 to "1", 1 + "2" yields "12". 12 is again concatenated with the string 2  that yields 122. 
  
 ​console​.​log​(​1​+​  ​+​"2"​+​"2"​) 
  
 ​// output 32 
  
 ​// Based on order of operations, the first operation to be performed is +"2" The extra + before the first "2" is taken as a unary operator. Thus, JavaScript converts the type of "2" to numeric. Thus, next operation is now 1 + 2 which gives output 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, producing "32". 
  
 ​console​.​log​(​1​+​ ​-​"1"​+​"2"​) 
  
 ​// output 02 
  
 ​// The explanation here is identical to the prior example, except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1 producing 0, which is then converted to a string and concatenated with the final "2" string, generating "02". 
  
 ​console​.​log​(​"A"​-​"B"​+​"2"​) 
  
 ​// output NaN2 
  
 ​//Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to give output “NaN2”. 
 ​console​.​log​(​"A"​-​ ​"B"​+​ ​2​) 
  
 ​//output NaN 
  
 ​//Because alphabets A and B neither can be subtracted from each other. "A" - "B" generates NaN.But any operator applied to NaN with any other numeric number will still generate NaN output' Not a Number'. 
  
 ​//  QNO.5 
  
 ​var​ ​arr1​=​[​"a"​,​"b"​,​"c"​,​"d"​,​"e"​,​"f"​,​"f"​] 
 ​let​ ​val​=​arr1​.​filter​(​(​v​,​i​,​a​)​=>​ ​a​.​indexOf​(​v​)​==​ ​i​)​; 
 ​console​.​log​(​val​)