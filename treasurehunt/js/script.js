const list = document.getElementsByTagName('li');
let scoretext = document.getElementsByTagName('h2');
// let logtext = document.getElementsByTagName('h3');
let flag = true;
let clicked = false;
let score = 0;
let sheets = 0;

// const text = document.querySelector('.fade-out');
// setTimeout(() => {
//     text.classList.add('hide');
// }, 500);

// console.log(list);
// console.log(list.length);

// list[0].innerHTML = 1;
// list[1].innerHTML = 2;
// list[2].innerHTML = 3;
// list[3].innerHTML = 4;
// list[4].innerHTML = 5;
// list[5].innerHTML = "×";

// list[0].value = 1;
// list[1].value = 2;
// list[2].value = 3;
// list[3].value = 4;
// list[4].value = 5;
// list[5].value = false;

const timer = document.getElementById('timer');
let startTime;
let timeoutId;

function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${m}:${s},${ms}`;

    timeoutId = setTimeout(() => {
        countUp();
    }, 10);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// シャッフル関数
function shuffle(arrays) {
    // const array = arrays.slice();
    const array = arrays;
    // const array = new Array(6);
    // array = arrays;

    for (var i = 0; i < array.length; i++) {
        if (getRandomInt(5)) {
            array[i].value = getRandomInt(21);
            array[i].innerHTML = array[i].value;
        }
    }

    console.log(array);
    for (let i = array.length - 1; i >= 0; i--) {
        const randomindex = Math.floor(Math.random() * (i + 1));
        // [array[i], array[randomindex]] = [array[randomindex], array[i]];
        [array[i].value, array[randomindex].value] = [array[randomindex].value, array[i].value];
        [array[i].innerHTML, array[randomindex].innerHTML] = [array[randomindex].innerHTML, array[i].innerHTML];
    }

    return array;
}

// shuffle(list);

// console.log(scoretext);

// console.log(list[1].innerHTML);
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        if (clicked == false) {
            shuffle(list);

            for (var k = 0; k < list.length; k++) {
                if (list[k].innerHTML != 0) {
                    sheets++;
                    // logtext[0].innerHTML = m;
                }
            }

            startTime = Date.now();
            console.log(startTime);
            console.log(new Date(startTime))
            countUp();
        }
        console.log(flag);
        if (flag) {

            setTimeout(() => {
                this.classList.add('hide');
            }, 200);

            sheets--;

            // this.classList.toggle('active');
            // console.log(list[i].innerHTML);
            // console.log(i);
            // console.log(this.innerHTML);
            // console.log(score);
            this.style.color = "#fff";
            // this.style.color = "#000";
            this.style.backgroundColor = "#000";
            // score += Number(this.innerHTML);
            score += Number(this.value);
            // console.log(score);
            scoretext[0].innerHTML = score;
            console.log(scoretext.innerHTML);
            flag = Number(this.value);

            // logtext[0].innerHTML = sheets;

            if (flag) {
                this.style.backgroundImage = 'url(../img/photo_02.jpg)';
            }

            this.value = 0;
            this.classList.add("non_event");
            clicked = true;

            if (flag == false || sheets == 0) {
                clearTimeout(timeoutId);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn").addEventListener("click", function () {
        window.location.reload();
    })
});