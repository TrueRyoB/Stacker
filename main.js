document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('stacker-form');
    const formPage = document.getElementById('form-page');
    const successPage = document.getElementById('success-page');
    const newSubmissionBtn = document.getElementById('new-submission');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const content = document.getElementById('content').value;
        await uploadLib.handleSubmit.handleSubmit(email, content);

        formPage.classList.add('hidden');
        setTimeout(function() {
            successPage.classList.add('active');
        }, 300);

        form.reset();
    });

    newSubmissionBtn.addEventListener('click', function() {
        // Transition back to form page
        successPage.classList.remove('active');

        // Small delay for animation effect
        setTimeout(function() {
            formPage.classList.remove('hidden');
        }, 300);
    });
});