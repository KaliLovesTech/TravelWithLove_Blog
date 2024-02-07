document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("subscriberName").value;
    var email = document.getElementById("subscriberEmail").value;

    // Replace `yourGoogleFormURL` with the actual URL and `entry.xxxxxx` with the correct field IDs
    var googleFormUrl = `yourGoogleFormURL?entry.123456=${encodeURIComponent(name)}&entry.654321=${encodeURIComponent(email)}`;

    // Redirect to the Google Form
    window.location.href = googleFormUrl;
});
