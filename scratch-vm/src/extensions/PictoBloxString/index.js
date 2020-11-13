const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class PictoBloxString {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'pictoBloxString',
            name: 'PictoBloxString',
             blocks: [
             {
                    "opcode": "stringInstring",
                    "blockType": BlockType.COMMAND,
                    "text": " StringIndex : enter the first string [str1] and enter the string to be searched [str2] ",
                    "arguments": {
                        "str1": {
                            "type": "string",
                            "defaultValue": " "
                        },
                        "str2": {
                            "type": "string",
                            "defaultValue": " "
                        }
                        
                    }
                },
                {
                    "opcode": "STRINGCOMPARE",
                    "blockType": BlockType.COMMAND,
                    "text": " StringCopmare :enter the first string [str1] and the second string [str2] ",
                    "arguments": {
                        "str1": {
                            "type": "string",
                            "defaultValue": " "
                        },
                        "str2": {
                            "type": "string",
                            "defaultValue": " "
                        }
                        
                    }
                }

               
                
            ],
            menus: {
            }
        };
    }

        STRINGCOMPARE({str1,str2}) {
            if(str1.toLowerCase() === str2.toLowerCase()){
                return "true"
            }else{
               return "false"
            }
    }//end of stringcompare

        stringInstring({str1,str2}){
            const indexOfFirst = str1.indexOf(str2);
            const con = str1.includes(str2)
        if(con){
            return  "At Index :"+ indexOfFirst
        }
        else{
            return "No string found!!"
        }
        
    }
}

module.exports = PictoBloxString;
