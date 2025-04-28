class Queue {
    constructor(initialData = []) {
        this.items = initialData;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift(); 
    }

    delete(index) {
        this.items.splice(index, 1); 
    }

    moveUp(index) {
        if (index > 0) {
            [this.items[index], this.items[index - 1]] = [this.items[index - 1], this.items[index]]; 
        }
    }

    moveDown(index) {
        index = parseInt(index); 
        if (index < this.items.length - 1) {
            [this.items[index], this.items[index + 1]] = [this.items[index + 1], this.items[index]]; 
        }
    }
    

    clear() {
        this.items = []; 
    }

    toJSON() {
        return JSON.stringify(this.items); 
    }
}


const schedule = new Queue(JSON.parse(localStorage.getItem("schedule")) || []);
const scheduleList = document.getElementById("schedule-list");


function renderSchedule() {
    scheduleList.innerHTML = ""; 
    if (schedule.items.length > 0) {
        schedule.items.forEach((spot, index) => {
            const item = document.createElement("div");
            item.className = "schedule-item";

            item.innerHTML = `
                <img src="${spot.img}" alt="${spot.name}">
                <div>
                    <p><strong>${spot.name}</strong></p>
                    <p>${spot.address}</p>
                </div>
                <div class="button-adjust">
                    <button class="delete-btn" data-index="${index}">刪除</button>
                    <button class="move-up-btn" data-index="${index}">↑</button>
                    <button class="move-down-btn" data-index="${index}">↓</button>
                <div>
            `;

            scheduleList.appendChild(item);
        });
    } else {
        scheduleList.innerHTML = "<p>目前沒有加入任何行程。</p>";
    }

   
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            schedule.delete(index); 
            localStorage.setItem("schedule", schedule.toJSON());
            renderSchedule(); 
        });
    });

    document.querySelectorAll(".move-up-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            schedule.moveUp(index); 
            localStorage.setItem("schedule", schedule.toJSON());
            renderSchedule(); 
        });
    });

    document.querySelectorAll(".move-down-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            schedule.moveDown(index); 
            localStorage.setItem("schedule", schedule.toJSON());
            renderSchedule(); 
        });
    });
}


renderSchedule();


document.getElementById("clear-schedule").addEventListener("click", () => {
    if (confirm("確定要清空所有行程嗎？")) {
        schedule.clear();
        localStorage.removeItem("schedule");
        renderSchedule();
        alert("行程已清空！");
    }
});
