$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      message: {
        required: true,
        minlength: 3,
        maxlength: 100
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      email: "Please enter a valid email address",
      message: {
        required: "Please provide a message",
        minlength: "Your message must be at least 3 characters long",
        maxlength: "Your message must be less than 100 characters long"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
