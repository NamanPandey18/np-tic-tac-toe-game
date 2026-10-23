let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#rbtn");
let nbtn = document.getElementById("nbtn");
let turnO = true;
let winner = document.querySelector(".hide");
let isWin;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
rbtn.addEventListener("click", () => {
    turnO = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
});
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
            box.classList.remove("x");
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.classList.add("x");
            box.classList.remove("o");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                isWin = true;
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                if (p1 === "O") {
                    winner.innerHTML = `<p id="t"><span style="position:relative; top:4rem;"><svg class="trophy" width="155" height="150" viewBox="0 0 500 550"
    xmlns="http://www.w3.org/2000/svg">

    <!-- Background -->
    <rect width="500" height="550" fill="white" />

    <!-- CONFETTI -->

    <!-- Stars -->
    <path d="M105 80 L112 98 L132 99 L116 111 L121 130 L105 119 L89 130 L94 111 L78 99 L98 98 Z"
        fill="#FBBF24" />

    <path d="M395 350 L402 367 L421 369 L406 381 L411 399 L395 389 L379 399 L384 381 L369 369 L388 367 Z"
        fill="#F59E0B" />

    <path d="M390 220 L396 235 L412 237 L399 247 L403 263 L390 254 L376 263 L380 247 L367 237 L383 235 Z"
        fill="#9333EA" />

    <!-- Small circles -->
    <circle cx="145" cy="120" r="7" fill="#FBBF24" />
    <circle cx="330" cy="92" r="8" fill="#EC4899" />
    <circle cx="410" cy="125" r="7" fill="#F59E0B" />
    <circle cx="105" cy="200" r="10" fill="#3B82F6" />
    <circle cx="195" cy="410" r="6" fill="#3B82F6" />
    <circle cx="205" cy="380" r="9" fill="#22C55E" />
    <circle cx="350" cy="430" r="9" fill="#F59E0B" />
    <circle cx="150" cy="440" r="10" fill="#EC4899" />

    <!-- Confetti -->
    <path d="M180 55 Q190 48 202 45 L210 75 Q200 82 190 86 Z"
        fill="#3B82F6" />

    <path d="M380 65 Q392 70 405 78 L390 105 Q378 100 367 94 Z"
        fill="#22C55E" />

    <path d="M70 150 Q80 145 90 140 L108 165 Q98 173 88 176 Z"
        fill="#22C55E" />

    <path d="M430 155 Q440 150 450 145 L464 168 Q453 178 442 183 Z"
        fill="#9333EA" />

    <path d="M70 250 Q85 242 100 240 L105 262 Q88 268 78 275 Z"
        fill="#EC4899" />

    <path d="M120 265 Q128 258 136 255 L151 285 Q143 291 135 295 Z"
        fill="#EC4899" />

    <path d="M385 280 Q395 272 405 268 L418 293 Q407 301 398 305 Z"
        fill="#22C55E" />

    <path d="M430 310 Q440 300 450 295 L465 320 Q455 330 445 335 Z"
        fill="#3B82F6" />

    <path d="M145 350 Q153 340 165 334 L177 355 Q166 364 158 370 Z"
        fill="#3B82F6" />

    <path d="M300 345 Q310 335 320 330 L333 350 Q324 360 314 365 Z"
        fill="#9333EA" />

    <!-- TROPHY -->

    <!-- Left handle -->
    <path d="
        M170 155
        H135
        Q115 155 115 178
        Q115 235 175 245
        L185 220
        Q145 210 145 180
        H175
        Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="6" />

    <!-- Right handle -->
    <path d="
        M330 155
        H365
        Q385 155 385 178
        Q385 235 325 245
        L315 220
        Q355 210 355 180
        H325
        Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="6" />

    <!-- Cup body -->
    <path d="
        M145 125
        Q145 320 250 335
        Q355 320 355 125
        Z"
        fill="#FDBA12"
        stroke="#F59E0B"
        stroke-width="5" />

    <!-- Cup highlight -->
    <path d="
        M170 145
        Q170 285 220 305
        L220 145 Z"
        fill="#FFE66D"
        opacity="0.65" />

    <!-- Cup shade -->
    <path d="
        M300 140
        Q340 180 320 280
        Q305 320 275 325
        Q330 285 330 150 Z"
        fill="#F59E0B"
        opacity="0.45" />

    <!-- Top rim -->
    <ellipse cx="250" cy="125" rx="105" ry="25"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="5" />

    <ellipse cx="250" cy="125" rx="82" ry="12"
        fill="#F59E0B" />

    <!-- Star -->
    <path d="
        M250 175
        L261 204
        L292 206
        L268 225
        L276 255
        L250 238
        L224 255
        L232 225
        L208 206
        L239 204 Z"
        fill="#FFF3A3"
        stroke="#FFE066"
        stroke-width="3" />

    <!-- Trophy neck -->
    <path d="
        M225 325
        H275
        L280 365
        Q280 385 300 395
        H200
        Q220 385 220 365
        Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="5" />

    <!-- Neck highlight -->
    <path d="M235 330 H250 V380 H220 Q238 370 235 330Z"
        fill="#FFE66D"
        opacity="0.7" />

    <!-- Bottom gold ring -->
    <rect x="200" y="390" width="100" height="22" rx="8"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="4" />

    <!-- BLUE BASE -->

    <path d="
        M190 410
        H310
        L325 475
        H175
        Z"
        fill="#1769C2"
        stroke="#0757A6"
        stroke-width="5" />

    <path d="
        M200 420
        H225
        L215 465
        H185
        Z"
        fill="#3B82F6"
        opacity="0.55" />

    <!-- Plaque -->
    <rect x="215" y="430" width="70" height="25" rx="5"
        fill="#4FA3E8"
        stroke="#8CC8F5"
        stroke-width="3" />

    <!-- Lower base -->
    <path d="
        M165 475
        H335
        L345 500
        Q345 510 335 510
        H165
        Q155 510 155 500
        Z"
        fill="#1769C2"
        stroke="#0757A6"
        stroke-width="5" />

</svg>
</span>Winner🎉🎉<br><span style="margin-left:35%">Player 1</p>
        <button id="nbtn" class="nbtn">New Game</button>`
                    winner.classList.add("show");
                    winner.classList.remove("hide");
                } else {
                    winner.innerHTML = `<p id="t"><span style="position:relative; top:4rem;"><svg class="trophy" width="155" height="150" viewBox="0 0 500 550"
    xmlns="http://www.w3.org/2000/svg">

    <!-- Background -->
    <rect width="500" height="550" fill="white" />

    <!-- CONFETTI -->

    <!-- Stars -->
    <path d="M105 80 L112 98 L132 99 L116 111 L121 130 L105 119 L89 130 L94 111 L78 99 L98 98 Z"
        fill="#FBBF24" />

    <path d="M395 350 L402 367 L421 369 L406 381 L411 399 L395 389 L379 399 L384 381 L369 369 L388 367 Z"
        fill="#F59E0B" />

    <path d="M390 220 L396 235 L412 237 L399 247 L403 263 L390 254 L376 263 L380 247 L367 237 L383 235 Z"
        fill="#9333EA" />

    <!-- Small circles -->
    <circle cx="145" cy="120" r="7" fill="#FBBF24" />
    <circle cx="330" cy="92" r="8" fill="#EC4899" />
    <circle cx="410" cy="125" r="7" fill="#F59E0B" />
    <circle cx="105" cy="200" r="10" fill="#3B82F6" />
    <circle cx="195" cy="410" r="6" fill="#3B82F6" />
    <circle cx="205" cy="380" r="9" fill="#22C55E" />
    <circle cx="350" cy="430" r="9" fill="#F59E0B" />
    <circle cx="150" cy="440" r="10" fill="#EC4899" />

    <!-- Confetti -->
    <path d="M180 55 Q190 48 202 45 L210 75 Q200 82 190 86 Z"
        fill="#3B82F6" />

    <path d="M380 65 Q392 70 405 78 L390 105 Q378 100 367 94 Z"
        fill="#22C55E" />

    <path d="M70 150 Q80 145 90 140 L108 165 Q98 173 88 176 Z"
        fill="#22C55E" />

    <path d="M430 155 Q440 150 450 145 L464 168 Q453 178 442 183 Z"
        fill="#9333EA" />

    <path d="M70 250 Q85 242 100 240 L105 262 Q88 268 78 275 Z"
        fill="#EC4899" />

    <path d="M120 265 Q128 258 136 255 L151 285 Q143 291 135 295 Z"
        fill="#EC4899" />

    <path d="M385 280 Q395 272 405 268 L418 293 Q407 301 398 305 Z"
        fill="#22C55E" />

    <path d="M430 310 Q440 300 450 295 L465 320 Q455 330 445 335 Z"
        fill="#3B82F6" />

    <path d="M145 350 Q153 340 165 334 L177 355 Q166 364 158 370 Z"
        fill="#3B82F6" />

    <path d="M300 345 Q310 335 320 330 L333 350 Q324 360 314 365 Z"
        fill="#9333EA" />

    <!-- TROPHY -->

    <!-- Left handle -->
    <path d="
        M170 155
        H135
        Q115 155 115 178
        Q115 235 175 245
        L185 220
        Q145 210 145 180
        H175
        Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="6" />

    <!-- Right handle -->
    <path d="
        M330 155
        H365
        Q385 155 385 178
        Q385 235 325 245
        L315 220
        Q355 210 355 180
        H325
        Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="6" />

    <!-- Cup body -->
    <path d="
        M145 125
        Q145 320 250 335
        Q355 320 355 125
        Z"
        fill="#FDBA12"
        stroke="#F59E0B"
        stroke-width="5" />

    <!-- Cup highlight -->
    <path d="
        M170 145
        Q170 285 220 305
        L220 145 Z"
        fill="#FFE66D"
        opacity="0.65" />

    <!-- Cup shade -->
    <path d="
        M300 140
        Q340 180 320 280
        Q305 320 275 325
        Q330 285 330 150 Z"
        fill="#F59E0B"
        opacity="0.45" />

    <!-- Top rim -->
    <ellipse cx="250" cy="125" rx="105" ry="25"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="5" />

    <ellipse cx="250" cy="125" rx="82" ry="12"
        fill="#F59E0B" />

    <!-- Star -->
    <path d="
        M250 175
        L261 204
        L292 206
        L268 225
        L276 255
        L250 238
        L224 255
        L232 225
        L208 206
        L239 204 Z"
        fill="#FFF3A3"
        stroke="#FFE066"
        stroke-width="3" />

    <!-- Trophy neck -->
    <path d="
        M225 325
        H275
        L280 365
        Q280 385 300 395
        H200
        Q220 385 220 365
        Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="5" />

    <!-- Neck highlight -->
    <path d="M235 330 H250 V380 H220 Q238 370 235 330Z"
        fill="#FFE66D"
        opacity="0.7" />

    <!-- Bottom gold ring -->
    <rect x="200" y="390" width="100" height="22" rx="8"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="4" />

    <!-- BLUE BASE -->

    <path d="
        M190 410
        H310
        L325 475
        H175
        Z"
        fill="#1769C2"
        stroke="#0757A6"
        stroke-width="5" />

    <path d="
        M200 420
        H225
        L215 465
        H185
        Z"
        fill="#3B82F6"
        opacity="0.55" />

    <!-- Plaque -->
    <rect x="215" y="430" width="70" height="25" rx="5"
        fill="#4FA3E8"
        stroke="#8CC8F5"
        stroke-width="3" />

    <!-- Lower base -->
    <path d="
        M165 475
        H335
        L345 500
        Q345 510 335 510
        H165
        Q155 510 155 500
        Z"
        fill="#1769C2"
        stroke="#0757A6"
        stroke-width="5" />

</svg>
</span>Winner🎉🎉<br><span style="margin-left:35%">Player 2</p>
        <button id="nbtn" class="nbtn">New Game</button>`
                    winner.classList.add("show");
                    winner.classList.remove("hide");
                }
                document.querySelector("#nbtn").addEventListener("click", () => {
                    boxes.forEach((box) => {
                        box.disabled = false;
                        box.innerText = "";
                        box.classList.remove("x", "o");
                    });

                    turnO = true;

                    winner.classList.remove("show");
                    winner.classList.add("hide");
                });
            }
        }
    }
    let filled = 0;

    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filled++;
        }
    });

    if (filled === 9) {
        winner.innerHTML = `<p>🤣Draw!!</p> <button id="nbtn" class="nbtn">New Game</button>`
        winner.classList.add("show");
        winner.classList.remove("hide");
        document.querySelector("#nbtn").addEventListener("click", () => {
            boxes.forEach((box) => {
                box.disabled = false;
                box.innerText = "";
                box.classList.remove("x", "o");
            });

            turnO = true;

            winner.classList.remove("show");
            winner.classList.add("hide");
        });
    }
};
