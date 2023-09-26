const todos = [];

while (true) {
   const input = prompt(
      "Please make your choice :   \n 1. NEW: to add a todo \n 2. LIST: to see all the todos \n 3. DELETE: to remove a specific todo \n 4. QUIT: to exit de program "
   ).toLowerCase();

   if (input === "list") {
      console.log("********* TODO LIST *********");

      if (!todos.length) {
         console.log("Todo list is empty");
      }else{
         for (let i = 0; i < todos.length; i++) {
            const index = i + 1;
            console.log(`${index}. ${todos[i]}`);
         }
      }

   } else if (input === "new") {
      const newTodo = prompt("Enter new todo");
      todos.push(newTodo);
      console.log(`Item '${newTodo}' added to the list`);
   } else if (input === "delete") {
      const index = prompt("choose for deletion");
      todos.splice(parseInt(index) - 1, 1);
   } else if (input === "quit") {
      break;
   } else {
      newTodo = alert("Please enter a valid command");
   }
}

