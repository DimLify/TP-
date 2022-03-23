"use strict";
exports.__esModule = true;
exports.KhmerDate = void 0;
var KhmerDate = /** @class */ (function () {
    function KhmerDate(dateAndtime) {
        this.date = new Date();
        this.current = new Date();
        this.date = new Date(dateAndtime);
        var data_seconds = this.date.getTime() / 1000;
        this.currentTimeStamp(data_seconds);
    }
    KhmerDate.prototype.currentTimeStamp = function (data_seconds) {
        var cur_seconds = (this.current.getTime() / 1000) + 7 * 60 * 60;
        var result = cur_seconds - data_seconds;
        if (result >= 2592000) {
            this.res = (Math.floor(result / 2592000)).toString() + "ខែមុន";
        }
        else if (result >= 604800) {
            this.res = (Math.floor(result / 604800)).toString() + "សប្តាហ៍មុន";
        }
        else if (result >= 86400) {
            this.res = (Math.floor(result / 86400)).toString() + "ថ្ងៃមុន";
        }
        else if (result >= 3600) {
            this.res = (Math.floor(result / 3600)).toString() + "ម៉ោងមុន";
        }
        else if (result >= 60) {
            this.res = (Math.floor(result / 60)).toString() + "នាទីមុន";
        }
        else if (result >= 0) {
            this.res = "មុននេះបន្តិច";
        }
        this.changeNumber();
    };
    KhmerDate.prototype.changeNumber = function () {
        this.res = this.res.replace('1', '១');
        this.res = this.res.replace('2', '២');
        this.res = this.res.replace('3', '៣');
        this.res = this.res.replace('4', '៤');
        this.res = this.res.replace('5', '៥');
        this.res = this.res.replace('6', '៦');
        this.res = this.res.replace('7', '៧');
        this.res = this.res.replace('8', '៨');
        this.res = this.res.replace('9', '៩');
    };
    KhmerDate.prototype.getDate = function () {
        return this.res;
    };
    return KhmerDate;
}());
exports.KhmerDate = KhmerDate;
