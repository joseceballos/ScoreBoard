let pointsHome = document.getElementById("boardPointNumberHome")
let pointsGuest = document.getElementById("boardPointNumberGuest")

let pointsHomeNumber = 0
let pointsGuestNumber = 0

function showPoints () {
    pointsHome.textContent = pointsHomeNumber
    pointsGuest.textContent = pointsGuestNumber
    
    if(pointsHomeNumber > pointsGuestNumber)
    {
        document.getElementById("boardPointNumberHome").style.color = "green"
        document.getElementById("boardPointNumberGuest").style.color = "red"
    }
    
    else if (pointsHomeNumber < pointsGuestNumber)
    {
        document.getElementById("boardPointNumberGuest").style.color = "green"
        document.getElementById("boardPointNumberHome").style.color = "red"
    }
    
    else
    {
        document.getElementById("boardPointNumberGuest").style.color = "red"
        document.getElementById("boardPointNumberHome").style.color = "red"
    }
}

function addHomePoints (n) {
    pointsHomeNumber += n;
    showPoints();
}

function addGuestPoints (n) {
    pointsGuestNumber += n;
    showPoints();
}

showPoints()