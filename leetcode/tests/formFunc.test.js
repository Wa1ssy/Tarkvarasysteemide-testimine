const { formValidationHandler } = require("../src/formFunc");

describe("tagasiside form", () => {
  let formEl, firstNameInputEl, lastNameInputEl, commentsTextEl,
      newsletterCheckboxEl, emailContainerEl, emailInputEl, submitBtnEl;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="form-control"></form>
      <input id="first-name-input" name="first-name" />
      <input id="last-name-input" name="last-name" />
      <textarea id="comments"></textarea>
      <label class="email" style="display:none">
        <input id="email-input" />
      </label>
      <input id="newsletter__checkbox" type="checkbox" />
      <button id="submit-btn" disabled="true"></button>
    `;

    formEl = document.getElementById('form-control');
    firstNameInputEl = document.getElementById('first-name-input');
    lastNameInputEl = document.getElementById('last-name-input');
    commentsTextEl = document.getElementById('comments');
    newsletterCheckboxEl = document.getElementById('newsletter__checkbox');
    emailContainerEl = document.querySelector('.email');
    emailInputEl = document.getElementById('email-input');
    submitBtnEl = document.getElementById('submit-btn');
  });

  test('invalid when subscribed but no email', () => {
    firstNameInputEl.value = "Anton";
    lastNameInputEl.value = "Petrov";
    commentsTextEl.value = "Nice!";
    newsletterCheckboxEl.checked = true;
    emailInputEl.value = "";
    expect(formValidationHandler({
      formEl, firstNameInputEl, lastNameInputEl, commentsTextEl,
      newsletterCheckboxEl, emailContainerEl, emailInputEl, submitBtnEl
    })).toBe(false);
  });
});
