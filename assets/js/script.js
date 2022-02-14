function toggleVisuallyHidden({ target }) {
  ["start_date", "end_date"].forEach((inputId) => {
    document
      .querySelector(`label[for=${inputId}]`)
      .classList.toggle("visually-hidden");
  });
}

function copyTooltipText({ target }) {
  const btn = target.nodeName === "BUTTON" ? target : target.parentElement;
  const tooltip = btn.querySelector(".tooltip");
  const text = btn.querySelector(".text");
  if (tooltip.dataset.copied === "true") return;
  navigator.clipboard.writeText(text.innerText.toLowerCase());
  tooltip.innerText = `copied: ${text.innerText}`;
  tooltip.dataset.copied = true;
}

function revertCopyText({ target }) {
  const btn = target.nodeName === "BUTTON" ? target : target.parentElement;
  const tooltip = btn.querySelector(".tooltip");
  if (tooltip.dataset.copied !== "true") return;
  tooltip.innerText = "copy";
  tooltip.dataset.copied = false;
}
