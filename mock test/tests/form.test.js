import { mountForm } from '../src/form';

describe('form', () => {
  test('valideerib ja kuvab sõnumi', () => {
    mountForm();
    const name = document.getElementById('name');
    const email = document.getElementById('email'); 
    const send = document.getElementById('send');
    const msg = document.getElementById('msg');

    expect(send.disabled).toBe(true);

    name.value = 'Ann';
    email.value = 'bad';
    email.dispatchEvent(new Event('input'));
    name.dispatchEvent(new Event('input'));
    expect(send.disabled).toBe(true);

    email.value = 'ann@example.com';
    email.dispatchEvent(new Event('input'));
    expect(send.disabled).toBe(false);

    document.getElementById('f').dispatchEvent(new Event('submit', { cancelable: true }));
    expect(msg.textContent).toBe('OK: Ann');
  });
});
