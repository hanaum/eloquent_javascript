var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  try {
  	box.unlock();
  	return body();
  } finally {
  	box.lock();
  }
}

try {
  withBoxUnlocked(function() {
    box.content.push("gold piece");
    console.log(box.content);
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);