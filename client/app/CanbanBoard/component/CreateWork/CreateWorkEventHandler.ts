export function removeDetailDom(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
  const target = event.target as HTMLElement;
  const closetParent = target.closest(".detailContainer");
  closetParent?.remove();
}

export function removeWorkDom(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
  const target = event.target as HTMLButtonElement;
  const findRemoveDom = target.closest(".detailLi");
  findRemoveDom?.remove();
}

export function showAndHideDetail(
  setHideState: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const detailDom = document.querySelector(".detailDom");
  if (detailDom && detailDom.classList.contains("displayNone")) {
    detailDom.classList.remove("displayNone");
    setHideState(true);
  } else {
    detailDom?.classList.add("displayNone");
    setHideState(false);
  }
}
