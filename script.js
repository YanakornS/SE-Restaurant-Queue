let queue = [];
let number = [];
const maxQueueSize = 7;

document.getElementById("enqueueBtn").addEventListener("click", () => {
    const customerName = document.getElementById("customerName").value;
    const customerPhone = document.getElementById("customerPhone").value;
    if (queue.length < maxQueueSize) {
        if (customerName && customerPhone) {
            queue.push(customerName);
            number.push(customerPhone);
            document.getElementById("customerName").value = ""; // Clear the input
            document.getElementById("customerPhone").value = ""; // Clear the input
            updateQueueDisplay();
        }
    } else {
        alert("Queue is Full");
    }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
    if (queue.length > 0) {
        alert("Next Customer : " + queue.shift() + " Phone : " + number.shift());
        updateQueueDisplay();
    } else {
        alert("No more customers in the queue.");
    }
});

document.getElementById("cls").addEventListener("click", () => {
    if (queue.length > 0) {
        queue.length = 0;
        number.length = 0;
        alert("Queue Cleared!!!");
        updateQueueDisplay();
    } else {
        alert("No more customers in the queue.");
    }
});

function updateQueueDisplay() {
    const queueList = document.getElementById("queueList");
    if (queue.length === maxQueueSize) {
        queueList.innerHTML = "<h3>Queue : Queue is Full</h3>";
    } else if (queue.length === 0) {
        queueList.innerHTML = "<h3>Queue : Queue is Empty</h3>";
    } else {
        queueList.innerHTML =
            "<h3>Queue : " + queue.length + " / " + maxQueueSize + "</h3>";
    }
    queue.forEach((customer, index) => {
        queueList.innerHTML += `<div class="circle"><p>${
      index + 1
    }. ${customer}</p></div>`;
    });
}