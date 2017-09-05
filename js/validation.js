$(function() {
  // Initialize form validation on the registration form.
  $("form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: {
        required: true
      },
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
      name: {
        required: "This is a required field."
      },
      email: {
        required: "This is a required field.",
        emai: "Please enter a valid email address."
      },
      message: {
        required: "This is a required field.",
        minlength: "Your message must be at least 3 characters long.",
        maxlength: "Your message must be less than 100 characters long."
      }
    },



    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
