// import { createAvatar } from '@dicebear/avatars';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';
// @dicebear/big-ears-neutral
// @dicebear/avatars-identicon-sprites
// @dicebear/adventurer
// @dicebear/avatars-avataaars-sprites
// @dicebear/big-ears
// @dicebear/big-smile
// @dicebear/avatars-bottts-sprites
// @dicebear/croodles
// @dicebear/croodles-neutral
// @dicebear/micah
// @dicebear/miniavs
// @dicebear/open-peeps
// @dicebear/personas
// @dicebear/pixel-art
// @dicebear/pixel-art-neutral


export default function avatar() {
  const avatarBlock = document.querySelector('.form__avatar');
  const nameInput = document.querySelector('.form__input');
  const select = document.querySelector('.form__select');

  const createAva = (text) => {
    console.log(select.value)
    let svg = createAvatar(style, {
      seed: `${text}`,
      backgroundColor: 'tomato'
      // ... and other options
    });
    return svg;
  };

  select.addEventListener('input', (evt) => {
    console.log(evt.target.value);
  })

  nameInput.addEventListener('input', (evt) => {
    evt.preventDefault();
    const avatarName = evt.target.value;
    const avatarSvg = createAva(avatarName);

    avatarBlock.innerHTML = avatarSvg;
  })
}
