/*
import { useEffect, useState } from "react";
import { getAppIcon } from "../api/appStore";

function AppIcon({ appId }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    getAppIcon(appId).then(setIcon);
  }, [appId]);

  if (!icon) return <p ERROR GETAPPICON/>;
  return <img src={icon} alt="App icon" />;
}

export default AppIcon;
*/
import { useEffect, useState } from "react";
import { getAppStoreIcon } from "../api/appStore";

export default function AppIcon({ appId }) {
  const [iconUrl, setIconUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAppStoreIcon(appId)
      .then(setIconUrl)
      .catch(err => setError(err.message));
  }, [appId]);

  if (error) return <p>{error}</p>;
  if (!iconUrl) return <p>Loading icon...</p>;

  return (
    <img
      src={iconUrl}
      alt="App Store icon"
      width={128}
      height={128}
      style={{ borderRadius: 24 }}
    />
  );
}
