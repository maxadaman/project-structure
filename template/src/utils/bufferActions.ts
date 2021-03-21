export const copy = (str: string): void => {
  const input = document.createElement('input');
  input.value = str;
  input.style.position = 'absolute';
  input.style.left = '-9999px';
  document.body.append(input);
  input.select();
  document.execCommand('copy');
  input.remove();
};
