// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks-42);
}
function distanceFromHqInFeet (blocks) {
    return Math.abs((blocks-42)*264);
}
function distanceTravelledInFeet (start,destination) {
    return Math.abs((start - destination)*264);
}
function calculatesFarePrice (start, destination) {
    if ((Math.abs(destination-start)*264)<=400) {return 0}
    else if((Math.abs(destination-start)*264)>400 && (Math.abs(destination-start)*264)<=2000) {
        return ((Math.abs(destination-start)*264)-400)*0.02;}
    else if((Math.abs(destination-start)*264)>2000 && (Math.abs((destination-start)*264)<=2500)) {return 25}
    else if((Math.abs(destination-start)*264)>2500) {return 'cannot travel that far'}
}
