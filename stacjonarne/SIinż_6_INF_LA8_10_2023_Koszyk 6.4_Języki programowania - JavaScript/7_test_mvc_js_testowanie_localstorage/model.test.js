import { Model } from "./model.js";

function assert(condition, message) {
    if (!condition) {
        console.error("❌ BŁĄD: ", message);
    } else {
        console.log("✅ OK:", message);
    }
}

function runTests() {
    const model = new Model();
    
    // Test 1 - dodawanie
    model.addItem("Test 1");
    assert(model.getItems().length === 1, "Dodawanie elementu"); 
    
    // Test 2 - liczenie
    model.addItem("Test 2");
    assert(model.count() === 2, "Liczenie elementów");

    // Test 3 - usuwanie
    model.removeItem(0);
    assert(model.count() === 1, "Usuwanie elementu");

    console.log("🎉 Test zakończony");
    
}

runTests();