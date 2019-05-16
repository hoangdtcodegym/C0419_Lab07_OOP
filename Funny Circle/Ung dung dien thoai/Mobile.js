let Mobile = function (name) {
    this.name = name;
    this.status = true;
    this.batery = 100;
    this.msg = '';
    this.inbox = [];
    this.outbox = [];
    this.checkStatus = function () {
        if (this.ison) {
            console.log('Dang bat');
        } else {
            console.log('Dang tat')
        }
    };
    this.getStatus = function () {
        return this.status;
    };
    this.getBatery = function () {
        return this.batery;
    };
    this.setBatery = function (batery) {
        this.batery = batery
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
    this.charge = function () {
        if (this.batery < 100) {
            this.batery += 1;
        }
    };
    this.writeMsg = function (msg) {
        this.msg = msg;
    };
    this.sendMsg = function (phone) {
        phone.inbox.push(this.msg);
        this.outbox.push(this.msg);
    };
    this.readInbox = function () {
        return this.inbox
    };
    this.readOutbox = function () {
        return this.outbox
    };
};

function Send(moblie, phone) {
    let batery = moblie.batery;
    if (moblie.status) {
        let leter = document.getElementById('Msg' + moblie.name).value;
        if (leter != '') {
            moblie.writeMsg(leter);
            moblie.sendMsg(phone);
            let inbox = phone.readInbox();
            let outbox = moblie.readOutbox();
            if (phone.status) {
                document.getElementById('Inbox' + phone.name).innerHTML = inbox.join('\n');
            }
            document.getElementById('Msg' + moblie.name).value = '';
            document.getElementById('Outbox' + moblie.name).innerHTML = outbox.join('\n');
        }
        batery = batery - 1;
        moblie.setBatery(batery);
        document.getElementById('batery' + moblie.name).innerHTML = batery;
    }
}

function Batery(mobile) {
    let batery=mobile.batery;
    let a= setInterval(function (){
            batery--;
            mobile.setBatery(batery);
            document.getElementById('batery' + mobile.name).innerHTML=batery;
            if ( batery<1 || mobile.status===false) {
                document.getElementById(mobile.name).value = 'Off'
                clearInterval(a);
        }
    },800);
}

function Charge(mobile) {
    if (mobile.batery <= 100) {
        mobile.charge();
        document.getElementById('batery' + mobile.name).innerHTML = mobile.batery;
    }
}

function Status(mobile) {
    if (mobile.getBatery()>0 ) {
        if (mobile.getStatus()) {
            mobile.turnOff();
            document.getElementById(mobile.name).value = 'Off'
        } else {
            mobile.turnOn();
            document.getElementById(mobile.name).value = 'On';
            Batery(mobile);
        }

    }
}

let XiaoMI = new Mobile('XiaoMI');
let Hawei = new Mobile('Hawei');
Batery(XiaoMI);
Batery(Hawei);
function isOnXiaoMI() {
    Status(XiaoMI);
}

function isOnHawei() {
    Status(Hawei);
}

function SendXiaoMi() {
    Send(XiaoMI, Hawei);
}

function SendHawei() {
    Send(Hawei, XiaoMI);
}

function ChargeXiaoMi() {
    let ChargeMI = setInterval(function () {
        Charge(XiaoMI);
        if (XiaoMI.batery >= 100) {
            clearInterval(ChargeMI)
        }
    }, 1000);
}

function ChargeHawei() {
    let ChargeHawei = setInterval(function () {
        Charge(Hawei);
        if (Hawei.batery >= 100) {
            clearInterval(ChargeHawei)
        }
    }, 1200);
}



