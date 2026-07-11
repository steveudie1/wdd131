// 1. Select the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Add an event listener for the 'Add Chapter' button click
button.addEventListener('click', function() {
    // Check if the input is empty
    if (input.value.trim() !== '') {
        
        // Create the list item (li) element
        const li = document.createElement('li');
        
        // Create the delete button element
        const deleteButton = document.createElement('button');
        
        // Set up the text and styling for the list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Matches your CSS class
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        
        // Append the delete button to the list item
        li.append(deleteButton);
        
        // Append the list item to the unordered list (ul)
        list.append(li);
        
        // Add an event listener to the delete button to remove the item
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Returns focus to the input box
        });
        
        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();
        
    } else {
        // If the input is empty, return focus to the input box without doing anything
        input.focus();
    }
});