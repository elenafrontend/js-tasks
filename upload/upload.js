export default function upload(selector, options = {}) {
  const input = document.querySelector(selector);

  const openBtn = document.createElement('button');
  openBtn.classList.add('btn');
  openBtn.textContent = 'Открыть';
  input.insertAdjacentElement('afterend', openBtn);

  if (options.multi) {
    input.setAttribute('multiple', true);
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(','));
  }

  const triggerInput = () => input.click();

  const changeHandler = (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    files.forEach((file) => {
      if (!file.type.match('image')) return;
    });
  };

  openBtn.addEventListener('click', triggerInput);
  input.addEventListener('change', changeHandler);
}
