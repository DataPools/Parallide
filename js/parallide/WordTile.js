/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var parallide;
(function (parallide) {
    var WordTile = (function () {
        function WordTile(word, level) {
            if (this.letters === undefined)
                this.letters = null;
            if (this.elements === undefined)
                this.elements = null;
            if (this.firstLetter === undefined)
                this.firstLetter = null;
            if (this.lastLetter === undefined)
                this.lastLetter = null;
            if (this.completed === undefined)
                this.completed = false;
            if (this.answer === undefined)
                this.answer = null;
            if (this.level === undefined)
                this.level = null;
            this.level = level;
            var insideOfWord = word.substring(1, word.length - 1);
            this.answer = insideOfWord;
            var shuffled = this.shuffleLetters(this.answer);
            this.elements = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(shuffled.length + 2);
            this.firstLetter = new parallide.LetterTile(word.charAt(0), this.makeHTMLElement());
            this.letters = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(shuffled.length);
            for (var i = 0; i < shuffled.length; i++) {
                {
                    var theLetter = shuffled.charAt(i);
                    this.letters[i] = new parallide.LetterTile(theLetter, this.makeHTMLElement());
                    this.letters[i].addListener(this);
                }
                ;
            }
            this.lastLetter = new parallide.LetterTile(word.charAt(word.length - 1), this.makeHTMLElement());
            console.info(word);
        }
        /*private*/ WordTile.prototype.makeHTMLElement = function () {
            var individualLetter = document.createElement("div");
            var pTag = document.createElement("p");
            pTag.innerText = new String('0').toString();
            individualLetter.appendChild(pTag);
            var placed = false;
            for (var i = 0; i < this.elements.length && !placed; i++) {
                {
                    if (this.elements[i] == null) {
                        this.elements[i] = individualLetter;
                        placed = true;
                    }
                }
                ;
            }
            return individualLetter;
        };
        WordTile.prototype.load = function () {
            var wordTile = document.getElementById("wordTile");
            for (var index537 = 0; index537 < this.elements.length; index537++) {
                var e = this.elements[index537];
                {
                    wordTile.appendChild(e);
                }
            }
        };
        WordTile.prototype.unload = function () {
            var wordTile = document.getElementById("wordTile");
            for (var index538 = 0; index538 < this.elements.length; index538++) {
                var e = this.elements[index538];
                {
                    wordTile.removeChild(e);
                }
            }
        };
        WordTile.prototype.checkOverflow = function () {
            return document.getElementById("wordTile").scrollWidth > document.body.clientWidth;
        };
        WordTile.prototype.adjust = function () {
            var tags = document.getElementById("wordTile").getElementsByTagName("div");
            while ((this.checkOverflow())) {
                {
                    for (var i = 0; i < tags.length; i++) {
                        {
                            var boxTile = tags.item(i);
                            var width = boxTile.clientWidth;
                            boxTile.style.width = (width - 1) + "px";
                            boxTile.style.height = (width - 1) + "px";
                            var pTag = boxTile.getElementsByTagName("p").item(0);
                            var fontSizeStr = window.getComputedStyle(pTag).getPropertyValue("font-size").split("px").join("");
                            var fontSize = parseFloat(fontSizeStr);
                            pTag.style.fontSize = (fontSize - 0.5) + "px";
                        }
                        ;
                    }
                }
            }
            ;
        };
        WordTile.getRandom = function (min, max) {
            return ((Math.random() * (max - min)) | 0) + min;
        };
        WordTile.prototype.shuffleLetters = function (inputString) {
            var output = inputString;
            while (((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(output, inputString))) {
                {
                    var a = (inputString).split('');
                    for (var i = 0; i < a.length; i++) {
                        {
                            var lowerLimit = this.getLimit(i, a.length, true);
                            var upperLimit = this.getLimit(i, a.length, false);
                            var j = WordTile.getRandom(lowerLimit, upperLimit);
                            var temp = a[i];
                            a[i] = a[j];
                            a[j] = temp;
                            a[j] = temp;
                        }
                        ;
                    }
                    output = new String(a).split(",").join("");
                }
            }
            ;
            return output;
        };
        WordTile.prototype.getLimit = function (i, length, lowerLimit) {
            var differsBy = 2;
            if (length <= (differsBy + 1)) {
                if (lowerLimit) {
                    return 0;
                }
                else {
                    return length - 1;
                }
            }
            if (i + differsBy >= length) {
                if (lowerLimit) {
                    return i - 2;
                }
                else {
                    return length - 1;
                }
            }
            else if (i - differsBy < 0) {
                if (lowerLimit) {
                    return 0;
                }
                else {
                    return i + 2;
                }
            }
            else {
                if (lowerLimit) {
                    return i - 2;
                }
                else {
                    return i + 2;
                }
            }
        };
        WordTile.prototype.getLetters = function () {
            return this.letters;
        };
        WordTile.prototype.getFirstLetter = function () {
            return this.firstLetter;
        };
        WordTile.prototype.getLastLetter = function () {
            return this.lastLetter;
        };
        WordTile.prototype.getSelected = function () {
            for (var index539 = 0; index539 < this.letters.length; index539++) {
                var l = this.letters[index539];
                {
                    if (l.isSelected()) {
                        return l;
                    }
                }
            }
            return null;
        };
        /*private*/ WordTile.prototype.swap = function (first, second) {
            var firstChar = first.getLetter();
            var secondChar = second.getLetter();
            for (var i = 0; i < this.letters.length; i++) {
                {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(this.letters[i], first)) {
                        this.letters[i].setLetter(secondChar);
                        this.letters[i].setSelected(false);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(this.letters[i], second)) {
                        this.letters[i].setLetter(firstChar);
                        this.letters[i].setSelected(false);
                    }
                }
                ;
            }
        };
        /*private*/ WordTile.prototype.checkCompleted = function () {
            for (var i = 0; i < this.letters.length; i++) {
                {
                    var answerChar = this.answer.charAt(i);
                    var charInPosition = this.letters[i].getLetter();
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(charInPosition) != (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(answerChar)) {
                        return false;
                    }
                }
                ;
            }
            this.markCompleted();
            return true;
        };
        /*private*/ WordTile.prototype.markCompleted = function () {
            var _this = this;
            this.firstLetter.setCompleted(true);
            for (var index540 = 0; index540 < this.letters.length; index540++) {
                var l = this.letters[index540];
                {
                    l.setCompleted(true);
                }
            }
            this.lastLetter.setCompleted(true);
            this.completed = true;
            setTimeout((function () { return _this.level.nextWord(); }), 500);
        };
        WordTile.prototype.isCompleted = function () {
            return this.completed;
        };
        WordTile.prototype.handleClick = function (l, element) {
            if (this.level.getTimer() === 0.0) {
                this.level.startTimer();
            }
            var other = this.getSelected();
            if (other != null) {
                this.swap(l, other);
                this.checkCompleted();
            }
            else {
                l.setSelected(true);
            }
        };
        return WordTile;
    }());
    parallide.WordTile = WordTile;
    WordTile["__class"] = "parallide.WordTile";
})(parallide || (parallide = {}));
