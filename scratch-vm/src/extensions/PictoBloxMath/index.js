
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class PictoBloxMath {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'pictoBloxMath',
            name: 'pictoBloxMath',
            blocks: [
                {
                    "opcode": "sqaureroot",
                    "blockType": "COMMAND",
                    "text": "enter the number for the sqaure root [num1] ",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "0"
                        }
                        
                    }
                },

                {
                    "opcode": "sqaure",
                    "blockType": "COMMAND",
                    "text": "enter the number to be sqaure [num] ",
                    "arguments": {
                        "num": {
                            "type": "number",
                            "defaultValue": "0"
                        }
                        
                    }
                },
                
            ],

            menus: {
            }
        };
    }

    sqaureroot ({num1}) {
        if(num1 < 0){
            var num2 = -1 * num1;
            return (Math.sqrt(num2) +"i" +" "+"where  i = √-1")
        }else{
           return (Math.sqrt(num1)); 
        }
        
    }
    sqaure({num}){
        return num* num;
    }
}

module.exports = PictoBloxMath;