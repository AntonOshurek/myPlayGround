// import { createAvatar } from '@dicebear/avatars';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';
// @dicebear/big-ears-neutral
// @dicebear/avatars-identicon-sprites
// @dicebear/adventurer

export default function avatar() {
  const avatarBlock = document.querySelector('.form__avatar');
  const nameInput = document.querySelector('.form__input');

  const createAva = (text) => {
    let svg = createAvatar(style, {
      seed: `${text}`,
      backgroundColor: 'tomato'
      // ... and other options
    });
    return svg;
  };

  nameInput.addEventListener('input', (evt) => {
    evt.preventDefault();
    const avatarName = evt.target.value;
    const avatarSvg = createAva(avatarName);

    avatarBlock.innerHTML = avatarSvg;
  })
}
