function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance > 2500) {
        return "cannot travel that far";
    } else if (distance > 2000) {
        return 25;
    } else if (distance - 400 > 0) {
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}