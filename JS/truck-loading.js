function calculateAllocation() {
  const passengerInput = document.getElementById('passengerCounts').value;
  const truckInput = document.getElementById('truckCapacities').value;

  if (!passengerInput || !truckInput) {
    alert('請輸入乘客人數和卡車座位數！');
    return;
  }

  
  const passengers = passengerInput.split(',').map(num => parseInt(num.trim(), 10)).filter(n => !isNaN(n));
  const trucks = truckInput.split(',').map(num => parseInt(num.trim(), 10)).filter(n => !isNaN(n));

  if (passengers.length === 0 || trucks.length === 0) {
    alert('輸入格式錯誤，請確保格式為數字並以逗號分隔！');
    return;
  }

 
  class PriorityQueue {
    constructor() {
      this.queue = [];
    }

    enqueue(value) {
      
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (value > this.queue[i]) {
          this.queue.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) this.queue.push(value); 
    }

    dequeue() {
      return this.queue.shift(); 
    }

    isEmpty() {
      return this.queue.length === 0;
    }
  }

  
  const passengerQueue = new PriorityQueue();
  passengers.forEach(passenger => passengerQueue.enqueue(passenger));

  const truckAllocations = trucks.map(capacity => ({ capacity, allocatedPassengers: [] }));
  const unallocatedPassengers = [];

 
  while (!passengerQueue.isEmpty()) {
    const passenger = passengerQueue.dequeue();
    let bestFitIndex = -1;
    let smallestRemainingCapacity = Infinity;

   
    for (let i = 0; i < truckAllocations.length; i++) {
      const truck = truckAllocations[i];
      if (truck.capacity >= passenger && (truck.capacity - passenger) < smallestRemainingCapacity) {
        bestFitIndex = i;
        smallestRemainingCapacity = truck.capacity - passenger;
      }
    }

    if (bestFitIndex !== -1) {
      truckAllocations[bestFitIndex].allocatedPassengers.push(passenger);
      truckAllocations[bestFitIndex].capacity -= passenger;
    } else {
      unallocatedPassengers.push(passenger); 
    }
  }

  
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <ul>
      ${truckAllocations
        .map((truck, index) => `
          <li>
            卡車 ${index + 1} (剩餘容量: ${truck.capacity}人):
            ${truck.allocatedPassengers.length > 0 
              ? `載有乘客組 (${truck.allocatedPassengers.join(', ')})`
              : '沒有載任何乘客'}
          </li>
        `)
        .join('')}
    </ul>
    ${unallocatedPassengers.length > 0 
      ? `<h3>無法分配的乘客</h3><p>${unallocatedPassengers.join(', ')}</p>` 
      : ''}
  `;
}
