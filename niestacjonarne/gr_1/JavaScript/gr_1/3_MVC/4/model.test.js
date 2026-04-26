import { Model } from "./model.js";

function assert(condition, message) {
    if (!condition) {
        console.error("Błąd: ", message);
    } else {
        console.log("OK: ", message);
    }
}

function runTests() {
    const model = new Model();

    model.items = [];

    // test 1 - dodawanie
    model.addItem("Test 1");
    assert(model.getItems().length === 1, "Dodawanie elementu");

    // test 2 - liczenie
    model.addItem("Test 2");
    assert(model.count() === 2, "Liczenie elementów");

}

runTests();