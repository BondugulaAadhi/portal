 // Sample intern data
 let internsData = [
    {
        uniqueId: "D1O2C",
        name: "Ghazala, Zameer",
        contactInfo: "zameerghazala20@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc.html"
    },
    {
        uniqueId: "D103N",
        name: "Aadhi, Bondugula",
        contactInfo: "aadhirock022003@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc2.html"
    },
    // Add more intern data here...
];

// Function to update intern details based on ID
function updateInternDetails() {
    const internID = document.getElementById('internIDToUpdate').value;
    const internIndex = internsData.findIndex(intern => intern.uniqueId === internID);

    if (internIndex !== -1) {
        // Display form to update intern details
        displayInternUpdateForm(internsData[internIndex], internIndex);
    } else {
        alert("Intern ID not found. Please enter a valid ID.");
    }
}

// Function to display form for updating intern details
function displayInternUpdateForm(intern, index) {
    const internDetailsDiv = document.getElementById('internDetails');
    internDetailsDiv.innerHTML = `
        <h2>Update Intern Details</h2>
        <form id="updateForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${intern.name}" required><br>

            <label for="contactInfo">Contact Info:</label>
            <input type="text" id="contactInfo" name="contactInfo" value="${intern.contactInfo}" required><br>

            <label for="role">Role:</label>
            <input type="text" id="role" name="role" value="${intern.role}" required><br>

            <label for="performance">Performance:</label>
            <input type="text" id="performance" name="performance" value="${intern.performance}" required><br>

            <label for="documentsLink">Documents Link:</label>
            <input type="text" id="documentsLink" name="documentsLink" value="${intern.documentsLink}" required><br>

            <button type="submit">Update</button>
        </form>
    `;

    // Handle form submission
    document.getElementById('updateForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Update intern details
        updateIntern(this, index);
    });
}

// Function to update intern details
function updateIntern(form, index) {
    const updatedIntern = {
        uniqueId: document.getElementById('internIDToUpdate').value,
        name: form.name.value,
        contactInfo: form.contactInfo.value,
        role: form.role.value,
        performance: form.performance.value,
        documentsLink: form.documentsLink.value
    };

    // Update intern data in the internsData array
    internsData[index] = updatedIntern;

    alert("Intern details updated successfully.");
}
const back=document.getElementById('back')
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back');
    backButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior (page reload)

        // Get the current URL and extract the root URL
        const currentUrl = window.location.href;
        const rootUrl = currentUrl.split('/').slice(0, 3).join('/');

        window.history.pushState({ path: rootUrl }, '', rootUrl); // Change the URL to the root URL without reloading
    });
});


