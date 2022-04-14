const viewer = document.getElementById('viewer');
const stored = document.getElementById('viewerStored');
let storedNum;
let symbol;
let isEqualsPressed;

function addNumber(number) {
    if (Number(viewer.textContent) == 0) {
        viewer.textContent = number;
    } else {
        viewer.textContent += number;
    }
}

function getSqrt() {
    sqrt = Math.sqrt(Number(viewer.textContent));
    console.log(sqrt);
    viewer.textContent = sqrt;
}

function addDot() {
    if (viewer.textContent.includes('.')) {
        viewer.textContent = viewer.textContent;
    } else {
        viewer.textContent = viewer.textContent.trim() + '.';
    }
}

function negate() {
    if (viewer.textContent.includes('-')) {
        viewer.textContent = viewer.textContent.substring(1);
    } else {
        viewer.textContent = '-' + viewer.textContent;
    }
}

function roundNumber() {
    viewer.textContent = Math.round(Number(viewer.textContent));
}

function mathAction(activeSymbol) {
    if (storedNum && !isEqualsPressed) {
        equals(false);
    }
    storedNum = Number(viewer.textContent);
    symbol = activeSymbol;
    viewer.textContent = 0;
    if (symbol) {
        stored.textContent = storedNum + symbol;
    } else { stored.textContent = storedNum; }

}

function equals(pressed) {
    isEqualsPressed = pressed;
    if (symbol) {
        stored.textContent = storedNum + symbol + Number(viewer.textContent) + " =";
    } else {
        stored.textContent = Number(viewer.textContent) + " =";
    } //Nebaigta su šaknim √

    if (symbol == '+') {
        viewer.textContent = storedNum + Number(viewer.textContent);
    } else if (symbol == '-') {
        viewer.textContent = storedNum - Number(viewer.textContent);
    } else if (symbol == '*') {
        viewer.textContent = storedNum * Number(viewer.textContent);
    } else if (symbol == '/') {
        viewer.textContent = storedNum / Number(viewer.textContent);
    }
}
function percentage() {
    if (storedNum > Number(viewer.textContent)) {
        if (symbol == '+') {
            viewer.textContent = storedNum + ((storedNum / 100) * Number(viewer.textContent));
        } else if (symbol == '-') {
            viewer.textContent = storedNum - ((storedNum / 100) * Number(viewer.textContent));
        } else if (symbol == '*') {
            viewer.textContent = (storedNum / 100) * Number(viewer.textContent);
        } else if (symbol == '/') {
            viewer.textContent = storedNum + (Number(viewer.textContent) / 100);
        }
    } else {
        if (symbol == '+') {
            viewer.textContent = Number(viewer.textContent) + ((NumNumber(viewer.textContent) / 100) * storedNum);
        } else if (symbol == '-') {
            viewer.textContent = Number(viewer.textContent) - ((Number(viewer.textContent) / 100) * storedNum);
        } else if (symbol == '*') {
            viewer.textContent = (Number(viewer.textContent) / 100) * storedNum;
        } else if (symbol == '/') {
            viewer.textContent = Number(viewer.textContent) + (storedNum / 100);
        }
    }
}

function clearAll() {
    viewer.textContent = 0;
    stored.textContent = stored.textContent.slice(0, 0);
    storedNum = 0;
}
function clearViewer() {
    viewer.textContent = 0;
}
function clearNumber() {
    if (Number(viewer.textContent) > 9 || Number(viewer.textContent) < -9) {
        viewer.textContent = viewer.textContent.slice(0, -1);
    } else {
        viewer.textContent = 0;
    }
}

// Math.ceil(1.9) apvalina higher
// Math.floor(1.1) apvalina lower


// percentage()