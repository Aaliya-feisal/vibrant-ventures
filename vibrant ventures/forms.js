$(function() {
    $("#departure-date").datepicker();
    $("#return-date").datepicker();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.querySelector(".booking-form form");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Retrieve date inputs (strings)
        const departureDateInput = document.getElementById("departure-date").value;
        const returnDateInput = document.getElementById("return-date").value;
        
        // Converts string objects to date objects
        const departureDate = new Date(departureDateInput);
        const returnDate = new Date(returnDateInput);
        const currentDate = new Date();
        
        // Validate arrival date
        if (departureDate <= currentDate) {
            alert("Departure date must be at least one day after the current date.");
            return;
        }
        
        // Validate departure date
        if (returnDate <= departureDate) {
            alert("return date must be at least one day after the arrival date.");
            return;
        }

        // If validations pass, submit the form
        if(confirm("Booking Confirmed\n\nThank you for choosing Vibrant Ventures! Your booking has been confirmed.\n\nWe will be in touch with you via email within the next 48 hours to provide further details.")){
            bookingForm.submit();
        }
    });
});