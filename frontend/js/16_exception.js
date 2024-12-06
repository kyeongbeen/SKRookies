function makeError() {
    console.log(1/0, -1/0);
    throw new Error("Error");
}


try {
    makeError();
} catch (error) {
    console.log("makeError() make Error!");
} finally { 
    console.log("finally!");
}
