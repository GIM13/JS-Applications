function solve() {

    function computerQualityMixin(classToExtend) {

        classToExtend.prototype.getQuality = function () {

            return (this.rocessorSpeed
                + this.ram
                + this.hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = () => {

            if (this.processorSpeed > (this.ram / 4)) {

                return true;
            }

            return false;
        }

        classToExtend.prototype.isRoomy = () => {

            if (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)) {

                return true;
            }

            return false;
        }

    }

    function styleMixin(classToExtend) {

        function isFullSet() {

            if (classToExtend.manufacturer === classToExtend.keyboard.manufacturer
                && classToExtend.manufacturer === classToExtend.monitor.manufacturer) {

                return true;
            }

            return false;
        }

        function isClassy() {

            if (classToExtend.battery.expectedLife >= 3
                && (classToExtend.color === "Silver"
                    || classToExtend.color === "Black")
            ) {

                return true;
            }

            return false;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}