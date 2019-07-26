/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var parallide;
(function (parallide) {
    var LetterTile = (function () {
        function LetterTile(letter, element) {
            /*private*/ this.__isSelected = false;
            if (this.letter === undefined)
                this.letter = null;
            if (this.isCompleted === undefined)
                this.isCompleted = false;
            if (this.element === undefined)
                this.element = null;
            this.element = element;
            this.setLetter(letter);
        }
        LetterTile.prototype.getIsCompleted = function () {
            return this.isCompleted;
        };
        LetterTile.prototype.setCompleted = function (isCompleted) {
            this.isCompleted = isCompleted;
            if (isCompleted) {
                this.element.style.borderColor = "var(--completed-green)";
            }
        };
        LetterTile.prototype.addListener = function (w) {
            var _this = this;
            this.element.onclick = function (e) {
                w.handleClick(_this, _this.element);
                return e;
            };
            this.element.style.cursor = "pointer";
        };
        LetterTile.prototype.isSelected = function () {
            return this.__isSelected;
        };
        LetterTile.prototype.setSelected = function (isSelected) {
            this.__isSelected = isSelected;
            if (isSelected && !this.isCompleted) {
                this.element.style.borderColor = "red";
            }
            else if (!this.isCompleted) {
                this.element.style.borderColor = "";
            }
        };
        LetterTile.prototype.getLetter = function () {
            return this.letter;
        };
        LetterTile.prototype.setLetter = function (letter) {
            this.letter = letter;
            this.element.getElementsByTagName("p")[0].textContent = new String(letter).toString();
        };
        return LetterTile;
    }());
    parallide.LetterTile = LetterTile;
    LetterTile["__class"] = "parallide.LetterTile";
})(parallide || (parallide = {}));
