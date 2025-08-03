function addOrUpdateUser() {
      const Name = document.getElementById('Name').value.trim();
      const Gmail = document.getElementById('Gmail').value.trim();

      if (!Name || !Gmail) {
            alert("Please fill all fields.");
            return;
      }
}
