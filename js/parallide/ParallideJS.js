/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var parallide;
(function (parallide) {
    var ParallideJS = (function () {
        function ParallideJS() {
        }
        ParallideJS.main = function (args) {
            document.getElementById("startButton").addEventListener("click", function (event) {
                ParallideJS.gatherData();
            });
        };
        ParallideJS.gatherData = function () {
            var link = document.getElementById("urlbox").value;
            var amount = (parseInt(document.getElementById("numberbox").value) | 0);
            ParallideJS.getWords(link, amount);
        };
        ParallideJS.launchLevel = function (levelWords) {
            var first = new parallide.Level(levelWords);
            document.getElementById("explanation").style.visibility = "hidden";
            document.getElementById("startInfo").style.visibility = "hidden";
            document.getElementById("stats").style.visibility = "visible";
            document.getElementById("wordTile").style.visibility = "visible";
            first.start();
        };
        ParallideJS.getWords = function (url, amount) {
            if (url == null || (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(url, "") || url.length < 3) {
                url = ParallideJS.defaultEasyListURL;
            }
            if (amount > 100 || amount < 1) {
                amount = ParallideJS.defaultWordsAmount;
            }
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.send();
            var finalAmount = amount;
            request.onload = (function (request, finalAmount) {
                return function (event) {
                    var response = ParallideJS.shuffleArray(request.responseText.split(","));
                    var toreturn = (function (s) { var a = []; while (s-- > 0)
                        a.push(null); return a; })(finalAmount);
                    var i = 0;
                    var j = 0;
                    while ((i < toreturn.length)) {
                        {
                            if (j >= response.length) {
                                j = 0;
                            }
                            var wordCandidate = response[j].toString().split("\r\n").join("").toUpperCase().trim();
                            if (wordCandidate.length > 3 && ParallideJS.insideComposedOfSameLetters(wordCandidate) === false) {
                                toreturn[i] = wordCandidate;
                                i++;
                            }
                            j++;
                        }
                    }
                    ;
                    ParallideJS.launchLevel(toreturn);
                    return 0;
                };
            })(request, finalAmount);
        };
        /*private*/ ParallideJS.insideComposedOfSameLetters = function (input) {
            input = input.substring(1, input.length - 1);
            var first = input.substring(0, 1);
            for (var i = 1; i < input.length + 1; i++) {
                {
                    if (!((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(input.substring(i - 1, i), first))) {
                        return false;
                    }
                }
                ;
            }
            return true;
        };
        ParallideJS.shuffleArray = function (a) {
            for (var i = 0; i < a.length; i++) {
                {
                    var j = parallide.WordTile.getRandom(0, a.length);
                    var temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
                ;
            }
            return a;
        };
        ParallideJS.createError = function (errorMessage) {
            var errorElement = document.createElement("p");
            errorElement.innerHTML = errorMessage;
            errorElement.style.color = "red";
            document.getElementById("stats").appendChild(errorElement);
        };
        return ParallideJS;
    }());
    ParallideJS.word = null;
    ParallideJS.defaultEasyListURL = "https://datapools.github.io/readthecommentsplease.com/parallide/easylist.txt";
    ParallideJS.defaultWordsAmount = 10;
    parallide.ParallideJS = ParallideJS;
    ParallideJS["__class"] = "parallide.ParallideJS";
})(parallide || (parallide = {}));
parallide.ParallideJS.main(null);
