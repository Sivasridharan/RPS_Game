


let game = document.getElementById('view')
let start_button = document.querySelector('.start')
let choose_image = document.getElementById('user_select')
let computer_choice = document.getElementById('computer_select')
let images = ['./img/rock img.jpg', './img/paper img.jpg', './img/scissor img.jpg']
let randomNumber;
let user_point_display = document.getElementById('user_score')
let computer_point_display = document.getElementById('computer_score')
let see = document.getElementById('view_result')
let user_show = document.getElementById('user_win')
let computer_show = document.getElementById('User_lose')
let playing = document.querySelector('.play')
let img = document.querySelector('.choose')
let BACK = document.querySelector('.back')
let RESET = document.getElementById('reset')
let play_gnd = document.querySelector('.play_ground')
let user_point = 0;
let computer_point = 0;
let games = 0;
let total_games = 5;
let target = Math.floor(total_games / 2) + 1;


function reset_game() {
    console.log('reset');

    // reset scores
    user_point = 0;
    computer_point = 0;
    games = 0;

    // reset UI
    user_point_display.innerText = user_point;
    computer_point_display.innerText = computer_point;
    see.innerHTML = "";
    choose_image.src = "";
    computer_choice.src = "";
    playing.style.display='flex'
    img.style.display = 'flex';
    user_show.style.display = 'none';
    computer_show.style.display = 'none';
    RESET.style.display = 'none';
    game.style.display = 'block';

    computer_choice.style.width = '0%';
    computer_choice.style.height = '0%';
    choose_image.style.width = '0%';
    choose_image.style.height = '0%';
}

function user_win() {
    see.innerHTML = 'Win';
    see.style.color = 'green';
    user_point += 1;

    games += 1;
    BACK.style.display = 'none';
    user_point_display.innerHTML = user_point;

    if (user_point == target) {
        playing.style.display = 'none';
        img.style.display = 'none';
        user_show.style.display = 'block';
        RESET.style.display = 'block';
    }
}

function computer_win() {
    see.innerHTML = 'Lose';
    see.style.color = 'red';
    computer_point += 1;

    games += 1;
    BACK.style.display = 'none';
    computer_point_display.innerHTML = computer_point;

    if (computer_point == target) {
        playing.style.display = 'none';
        img.style.display = 'none';
        computer_show.style.display = 'block';
        RESET.style.display = 'block';
    }
}

function random_num() {
    return Math.floor(Math.random() * 3)
}

function check_condition(a) {
    if (a == randomNumber) {
        see.innerHTML = 'Match Draw';
        see.style.color = 'brown';
    }
    else if ((a == 0 && randomNumber == 2) || (a == 1 && randomNumber == 0) || (a == 2 && randomNumber == 1)) {
        user_win();
    }
    else {
        computer_win();
    }
}

function computer_play() {
    randomNumber = random_num()
    computer_choice.style.width = '100%';
    computer_choice.style.height = '100%';
    computer_choice.src = images[randomNumber]
}

function play_game() {
    game.style.display = "block";
    start_button.style.display = "none";
}

function backword() {
    game.style.display = "none";
    start_button.style.display = "block";
}

function image_select(a) {
    choose_image.style.width = '100%';
    choose_image.style.height = '100%';
    choose_image.src = images[a]

    computer_play();
    check_condition(a);
}

