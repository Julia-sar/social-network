import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

export default function ProfileInfo({ profile }) {
  if (!profile) {
    return <Preloader />;
  }
  const {
    contacts = {},
    photos,
    fullName,
    lookingForAJobDescription,
  } = profile;

  const contactsLabels = Object.values(contacts).filter(Boolean);

  return (
    <div>
      <div>
        <img
          alt="Лес"
          src="http://st-gdefon.gallery.world/wallpapers_medium/535200_gallery.world.jpg"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img alt="Аватарка" src={photos.large} />
        {contactsLabels.length > 0 && (
          <ul>
            {contactsLabels.map((contactLabel) => (
              <li key={contactLabel}>{contactLabel}</li>
            ))}
          </ul>
        )}

        <h1>{fullName.toUpperCase()}</h1>
        <p>{`Status: ${lookingForAJobDescription}`}</p>
      </div>
    </div>
  );
}
