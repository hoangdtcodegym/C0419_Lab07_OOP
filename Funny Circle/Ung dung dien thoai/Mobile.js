let Mobile = function () {
    this.name = "";
    this.ison = true;
    this.batery = 100;
    this.msg = '';
    this.inbox = [];
    this.outbox = [];
    this.setname = function (name) {
        this.name = name;
    };
    this.setison = function (ison, batery) {
        if (batery <= 0) {
            ison = false;
        } else {
            this.ison = ison;
        }
    };
    this.charge = function () {
        if (this.batery == 0) {
            this.batery = 100;
        }
    };
    this.writeMsg = function () {
        let letter = document.getElementById('Msg').value;
        if (letter != '') {
            this.msg = letter;
            return this.msg;
        }
    };
    this.sendMsg = function () {
        this.outbox.push(this.msg);
    };
    this.Inbox = function () {
        this.inbox = this.outbox
    };
    this.Outbox = function () {
        if (this.name=='Samsung'){
            document.getElementById('Outbox').innerHTML = this.outbox.join('\n');
        }
    };
};
let Samsung = new Mobile();
Samsung.setname('Samsung');
let dem = 0;
let batery = parseInt(document.getElementById('batery').innerHTML);
let arrMsg = [];

function isOn() {
    let iSon = Samsung.ison;

    if (iSon) {
        document.getElementById('isOn').value = 'Off';
    } else {
        document.getElementById('isOn').value = 'On';
    }
    dem++;
    if (dem % 2 == 0) {``
        Samsung.setison(true, batery);
    } else {
        Samsung.setison(false, batery);
    }
}

function Send() {
    let leter = document.getElementById('Msg').value;
    if (leter != '') {
        Samsung.writeMsg();
        let Msg = Samsung.msg;
        Samsung.sendMsg();
        Samsung.Outbox();
        arrMsg.push(Msg);
        document.getElementById('Inbox1').innerHTML = arrMsg.join('\n');
        document.getElementById('Msg').value = '';
    }
}

// let Iphone = new Mobile();
// let bateryI = parseInt(document.getElementById('batery1').innerHTML);
// let arrMsgI = [];
// let dem1 = 0;
//
// function isOn1() {
//     let iSon = Iphone.ison;
//
//     if (iSon) {
//         document.getElementById('isOn1').value = 'Off';
//     } else {
//         document.getElementById('isOn1').value = 'On';
//     }
//     dem1++;
//     if (dem1 % 2 == 0) {
//         Iphone.setison(true, bateryI);
//     } else {
//         Iphone.setison(false, bateryI);
//     }
// }
//
// function Send() {
//     let leter = document.getElementById('Msg1').value;
//     if (leter != '') {
//         Iphone.writeMsg();
//         let Msg = Samsung.msg;
//         Iphone.sendMsg();
//         Iphone.Outbox();
//         arrMsgI.push(Msg);
//         document.getElementById('Inbox').innerHTML = arrMsgI.join('\n');
//         document.getElementById('Msg1').value = '';
//     }
// }
