const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(type = true) {
        this.typeMachine = type;
    }

    // showType(){
    //     return this.typeMachine;
    // }

    encrypt(msg, key) {
        //throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        let aplha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        function normaliseKey(msg, key) {
            if (key.length > msg.length) {
                return key;
            } else {
                let newKey = "";
                while (msg.length > newKey.length) {
                    newKey += key;
                }
                return newKey;
            }
        }
        if (typeof (msg) != 'string' || typeof (key) != 'string' || msg.length == 0 || key.length == 0 || arguments.length == 0) {
            throw new Error('Incorrect arguments!');
        }
        let ansStr = [];
        key = normaliseKey(msg, key);
        for (let i = 0, j = 0; i < msg.length; i++) {
            //console.log(this.aplha.indexOf(msg[i].toLocaleUpperCase()));
            //console.log("msg- ", msg[i], "key- ", key[i] , "end- ", this.aplha[(this.aplha.indexOf(msg[i].toLocaleUpperCase())+this.aplha.indexOf(key[i].toLocaleUpperCase()) )% 26]);
            if (aplha.indexOf(msg[i].toLocaleUpperCase()) != -1) {
                ansStr.push(aplha[(aplha.indexOf(msg[i].toLocaleUpperCase()) + aplha.indexOf(key[j++].toLocaleUpperCase())) % 26]);
            } else {
                ansStr.push(msg[i]);
            }
        }
        if (this.typeMachine) {
            return ansStr.join("");
        } else {
            return ansStr.reverse().join("");
        }

    }
    decrypt(msgCript, key) {
        //throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        let aplha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        function normaliseKey(msg, key) {
            if (key.length > msg.length) {
                return key;
            } else {
                let newKey = "";
                while (msg.length > newKey.length) {
                    newKey += key;
                }
                return newKey;
            }
        }
        if (typeof (msgCript) != 'string' || typeof (key) != 'string' || msgCript.length == 0 || key.length == 0 || arguments.length == 0) {
            throw new Error('Incorrect arguments!');
        }
        let ansStr = [];
        key = normaliseKey(msgCript, key);
        for (let i = 0, j = 0; i < msgCript.length; i++) {
            //console.log(this.aplha.indexOf(msg[i].toLocaleUpperCase()));
            //console.log("msg- ", msg[i], "key- ", key[i] , "end- ", this.aplha[(this.aplha.indexOf(msg[i].toLocaleUpperCase())+this.aplha.indexOf(key[i].toLocaleUpperCase()) )% 26]);
            if (aplha.indexOf(msgCript[i].toLocaleUpperCase()) != -1) {
                //console.log("msg- ", msgCript[i], "key- ", key[j] ,"msg- ", this.aplha.indexOf(msgCript[i].toLocaleUpperCase()), "key- ", this.aplha.indexOf(key[j].toLocaleUpperCase()) ,  "end- ", this.aplha[(this.aplha.indexOf(msgCript[i].toLocaleUpperCase()) - this.aplha.indexOf(key[j].toLocaleUpperCase()) )% 26]);
                if (aplha.indexOf(msgCript[i].toLocaleUpperCase()) >= aplha.indexOf(key[j].toLocaleUpperCase())) {
                    ansStr.push(aplha[((aplha.indexOf(msgCript[i].toLocaleUpperCase()) - aplha.indexOf(key[j].toLocaleUpperCase())) % 26)]);
                } else {
                    ansStr.push(aplha[26 - Math.abs((aplha.indexOf(msgCript[i].toLocaleUpperCase()) - aplha.indexOf(key[j].toLocaleUpperCase())) % 26)]);
                }
                j++;
            } else {

                ansStr.push(msgCript[i]);
            }

        }
        if (this.typeMachine) {
            return ansStr.join("");
        } else {
            return ansStr.reverse().join("");
        }

    }

}

module.exports = {
    VigenereCipheringMachine
};
