setInterval(() => {
  let bonusIconSvg = document.querySelector("div.claimable-bonus__icon svg");
  if (bonusIconSvg) {
    bonusIconSvg.closest("button").click();
  }
}, 2000);
