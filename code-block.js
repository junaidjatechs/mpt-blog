function copyCode() {
  const code = document.querySelector('pre code');
  const range = document.createRange();
  range.selectNode(code);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  try {
    document.execCommand('copy');
    alert("Code copied to clipboard!");
  } catch (e) {
    alert("Failed to copy code.");
  }
  window.getSelection().removeAllRanges();
}
