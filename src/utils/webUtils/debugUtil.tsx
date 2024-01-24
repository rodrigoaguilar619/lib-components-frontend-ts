import { _APP_ENVIRONMENT_ } from "../../catalogs/constantCatalog";
import DebugClass from "../../classes/debugClass";
import { EnvironmentEnum } from "../../catalogs/enumCatalog";

const colorsModuleList = [
    "#F91F1F", "#F9961F", "#F9C11F", "#D1BC06", "#A9D106", "#84D106", "#50D106",
    "#06D110", "#06D17E", "#06D1CE", "#06A0D1", "#0684D1", "#0669D1", "#063ED1",
    "#4106D1", "#8B06D1", "#D106C8", "#D1066C"];

const colorsServiceList = [
    "#FEE3DF", "#FEF3DF", "#FAFEDF", "#EFFEDF", "#E4FEDF", "#DFFEEF", "#DFFEF7",
    "#DFF7FE", "#DFEBFE", "#DFDFFE", "#ECDFFE", "#F5DFFE", "#FEDFFB", "#FEDFE7"];

function getRandomNumber() {
    let randomBuffer = new Uint32Array(1);
    crypto.getRandomValues(randomBuffer);
    let randomNumber = randomBuffer[0] % 500 + 1;

    return randomNumber;
}

// Function to generate a cryptographically secure random number within a range
function getRandomInt(min: number, max: number) {
    const range = max - min;
    const bytes = Math.ceil(Math.log2(range) / 8);
    const randomBytes = new Uint8Array(bytes);
    crypto.getRandomValues(randomBytes);
    const value = randomBytes.reduce((acc, byte) => (acc << 8) | byte, 0);
    return min + (value % range);
  }

export function generateDebugClassModule(moduleName: string) {
    let randomNumber = getRandomNumber();
    return new DebugClass(" " + randomNumber + " MODULE: " + moduleName + " ", "color: white; background-color: " + colorsModuleList[getRandomInt(0, colorsModuleList.length)] +";");
}

export function generateDebugClassService(moduleName: string) {
    let randomNumber = getRandomNumber();
    return new DebugClass(" " + randomNumber + " SERVICE: " + moduleName + " ", "color: black; background-color: " + colorsServiceList[getRandomInt(0, colorsServiceList.length)] +";");
}

export function debug(debugClass: DebugClass, ...params: any[]) {
    if (_APP_ENVIRONMENT_ !== EnvironmentEnum.PRODUCTION)
        console.log("%c" + debugClass.getModuleName(), debugClass.getDebugColor() !== undefined ? debugClass.getDebugColor() : 'color: white; background-color: #E1901A', ...params);
}

export function debugError(debugClass: DebugClass, ...params: any[]) {
    console.error("%c" + debugClass.getModuleName(), debugClass.getDebugColor() !== undefined ? debugClass.getDebugColor() : 'color: white; background-color: #E1901A', ...params);
}