/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var parallide;
(function (parallide) {
    var Level = (function () {
        function Level(levelWords) {
            var _this = this;
            /*private*/ this.incrementVal = 0.1;
            if (this.words === undefined)
                this.words = null;
            if (this.timerValue === undefined)
                this.timerValue = 0;
            if (this.timerElement === undefined)
                this.timerElement = null;
            if (this.currentWord === undefined)
                this.currentWord = 0;
            if (this.completed === undefined)
                this.completed = false;
            this.timerElement = document.getElementById("timer");
            this.words = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(levelWords.length);
            for (var i = 0; i < levelWords.length; i++) {
                {
                    this.words[i] = new parallide.WordTile(levelWords[i], this);
                }
                ;
            }
            window.addEventListener("resize", function (event) {
                _this.adjust();
            });
        }
        Level.prototype.start = function () {
            this.loadWord(0);
        };
        Level.prototype.startTimer = function () {
            this.incrementTimer();
        };
        Level.prototype.nextWord = function () {
            if (this.currentWord < this.words.length - 1) {
                this.currentWord++;
                this.loadWord(this.currentWord);
            }
            else {
                this.completed = true;
            }
        };
        Level.prototype.loadWord = function (index) {
            if (index >= 0 && index < this.words.length) {
                if (index > 0) {
                    this.words[index - 1].unload();
                }
                this.words[index].load();
                this.words[index].adjust();
                document.getElementById("wordcount").innerHTML = "Word " + (index + 1) + "/" + this.words.length;
            }
        };
        /*private*/ Level.prototype.resetBoxSize = function () {
            var tags = document.getElementById("wordTile").getElementsByTagName("div");
            for (var i = 0; i < tags.length; i++) {
                {
                    var boxTile = tags.item(i);
                    boxTile.style.height = "";
                    boxTile.style.width = "";
                    var pTag = boxTile.getElementsByTagName("p").item(0);
                    pTag.style.fontSize = "";
                }
                ;
            }
        };
        Level.prototype.adjust = function () {
            this.resetBoxSize();
            this.words[this.currentWord].adjust();
        };
        /*private*/ Level.prototype.incrementTimer = function () {
            var _this = this;
            if (!this.isCompleted()) {
                this.timerValue += this.incrementVal;
                this.timerElement.innerHTML = new String(Level.round(this.timerValue, 1)).toString();
                setTimeout((function () { return _this.incrementTimer(); }), this.incrementVal * 1000);
            }
        };
        Level.prototype.isCompleted = function () {
            return this.completed;
        };
        /*private*/ Level.round = function (value, precision) {
            var scale = (Math.pow(10, precision) | 0);
            return Math.round(value * scale) / scale;
        };
        Level.prototype.getTimer = function () {
            return this.timerValue;
        };
        return Level;
    }());
    parallide.Level = Level;
    Level["__class"] = "parallide.Level";
})(parallide || (parallide = {}));
